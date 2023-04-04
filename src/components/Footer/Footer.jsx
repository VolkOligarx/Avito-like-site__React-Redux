import s from "./Footer.module.scss";

export const Footer = () => {

    return (
        <footer className={s.Footer}>
            <div className={s.Footer_Container}>
                <div className={s.Footer_ImgBlock}>
                    <a href="/" target="_self">
                        <img className={s.Footer_Img} src="./img/icon_01.png" alt="home"/>
                    </a>
                </div>
                <div className={s.Footer_ImgBlock}>
                    <a href="/" target="_self">
                        <img className={s.Footer_Img} src="./img/icon_02.png" alt="home"/>
                    </a>
                </div>
                <div className={s.Footer_ImgBlock}>
                    <a href="/" target="_self">
                        <img className={s.Footer_Img} src="./img/icon_03.png" alt="home"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer