import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { chosenOffer } from "../../redux/slices/offersSlice";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import s from "./Reviews.module.scss";

export const Reviews = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const chosenPageOffer = useSelector(state => state.offers.chosenOffer)
    const token = useSelector(state => state.auth.saveLogin)

    const [reviews, setReviews] = useState([])
    const [newReview, setNewReview] = useState('')

    useEffect(() => {
        const getReviews = async () => {
            try {
                const res = await axios.get(`http://localhost:8090/ads/${chosenPageOffer.id}/comments`);
                setReviews(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getReviews()    
    },[])

    const getReviews = async (e) => {
        e.preventDefault()
        if (newReview.length >= 1) {
        try {
            const res = await axios.post(`http://localhost:8090/ads/${chosenPageOffer.id}/comments`, {"text" : newReview}, {headers: {
                'authorization': `Bearer ${token.userToken}`
            }});
            const getReviews = async () => {
                try {
                    const res = await axios.get(`http://localhost:8090/ads/${chosenPageOffer.id}/comments`);
                    setReviews(res.data)
                } catch (error) {
                    console.log(error);
                }
            }
            getReviews()    
            console.log(res.statusText);
        } catch (error) {
            if (error.response.data.detail === "Could not validate credentials: Not enough segments") {
                alert('Авторизируйтесь что бы оставлять комментарии')
                navigate('/loginPage')
            }
            console.log(error);
        }
        }
        else if (newReview.length <= 0) {
            alert('Введите комментарий')
        }
    }

    return(
        <>
        <Header></Header>
        <div className={s.ContainerBg}>
            <div className={s.Modal}>
                <NavLink to={'/'} className={s.Modal_LogoLinkMob}>
                    <img className={s.Modal_LogoMobImg} src="./img/logo-mob.png" alt="logo" />
                </NavLink>
            </div>
            <div className={s.Modal_Block}>
                <div className={s.Modal_Content}>
                    <h3 className={s.Modal_Title}>Новое объявление</h3>
                    <div className={s.Modal_BtnClose}>
                        <div className={s.Modal_BtnCloseLine} onClick={() => navigate(-1)}></div>
                    </div>
                    <div className={s.Modal_Scroll}>
                        <form className={s.Modal_FormNewArt} id="formNewArt" onSubmit={(e) => getReviews(e)}>
                            <div className={s.Modal_FormNewArt_Block}>
                                <label htmlFor="text">Добавить отзыв</label>
                                <textarea className={s.Modal_FormNewArt_Area} name="text" id="formArea" cols="auto" rows="5" placeholder="Введите описание" value={newReview} onChange={(e) => setNewReview(e.target.value)}></textarea>
                            </div>
                            <button className={s.Modal_FormNewArt_BtnPub} id="btnPublish">Опубликовать</button>
                        </form>
                        {
                            reviews.map((review) => {

                                let date = review.created_on.split('T')
                                let shorterDate = date[0].split('-')
                                let shorterYear = shorterDate[0].split('20')
                                let time = date[1].split('.')
                                let shorterTime = time[0].split(':')

                                const navToSeller = () => {
                                    dispatch(chosenOffer({user: review.author, images: [], created_on: 'T'}))
                                    navigate('/sellerProfilePage')
                                }
                                                                                    
                                return (
                                    <div className={s.Modal_Reviews} key={Math.random()}>
                                        <div className={s.Modal_Reviews_Review}>
                                            <div className={s.Modal_Reviews_Review_Item}>
                                                <div className={s.Modal_Reviews_Review_Left}>
                                                    <div onClick={() => navToSeller()} className={s.Modal_Reviews_Review_Img}>
                                                        <img src={`http://localhost:8090/${review.author.avatar}`} alt=""/>
                                                    </div>
                                                </div>
                                                <div className={s.Modal_Reviews_Review_Right}>
                                                    <p onClick={() => navToSeller()} className={s.Modal_Reviews_Review_Name}>{review.author.name} <span>Создано {shorterDate[2]}.{shorterDate[1]}.{shorterYear[1]} в {shorterTime[0]}:{shorterTime[1]}</span></p>
                                                    <h5 className={s.Modal_Reviews_Review_Title}>Комментарий</h5>
                                                    <p className={s.Modal_Reviews_Review_Text}>{review.text}</p>
                                                </div>
                                            </div>
                                        </div>   
                                    </div>     
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>                
        </>
    )
}

export default Reviews