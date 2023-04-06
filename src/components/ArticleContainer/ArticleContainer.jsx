import { useSelector } from "react-redux";
import s from "./ArticleContainer.module.scss";

export const ArticleContainer = () => {
    const sellerOffer = useSelector(state => state.offers.chosenOffer)

    return (

        <div className={s.Main_Container}>
            <h3 className={s.Main_Title}>Описание товара</h3>
            <div className={s.Main_Content}>
                <p className={s.Main_Text}>{sellerOffer.description}</p>
            </div>
        </div>

    )
}

export default ArticleContainer