import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { personalInfo } from "../../redux/slices/authSlice";
import { allOffers, currentOffers } from "../../redux/slices/offersSlice";
import { MainCards } from "../MainCards/MainCards";
import { SearchLine } from "../SearchLine/SearchLine";
import s from "./Main.module.scss";

export const Main = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.saveLogin)



    useEffect(() => {
        const allOffersGet = async () => {
            const res = await axios.get('http://localhost:8090/ads');
            dispatch(allOffers(res.data)) 
            dispatch(currentOffers(res.data))
        }
        allOffersGet()

        const myInfo = async () => {
            const res = await axios.get('http://localhost:8090/user', {headers: {
                'authorization': `Bearer ${token.userToken}`
            }});
            dispatch(personalInfo(res.data))
        }
        token.userToken && myInfo() 
   
    },[])


    return (
        <div>
            <SearchLine></SearchLine>
            <div className={s.Main_Container}>
                <h2 className={s.Main_H2}>Объявления</h2>
                <div className={s.Main_Content}>
                    <MainCards cards='all'></MainCards>
                </div>
            </div>
        </div>
    )
}

export default Main