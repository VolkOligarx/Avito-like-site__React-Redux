import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Footer.module.scss";

export const Footer = () => {
    const token = useSelector(state => state.auth.saveLogin.userToken)

    const [authorized, setAuthorized] = useState('/loginPage')

    useEffect(() => {
        token.length <= 2 ? setAuthorized('/loginPage') : setAuthorized('/profilePage')
    },[])

    return (
        <footer className={s.Footer}>
            <div className={s.Footer_Container}>
                <div className={s.Footer_ImgBlock}>
                    <NavLink to={'/'} target="_self">
                        <img className={s.Footer_Img} src="./img/icon_01.png" alt="home"/>
                    </NavLink>
                </div>
                <div className={s.Footer_ImgBlock}>
                    <NavLink to={'/addNewAdvPage'} target="_self">
                        <img className={s.Footer_Img} src="./img/icon_02.png" alt="home"/>
                    </NavLink>
                </div>
                <div className={s.Footer_ImgBlock}>
                    <NavLink to={authorized} target="_self">
                        <img className={s.Footer_Img} src="./img/icon_03.png" alt="home"/>
                    </NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer