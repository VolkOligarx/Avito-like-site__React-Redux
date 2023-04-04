import s from "./MyArticleRight.module.scss";

export const MyArticleRight = () => {

return (

<div className={s.Article_Right}>
    <div className={s.Article_Block}>
        <h3 className={s.Article_Title}>Ракетка для большого тенниса Triumph Pro STС Б/У</h3>
            <div className={s.Article_Info}>
                <p className={s.Article_Date}>Сегодня в 10:45</p>
                <p className={s.Article_City}>Санкт-Петербург</p>
                <a className={s.Article_link} href="/" target="_blank" rel="">4 отзыва</a>
            </div>
            <p className={s.Article_Price}>2 200 ₽</p>
            <div className={s.Article_BtnBlock}>
                <button className={s.Article_BtnFirst}>Редактировать</button>
                <button className={s.Article_BtnSecond}>Снять с публикации</button>
            </div>
            <div className={s.Article_Author}>
                <div className={s.Article_Author_Img}>
                    <img className={s.Article_Author_Img_Img} src="./img/profileImg.jpg" alt="Avatar"/>
                </div>
                <div className={s.Article_Author_Cont}>
                    <p className={s.Article_Author_Name}>Антон</p>
                    <p className={s.Article_Author_About}>Продает товары с&nbsp;мая 2022</p>
                </div>
            </div>
    </div>
</div>

)
}

export default MyArticleRight