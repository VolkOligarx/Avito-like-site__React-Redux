import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import s from "./Reviews.module.scss";

export const Reviews = () => {

    return(
        <>
        <Header></Header>
        <div className={s.ContainerBg}>
            <div className={s.Modal}>
                <a className={s.Modal_LogoLinkMob} href="/" target="_blank">
                    <img className={s.Modal_LogoMobImg} src="./img/logo-mob.png" alt="logo" />
                </a>
            </div>
            <div className={s.Modal_Block}>
                <div className={s.Modal_Content}>
                    <h3 className={s.Modal_Title}>Новое объявление</h3>
                    <div className={s.Modal_BtnClose}>
                        <div className={s.Modal_BtnCloseLine}></div>
                    </div>
                    <div className={s.Modal_Scroll}>
                        <form className={s.Modal_FormNewArt} id="formNewArt" action="#">
                            <div className={s.Modal_FormNewArt_Block}>
                                <label htmlFor="text">Добавить отзыв</label>
                                <textarea className={s.Modal_FormNewArt_Area} name="text" id="formArea" cols="auto" rows="5" placeholder="Введите описание"></textarea>
                            </div>
                            <button className={s.Modal_FormNewArt_BtnPub} id="btnPublish">Опубликовать</button>
                        </form>
                        {
                            new Array(5).fill().map(() => {
                                return (
                                    <div className={s.Modal_Reviews} key={Math.random()}>
                                        <div className={s.Modal_Reviews_Review}>
                                            <div className={s.Modal_Reviews_Review_Item}>
                                                <div className={s.Modal_Reviews_Review_Left}>
                                                    <div className={s.Modal_Reviews_Review_Img}>
                                                        <img src="" alt=""/>
                                                    </div>
                                                </div>
                                                <div className={s.Modal_Reviews_Review_Right}>
                                                    <p className={s.Modal_Reviews_Review_Name}>Олег <span>14 августа</span></p>
                                                    <h5 className={s.Modal_Reviews_Review_Title}>Комментарий</h5>
                                                    <p className={s.Modal_Reviews_Review_Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>   
                                    </div>     
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>                
        </>
    )
}

export default Reviews