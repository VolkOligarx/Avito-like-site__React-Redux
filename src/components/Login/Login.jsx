import s from "./Login.module.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveLogin } from "../../redux/slices/authSlice";
import UserInput from "../UserInput/UserInput";

export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault()

        if (!email) {
            return alert('Введите эмейл')
        }

        else if (!email.split('').includes('@') || !email.split('').includes('.')) {
            return alert('Эмейл не исправен, введите исправный эмейл')
        }

        else if (!password) {
            return alert('Введите пароль')
        }

        else {
            try {
                const res = await axios.post('http://localhost:8090/auth/login', {
                    "password": password,
                    "email": email,
                });
                console.log(res);
                dispatch(saveLogin({userEmail: email, userPassword: password, userToken: res.data.access_token, refreshUserToken: res.data.refresh_token}))
                navigate('/')
            }
            
            catch (error) {
                console.log(error);
                if (error.response.data.detail === "Incorrect password") {
                    return alert('Введен неверный пароль')
                }

                else if (error.response.data.detail === "Incorrect email") {
                    return alert('Введен неверный эмейл')
                }

                else {
                alert('Пользователь существует')
                }
            }    
        }
    }

    return(

        <div className={s.ContainerEnter}>
            <div className={s.Modal}>
                <a className={s.Modal_LogoLinkMob} href="/" target="_blank">
                    <img className={s.Modal_LogoMobImg} src="./img/logo-mob.png" alt="logo" />
                </a>
            </div>
            <div className={s.Modal_Block}>
                <form className={s.Modal_FormLogin} id="formLogIn" onSubmit={(e) => {login(e)}}>
                    <NavLink to={'/'} className={s.Modal_Logo}>
                        <img src="../img/logo_modal.png" alt="logo"/>
                    </NavLink>
                    <UserInput style={{marginBottom: '30px'}} type="text" name="login" id="formlogin" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <UserInput type="password" name="password" id="formpassword" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className={s.Modal_BtnEnter} id="btnEnter"><span>Войти</span> </button>
                    <button className={s.Modal_BtnSignUp} id="btnSignUp"><NavLink to={'/regPage'}>Зарегистрироваться</NavLink> </button>
                </form>
            </div>
        </div>
    )
}

export default Login