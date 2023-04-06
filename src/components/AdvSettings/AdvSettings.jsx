import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./AdvSettings.module.scss";

export const AdvSettings = () => {
    const sellerOfferId = useSelector(state => state.offers.chosenOffer.id)
    const token = useSelector(state => state.auth.saveLogin)
    const navigate = useNavigate()

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);
    const [imageSrc, setImageSrc] = useState([]);

    const uploadContent = (event) => {
        event.preventDefault()
        if (images.length >= 5) {
            console.log(images);
            return alert('Максимум 5 фотографий')
        }
        if (event.target.files[0]) {
            setImages([...images, ...event.target.files])

            const newImageSrc =[]       
                if (event.target.files[0].type && !event.target.files[0].type.startsWith('image/')) {
                    console.log('File is not an image.', event.target.files[0].type, event.target.files[0]);
                    return;
                }
                
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                    newImageSrc.push(reader.result)
                    setImageSrc([...imageSrc, ...newImageSrc])  
                })
                reader.readAsDataURL(event.target.files[0])   
        }
    }

    const newAdv = async (event) => {
        event.preventDefault()

        try {
            const res = await axios.patch(`http://localhost:8090/ads/${sellerOfferId}`, {title: title, description: description, price: price}, {
                headers: {
                'authorization': `Bearer ${token.userToken}`
            }
            })
            console.log(res.data.id);
            images.forEach(image => {
                const formData = new FormData()
                formData.append('file', image)
                console.log(image);
    
                    axios.post(`http://localhost:8090/ads/${res.data.id}/image`, formData, {
                        headers: {
                        'Content-type': 'multipart/form-data',
                        'authorization': `Bearer ${token.userToken}`
                    }
                    }).then(res => {
                    console.log(res);
                    }).catch(error=> {
                    console.log(error);
                    })
            });    
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
        navigate('/')
        }, 500);
    }

    return(
        <div className={s.ContainerBg}>
            <div className={s.Modal_Block}>
                <div className={s.Modal_Content}>
                    <h3 className={s.Modal_Title}>Редактировать объявление</h3>
                    <div className={s.Modal_BtnClose}>
                        <div className={s.Modal_BtnCloseLine}></div>
                    </div>
                    <form className={s.Modal_FormNewArt} id="formNewArt" onSubmit={(e) => newAdv(e)}>
                        <div className={s.Modal_FormNewArt_Block}>
                            <label htmlFor="name">Название</label>
                            <input className={s.Modal_FormNewArt_Input} onChange={(e) => setTitle(e.target.value)} type="text" name="name" id="formName" placeholder="Введите название"/>
                        </div>
                        <div className={s.Modal_FormNewArt_Block}>
                            <label htmlFor="text">Описание</label>                            
                            <textarea className={s.Modal_FormNewArt_Area} onChange={(e) => setDescription(e.target.value)} name="text" id="formArea" cols="auto" rows="10" placeholder="Введите описание"></textarea>
                        </div>
                        <div className={s.Modal_FormNewArt_Block}>
                            <p className={s.Modal_FormNewArt_P}>Фотографии товара<span>не более 5 фотографий</span></p>
                            <div className={s.Modal_FormNewArt_BarImg}>
                                <div className={s.Modal_FormNewArt_Img}>
                                    <input className={s.Modal_FormNewArt_HiddenBtn} accept={'image/*'} type="file" name="advimg" onChange={(e) => uploadContent(e)} />
                                    <img src={imageSrc[0]} alt=""/>
                                    <div className={s.Modal_FormNewArt_ImgCover}></div>                                    
                                </div>
                                <div className={s.Modal_FormNewArt_Img}>
                                    <input className={s.Modal_FormNewArt_HiddenBtn} accept={'image/*'} type="file" name="advimg" onChange={(e) => uploadContent(e)} />
                                    <img src={imageSrc[1]} alt=""/>
                                    <div className={s.Modal_FormNewArt_ImgCover}></div>
                                </div>
                                <div className={s.Modal_FormNewArt_Img}>
                                    <input className={s.Modal_FormNewArt_HiddenBtn} accept={'image/*'} type="file" name="advimg" onChange={(e) => uploadContent(e)} />
                                    <img src={imageSrc[2]} alt=""/>
                                    <div className={s.Modal_FormNewArt_ImgCover}></div>
                                </div>
                                <div className={s.Modal_FormNewArt_Img}>
                                    <input className={s.Modal_FormNewArt_HiddenBtn} accept={'image/*'} type="file" name="advimg" onChange={(e) => uploadContent(e)} />
                                    <img src={imageSrc[3]} alt=""/>
                                    <div className={s.Modal_FormNewArt_ImgCover}></div>
                                </div>
                                <div className={s.Modal_FormNewArt_Img}>
                                    <input className={s.Modal_FormNewArt_HiddenBtn} accept={'image/*'} type="file" name="advimg" onChange={(e) => uploadContent(e)} />
                                    <img src={imageSrc[4]} alt=""/>
                                    <div className={s.Modal_FormNewArt_ImgCover}></div>
                                </div>
                            </div>
                        </div>
                        <div className={s.Modal_FormNewArt_Block} style={{position: 'relative'}}>
                            <label htmlFor="price">Цена</label>
                            <input className={s.Modal_FormNewArt_InputPrice} type="text" name="price" id="formName" onChange={(e) => setPrice(e.target.value)} />
                            <div className={s.Modal_FormNewArt_InputPriceCover}></div>
                        </div> 
                        <button className={s.Modal_FormNewArt_BtnPub} id="btnPublish">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdvSettings