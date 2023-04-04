import s from "./SellerArticle.module.scss";
import { ProfileLogo } from "../ProfileLogo/ProfileLogo";
import SellerArticleRight from "../SellerArticleRight/SellerArticleRight";
import ArticleLeft from "../ArticleLeft/ArticleLeft";
import ArticleContainer from "../ArticleContainer/ArticleContainer";

export const SellerArticle = () => {

    return (
        <div>
            <div className={s.Main_Container}>
                <ProfileLogo></ProfileLogo>
            </div>
            <div className={s.Article}>
                <div className={s.Article_Content}>
                    <ArticleLeft></ArticleLeft>
                    <SellerArticleRight></SellerArticleRight>
                </div>
            </div>
            <ArticleContainer></ArticleContainer>
        </div>
    )
}

export default SellerArticle