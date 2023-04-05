import s from "./SellerArticleRight.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";


export const SellerArticleRight = () => {
    const chosenOffer = useSelector(state => state.offers.chosenOffer)

    let date = chosenOffer.created_on.split('T')
    let shorterDate = date[0].split('-')
    let shorterYear = shorterDate[0].split('20')
    let time = date[1].split('.')
    let shorterTime = time[0].split(':')
    let openPh
    let hiddenPh
    let mobilePhone

    const avatar = () => {
        return chosenOffer.user.avatar !== null ? `http://localhost:8090/${chosenOffer.user.avatar}` : './img/avatarPlug.jpeg'
    }

    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    const sellsFromArr = chosenOffer.user.sells_from.split('-')
    const sellsFromMonth = months[Number(sellsFromArr[1])-1]

    const nullifier = () => {
        if (chosenOffer.user.phone !== null) {
            openPh = chosenOffer.user.phone.split('')

            hiddenPh = `${openPh[0]} ${openPh[1]}${openPh[2]}${openPh[3]} XXX XX XX`
        
            mobilePhone = () => {
                return chosenOffer.user.phone.split('')[0] === '8'  ? `${openPh[0]} ${openPh[1]}${openPh[2]}${openPh[3]} ${openPh[4]}${openPh[5]}${openPh[6]} ${openPh[7]}${openPh[8]} ${openPh[9]}${openPh[10]}` : chosenOffer.user.phone
            }        
        }
        else {
            hiddenPh = 'No mobile phone'
            mobilePhone = () => {return 'No mobile phone'}
        }
    }
    nullifier()


    const [phoneNum, setPhoneNun] = useState(hiddenPh)

return (

    <div className={s.Article_Right}>
    <div className={s.Article_Block}>
        <h3 className={s.Article_Title}>{chosenOffer.title}</h3>
            <div className={s.Article_Info}>
                <p className={s.Article_DateCity}>Создано {shorterDate[2]}.{shorterDate[1]}.{shorterYear[1]} в {shorterTime[0]}:{shorterTime[1]}</p>
                <p className={s.Article_DateCity}>{chosenOffer.user.city}</p>
                <a className={s.Article_Link} href="/" target="_blank" rel="">23 отзыва</a>
            </div>
            <p className={s.Article_Price}>{chosenOffer.price} ₽</p>
            <div className={s.Article_Button_Block}>
                <button onClick={() => {setPhoneNun(mobilePhone)}} className={s.Article_Button}>Показать&nbsp;телефон<br/>
                {phoneNum}</button>
            </div>
            <div className={s.Article_Author}>
                <NavLink to={'/sellerProfilePage'} className={s.Article_Author_Img}>
                    <img className={s.Article_Author_Img_Img} src={avatar()} alt="Avatar"/>
                </NavLink>
                <NavLink to={'/sellerProfilePage'} className={s.Article_Author_Content}>
                    <p className={s.Article_Author_Name}>{chosenOffer.user.name}</p>
                    <p className={s.Article_Author_About}>Продает товары с {sellsFromMonth} {sellsFromArr[0]}</p>
                </NavLink>
            </div>
    </div>
</div>

)
}

export default SellerArticleRight