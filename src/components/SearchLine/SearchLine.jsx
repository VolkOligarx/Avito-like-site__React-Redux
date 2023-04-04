import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentOffers, findOffers } from "../../redux/slices/offersSlice";
import { NavLink } from "react-router-dom";
import s from "./SearchLine.module.scss";

export const SearchLine = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('12')

    const allOffers = useSelector(state => state.offers.allOffers)
    const searchedText = useSelector(state => state.offers.findOffers)

    const showSearched = (event) => {
        event.preventDefault()
        return dispatch(currentOffers(allOffers.filter((offer) => {
            return offer.title.toLowerCase().includes(searchedText.toLowerCase())
        }))) 
    }
    
    const searchLineFunc = (e) => {
        dispatch(findOffers(e.target.value))
        setSearchValue(e.target.value)
    }

    const CleanSearch = () => {
        return searchValue.length <= 1 ? dispatch(currentOffers(allOffers)) : undefined
    }

    return (
        <div className={s.SearchLine}>
            <NavLink className={s.SearchLine_LogoLink} to="/">
                <img className={s.SearchLine_LogoImg}  src="./img/logo.png" alt="logo" />
            </NavLink>
            <NavLink className={s.SearchLine_LogoLinkMob} to="/">
                <img className={s.SearchLine_LogoMobImg} src="./img/logo-mob.png" alt="logo" />
            </NavLink>
            <form className={s.SearchLine_Form} onSubmit={showSearched}>
                <input className={s.SearchLine_Text} onChange={(e) => searchLineFunc(e)} type="search" placeholder="Поиск по объявлениям" name="search" search={CleanSearch()} />
                <input className={s.SearchLine_TextMob} type="search" placeholder="Поиск" name="search-mob" />
                <button className={s.SearchLine_Button} type='submit'>Найти</button>
            </form>
        </div>
    )
}

export default SearchLine