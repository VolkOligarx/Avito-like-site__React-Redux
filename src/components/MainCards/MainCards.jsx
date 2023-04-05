import s from "./MainCards.module.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { chosenOffer } from "../../redux/slices/offersSlice";
import { cabinetAnimation, saveLogin } from "../../redux/slices/authSlice";
import { useEffect } from "react";

export const MainCards = (props) => {
const dispatch = useDispatch()
const currentOffers = useSelector(state => state.offers.currentOffers)
const allOffers = useSelector(state => state.offers.allOffers)
const sellerOffer = useSelector(state => state.offers.chosenOffer.user_id)
const token = useSelector(state => state.auth.saveLogin)
const personalId = useSelector(state => state.auth.personalInfo.id)

let currentUserOffers = []

useEffect(() => {
    if (token.userToken.length >= 1) {
        const refreshToken = async () => {
            try {
                const res = await axios.put('http://localhost:8090/auth/login', {
                    'access_token': token.userToken,
                    'refresh_token': token.refreshUserToken
                });
                dispatch(saveLogin({userToken: res.data.access_token, refreshUserToken: res.data.refresh_token}))
            } catch (error) {
                console.log(error);
                dispatch(saveLogin({userToken: ''}))
            }
        }
        refreshToken()        
    }
},[])

switch (props.cards) {
    case 'all':
        currentUserOffers = currentOffers
        break;
    
    case 'sellerProfile':
        currentUserOffers = allOffers.filter(offerId => {
            return offerId.user_id === sellerOffer
        })
        break;

    case 'myProfile':
        const myOffersGet = async () => {
            const res = await axios.get('http://localhost:8090/ads/me', {headers: {
                'authorization': `Bearer ${token.userToken}`
            }});
            currentUserOffers = res.data
            if (res.data.length === 0) {
                dispatch(cabinetAnimation(true))
            }
            else {
                dispatch(cabinetAnimation(false))
            }
        }
        myOffersGet()
        break;

    default:
        break;
}

const offerToOpen = (offer) => {
    dispatch(chosenOffer(offer))
} 

const myOffer = (offer) => {
    return personalId === offer.user_id ? "/myArticlePage" : "/sellerArticlePage"
}

return (
    
<div className={s.MainCards}> {
    currentUserOffers.length === 0 ? new Array(1).fill(0).map(() => {
        return (
            <div key={Math.random()} style={{paddingLeft: '20px'}}>
                <h1>Предложений пока что нет :(</h1>
                <h1>Скорее добавьте их!!!</h1>
            </div>
        )
    }) :
    currentUserOffers.map((offer) => {

    let img
    offer.images.length >= 1 ?  img = `http://localhost:8090/${offer.images[0].url}` : img = '/img/noImage.png'

    let date = offer.created_on.split('T')
    let shorterDate = date[0].split('-')
    let shorterYear = shorterDate[0].split('20')
    let time = date[1].split('.')
    let shorterTime = time[0].split(':')

    return (
    <div className={s.MainCards_Item} key={offer.id}> 
        <div className={s.MainCards_Card}>
            <div className={s.MainCards_Card_Img}>
                <NavLink onClick={()=>{offerToOpen(offer)}} to={myOffer(offer)}>
                    <img className="Img" src={img} target="_blank" alt="sale"/>
                </NavLink>
            </div>
            <div>
                <NavLink onClick={()=>{offerToOpen(offer)}} to={myOffer(offer)}>
                    <div className={s.MainCards_Card_Title}>{offer.title}</div>
                </NavLink>
                <div className={s.MainCards_Card_Price}>{offer.price} ₽</div>
                <div className={s.MainCards_Card_Place}>{offer.user.city}</div>
                <div className={s.MainCards_Card_Date}>Создано {shorterDate[2]}.{shorterDate[1]}.{shorterYear[1]} в {shorterTime[0]}:{shorterTime[1]}</div>
            </div>
        </div>
    </div> 
    )})}
</div>
)
}
    
export default MainCards