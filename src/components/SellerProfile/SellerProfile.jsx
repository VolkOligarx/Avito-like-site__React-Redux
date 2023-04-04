import ProfileLogo from "../ProfileLogo/ProfileLogo";
import s from "./SellerProfile.module.scss";
import { MainCards } from "../MainCards/MainCards";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const SellerProfile = () => {
    const chosenOffer = useSelector(state => state.offers.chosenOffer)
    const navigate = useNavigate()

    let img
    chosenOffer.user.avatar !== null ?  img = `http://localhost:8090/${chosenOffer.user.avatar}` : img = '/img/avatarPlug.jpeg'

    useEffect(() => {
    chosenOffer.user.avatar === '' && navigate('/') 
    },[])

    let openPh
    let hiddenPh
    let mobilePhone

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
        <div>
            <div className={s.Main_Container}>
                <div className={s.Main_CenterBlock}>
                    <ProfileLogo></ProfileLogo>
                    <h2 className={s.Main_H2}>Профиль продавца</h2>
                        <div className={s.Profile}>
                            <div className={s.Profile_Content}>
                                <div className={s.Profile_Seller}>
                                    <div className={s.Profile_Seller_Left}>
                                        <div className={s.Profile_Seller_Img_Block}>
                                            <div href="/" target="_self">
                                                <img className={s.Profile_Seller_Img} src={img} alt="Avatar"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.Profile_Seller_Right}>
                                        <p className={s.Profile_Seller_Title}>{chosenOffer.user.name}</p>
                                        <p className={s.Profile_Seller_City}>{chosenOffer.user.city}</p>
                                        <p className={s.Profile_Seller_City}>Продает товары с {sellsFromMonth} {sellsFromArr[0]}</p>
                                        <div className={s.Profile_Seller_ImgMobBlock}>
                                            <div className={s.Profile_Seller_ImgMob}>
                                                <a href="/" target="_self">
                                                    <img src="./img/sellerProfileImg.png" alt="Avatar"/>
                                                </a>
                                            </div>
                                        </div>
                                        <button onClick={() => {setPhoneNun(mobilePhone)}} className={s.Profile_Seller_Button}>Показать&nbsp;телефон<br/>
                                        {phoneNum}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className={s.Profile_Seller_H3}>Товары продавца</h3>                
                    </div>
                <div className={s.Main_Content}>
                    <MainCards cards='sellerProfile'></MainCards>
                </div>
            </div>
        </div>
    )
}

export default SellerProfile