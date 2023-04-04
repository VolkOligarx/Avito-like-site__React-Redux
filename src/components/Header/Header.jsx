import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";


export const Header = () => {
    const token = useSelector(state => state.auth.saveLogin.userToken)
    const [authorizedEnter, setAuthorizedEnter] = useState('flex')
    const [authorizedAdv, setAuthorizedAdv] = useState('none')
    const [authorizedCab, setAuthorizedCab] = useState('none')
    const buttonAnimationCheck = useSelector(state => state.auth.cabinetAnimation)
    let buttonAnimation

    const tokenState = () => {
        if (token.length >= 2) {
            setAuthorizedAdv('flex')
            if (window.location.href === 'http://localhost:3000/profilePage') {
                setAuthorizedCab('none')
            }
            else {
                setAuthorizedCab('flex')
            }
            setAuthorizedEnter('none')
        }
        else {
            setAuthorizedAdv('none')
            setAuthorizedCab('none')
            setAuthorizedEnter('flex')
        }
    }

    useEffect(() => {
        tokenState()
    },[])

    window.location.href === 'http://localhost:3000/profilePage' && buttonAnimationCheck ? buttonAnimation = '' : buttonAnimation = 'none'

    return (
        <div className={s.Header}>
            <NavLink style={{display: authorizedEnter}} to={'/loginPage'} className={s.Header_Nav}>    
                <button style={{animation: 'none'}} className={s.Header_Button} id="btnMainEnter">
                    Вход в личный кабинет
                </button>
            </NavLink>
            <NavLink style={{display: authorizedAdv}} to={'/addNewAdvPage'} className={s.Header_Nav}>    
                <button style={{animation: buttonAnimation}} className={s.Header_Button} id="btnMainEnter">
                    Разместить объявление
                </button>
            </NavLink>
            <NavLink style={{display: authorizedCab}} to={'/profilePage'} className={s.Header_Nav}>    
                <button style={{animation: 'none'}} className={s.Header_Button} id="btnMainEnter">
                    Личный кабинет
                </button>
            </NavLink>
        </div>
    )
}

export default Header