import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import s from "./ProfileInfo.module.scss";
import { personalInfo } from "../../redux/slices/authSlice";
import { useEffect } from "react";

export const ProfileInfo = () => {
    const profile = useSelector(state => state.auth.personalInfo)
    const token = useSelector(state => state.auth.saveLogin)
    const dispatch = useDispatch()

    const [name, setName] = useState(profile.name);
    const [surName, setSurName] = useState(profile.surname);
    const [city, setCity] = useState(profile.city);
    const [phone, setPhone] = useState(profile.phone);
    const [image, setImage] = useState('')
    const [avatar, setAvatar] = useState('')

    useEffect(()=>{
    avatar === null ? setAvatar('./img/profileImg.jpg') : setAvatar(`http://localhost:8090/${profile.avatar}`)
    },[])

    const uploadContent = (event) => {
        event.preventDefault()
        event.target.files[0] && setImage(event.target.files[0])
    }

    const sendContent = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('file', image)

        axios.post('http://localhost:8090/user/avatar', formData, {
            headers: {
                'Content-type': 'multipart/form-data',
                'authorization': `Bearer ${token.userToken}`
            }
        }).then(res => {
            dispatch(personalInfo(res.data))
            setAvatar(`http://localhost:8090/${res.data.avatar}`)
            console.log(res);
        }).catch (error => {
            console.log(error);
        })
    }

    const send = async () => {
        const res = await axios.patch('http://localhost:8090/user', {
            "name": name,
            "surname": surName,
            "phone": phone,
            "city": city,
        }, 
        {
        headers: {
            'authorization': `Bearer ${token.userToken}`}
        });
        dispatch(personalInfo(res.data))
    }

    return (
        <div className={s.Profile}>
            <div className={s.Profile_Content}>
                <h3 className={s.Profile_H3}>Настройки профиля</h3>
                <div className={s.Profile_Settings}>
                    <div className={s.Profile_Settings_Left}>
                        <div className={s.Profile_Settings_Img_Block}>
                            <img className={s.Profile_Settings_Img} src={avatar} alt="profileImg" />
                        </div>
                        <a className={s.Profile_Settings_ChangePhoto} onClick={(e) => sendContent(e)} href='/'>Заменить</a>
                        <input type={'file'} accept={'image/*'} onChange={(e) => uploadContent(e)} />
                    </div>
                    <div className={s.Profile_Settings_Right}>
                        <div className={s.Profile_Settings_Form} action="#">
                            <div className={s.Profile_Settings_Div}>
                                <label className={s.Profile_Settings_Label} htmlFor="fname">Имя</label>
                                <input className={s.Profile_Settings_Name}  id="Settings-fname" name="fname" type="text" placeholder={"Анатолий"} value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className={s.Profile_Settings_Div}>
                                <label className={s.Profile_Settings_Label} htmlFor="lname">Фамилия</label>
                                <input className={s.Profile_Settings_Name}  id="Settings-lname" name="lname" type="text" placeholder="Городецкий" value={surName} onChange={(e) => setSurName(e.target.value)}/>
                            </div>
                            <div className={s.Profile_Settings_Div}>
                                <label className={s.Profile_Settings_Label} htmlFor="city">Город</label>
                                <input className={s.Profile_Settings_Name}  id="Settings-city" name="city" type="text" placeholder="Санкт-Петербург" value={city} onChange={(e) => setCity(e.target.value)}/>
                            </div>
                            <div className={s.Profile_Settings_Div}>
                                <label className={s.Profile_Settings_Label} htmlFor="phone">Телефон</label>
                                <input className={s.Profile_Settings_Phone} id="Settings-phone" name="phone" type="tel" placeholder="+7917777777" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                            <button className={s.Profile_Settings_Button} id="Settings-btn" onClick={() => send()}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo