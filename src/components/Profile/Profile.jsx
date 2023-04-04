import ProfileLogo from "../ProfileLogo/ProfileLogo";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import s from "./Profile.module.scss";
import { MainCards } from "../MainCards/MainCards";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

export const Profile = () => {
    const [name, setName] = useState('')
    const userName = useSelector(state => state.auth.personalInfo.name)

    useEffect(() => {
    userName === 'exampleName' ? setName('Пользователь') : setName(userName)
    },[])

    return (
        <div>
            <div className={s.Main_Container}>
                <div className={s.Main_Center_Block}>
                    <ProfileLogo></ProfileLogo>
                    <h2 className={s.Main_H2}>Здравствуйте, {name}!</h2>
                    <ProfileInfo></ProfileInfo>
                    <h3 className={s.Main_H3}>Мои товары</h3>
                </div>
                <div className={s.Main_Content}>
                    <MainCards cards='myProfile'></MainCards>
                </div>
            </div>
        </div>
    )
}

export default Profile