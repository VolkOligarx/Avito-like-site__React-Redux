import s from "./ProfileLogo.module.scss";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ProfileLogo = () => {
    const navigate = useNavigate()

 
    return (
        <div className={s.ProfileLogo}>
            <NavLink className={s.ProfileLogo_Link} to="/">
                <img className={s.ProfileLogo_Img} src="./img/logo.png" alt="logo" />
            </NavLink>
            <NavLink className={s.ProfileLogo_LinkMob} to="/">
                <img className={s.ProfileLogo_ImgMob} src="./img/logo-mob.png" alt="logo" />
            </NavLink>
            <form className={s.ProfileLogo_Form} onSubmit={(e) => {return(e.preventDefault(), navigate('/'))}}>
                <button className={s.ProfileLogo_Button} id="btnGoBack">Вернуться на&nbsp;главную</button>
            </form>
        </div>
    )
}

export default ProfileLogo