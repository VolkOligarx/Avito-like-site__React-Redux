import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import s from "./AddNewAdv.module.scss";

export const AddNewAdv = () => {
    const token = useSelector(state => state.auth.saveLogin)
    const imagesArr = []

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');

    const uploadContent1 = (event) => {
        event.preventDefault()
        event.target.files[0] && setImage1(event.target.files[0])
    }

    const uploadContent2 = (event) => {
        event.preventDefault()
        event.target.files[0] && setImage2(event.target.files[0])
    }

    const newAdv = (event) => {
        event.preventDefault()
        imagesArr.push(image1)
        imagesArr.push(image2)

        const formData = new FormData()
        formData.append('array', imagesArr)
        console.log(imagesArr);

        axios.post(`http://localhost:8090/ads?title=${title}&description=${description}&price=${price}`, formData, {
                headers: {
                'Content-type': 'multipart/form-data',
                'authorization': `Bearer ${token.userToken}`
            }
            }).then(res => {
            console.log(res.data);
            }).catch(error => {
            console.log(error);
            })
        }

    return(
        <div className={s.ContainerBg}>
            <div className={s.Modal_Block}>
                <div className={s.Modal_Content}>
                    <h3 className={s.Modal_Title}>Новое объявление</h3>
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
                                        <input className={s.Modal_FormNewArt_HiddenBtn} accept={'image/*'} type="file" name="advimg" onChange={(e) => uploadContent1(e)} />
                                        <img src="" alt=""/>
                                        <div className={s.Modal_FormNewArt_ImgCover}></div>                                    
                                    </div>
                                    <div className={s.Modal_FormNewArt_Img}>
                                        <input className={s.Modal_FormNewArt_HiddenBtn} accept={'image/*'} type="file" name="advimg" onChange={(e) => uploadContent2(e)} />
                                        <img src="" alt=""/>
                                        <div className={s.Modal_FormNewArt_ImgCover}></div>                                    
                                    </div>
                                    <div className={s.Modal_FormNewArt_Img}>
                                        <input className={s.Modal_FormNewArt_HiddenBtn} accept={'image/*'} type="file" name="advimg" onChange={(e) => uploadContent1(e)} />
                                        <img src="" alt=""/>
                                        <div className={s.Modal_FormNewArt_ImgCover}></div>                                    
                                    </div>
                                    <div className={s.Modal_FormNewArt_Img}>
                                        <input className={s.Modal_FormNewArt_HiddenBtn} accept={'image/*'} type="file" name="advimg" onChange={(e) => uploadContent1(e)} />
                                        <img src="" alt=""/>
                                        <div className={s.Modal_FormNewArt_ImgCover}></div>                                    
                                    </div>
                                    <div className={s.Modal_FormNewArt_Img}>
                                        <input className={s.Modal_FormNewArt_HiddenBtn} accept={'image/*'} type="file" name="advimg" onChange={(e) => uploadContent1(e)} />
                                        <img src="" alt=""/>
                                        <div className={s.Modal_FormNewArt_ImgCover}></div>                                    
                                    </div>
                            </div>
                        </div>
                        <div className={s.Modal_FormNewArt_Block} style={{position: 'relative'}}>
                            <label htmlFor="price">Цена</label>
                            <input className={s.Modal_FormNewArt_InputPrice} type="text" name="price" id="formName" onChange={(e) => setPrice(e.target.value)} />
                            <div className={s.Modal_FormNewArt_InputPriceCover}></div>
                        </div> 
                        <button className={s.Modal_FormNewArt_BtnPub} id="btnPublish">Опубликовать</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNewAdv