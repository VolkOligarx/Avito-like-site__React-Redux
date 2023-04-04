import s from "./Reg.module.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Reg = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');

    const register = async (e) => {
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

        else if (password !== repeatPassword) {
            return alert('Пароли не совпадают')
        }

        else if (password === repeatPassword) {
            try {
                const res = await axios.post('http://localhost:8090/auth/register', {
                    "password": password,
                    "role": "user",
                    "email": email,
                    "name": name,
                    "surname": surName,
                    "phone": phone,
                    "city": city,
                    "id": Math.round(Math.random()*1000)
                });
                console.log(res);
                navigate('/loginPage')
            }
            
            catch (error) {
                console.log(error);
                alert('Пользователь существует')
                navigate('/loginPage')
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
                <form className={s.Modal_FormLogin} id="formLogIn" onSubmit={(e) => {register(e)}}>
                    <NavLink to={'/'} className={s.Modal_Logo}>
                        <img src="../img/logo_modal.png" alt="logo"/>
                    </NavLink>
                    <input className={s.Modal_Input} type="text" name="login" id="formlogin" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <input className={s.Modal_Input} type="password" name="password" id="passwordFirst" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <input className={s.Modal_Input} type="password" name="password" id="passwordSecond" placeholder="Повторите пароль" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>

                    <input className={s.Modal_Input} type="text" name="first-name" id="first-name" placeholder="Имя (необязательно)" value={name} onChange={(e) => setName(e.target.value)}/>

                    <input className={s.Modal_Input} type="text" name="second-name" id="second-name" placeholder="Фамилия (необязательно)" value={surName} onChange={(e) => setSurName(e.target.value)}/>

                    <input className={s.Modal_Input} type="text" name="city" id="city" placeholder="Город (необязательно)" value={city} onChange={(e) => setCity(e.target.value)}/>

                    <input className={s.Modal_Input} type="text" name="phone" id="phone" placeholder="Телефон (необязательно)" value={phone} onChange={(e) => setPhone(e.target.value)}/>

                    <button className={s.Modal_BtnSignUp} id="btnSignUp"><span>Зарегистрироваться</span> </button>
                </form>
            </div>
        </div>
    )
}

export default Reg