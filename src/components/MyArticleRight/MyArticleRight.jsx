import axios from "axios";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import s from "./MyArticleRight.module.scss";

export const MyArticleRight = () => {
    const navigate = useNavigate()
    const chosenOffer = useSelector(state => state.offers.chosenOffer)
    const token = useSelector(state => state.auth.saveLogin)

    let date = chosenOffer.created_on.split('T')
    let shorterDate = date[0].split('-')
    let shorterYear = shorterDate[0].split('20')
    let time = date[1].split('.')
    let shorterTime = time[0].split(':')

    const avatar = () => {
        return chosenOffer.user.avatar !== null ? `http://localhost:8090/${chosenOffer.user.avatar}` : './img/avatarPlug.jpeg'
    }

    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    const sellsFromArr = chosenOffer.user.sells_from.split('-')
    const sellsFromMonth = months[Number(sellsFromArr[1])-1]

    const deleteAdv = async () => {
        try {
            const res = await axios.delete(`http://localhost:8090/ads/${chosenOffer.id}`, {headers: {
                'authorization': `Bearer ${token.userToken}`
            }});
            console.log(res.statusText);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

return (

<div className={s.Article_Right}>
    <div className={s.Article_Block}>
        <h3 className={s.Article_Title}>{chosenOffer.title}</h3>
            <div className={s.Article_Info}>
                <p className={s.Article_Date}>Создано {shorterDate[2]}.{shorterDate[1]}.{shorterYear[1]} в {shorterTime[0]}:{shorterTime[1]}</p>
                <p className={s.Article_City}>{chosenOffer.user.city}</p>
                <a className={s.Article_link} href="/" target="_blank" rel="">4 отзыва</a>
            </div>
            <p className={s.Article_Price}>{chosenOffer.price} ₽</p>
            <div className={s.Article_BtnBlock}>
                <button className={s.Article_BtnFirst} onClick={() => navigate('/advSettings')} >Редактировать</button>
                <button className={s.Article_BtnSecond} onClick={() => deleteAdv()}>Снять с публикации</button>
            </div>
            <div className={s.Article_Author}>
                <NavLink to={'/profilePage'} className={s.Article_Author_Img}>
                    <img className={s.Article_Author_Img_Img} src={avatar()} alt="Avatar"/>
                </NavLink>
                <NavLink to={'/profilePage'} className={s.Article_Author_Cont}>
                    <p className={s.Article_Author_Name}>{chosenOffer.user.name}</p>
                    <p className={s.Article_Author_About}>Продает товары с {sellsFromMonth} {sellsFromArr[0]}</p>
                </NavLink>
            </div>
    </div>
</div>

)
}

export default MyArticleRight