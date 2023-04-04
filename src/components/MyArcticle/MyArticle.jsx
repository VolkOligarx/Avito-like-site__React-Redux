import s from "./MyArticle.module.scss";
import { ProfileLogo } from "../ProfileLogo/ProfileLogo";
import MyArticleRight from "../MyArticleRight/MyArticleRight";
import ArticleLeft from "../ArticleLeft/ArticleLeft";
import ArticleContainer from "../ArticleContainer/ArticleContainer";


export const MyArticle = () => {

    return (
        <div>
            <div className={s.Main_Container}>
                <ProfileLogo></ProfileLogo>
            </div>
            <div className={s.Article}>
                <div className={s.Article_Content}>
                    <ArticleLeft></ArticleLeft>
                    <MyArticleRight></MyArticleRight>
                </div>
            </div>
            <ArticleContainer></ArticleContainer>
        </div>
    )
}

export default MyArticle