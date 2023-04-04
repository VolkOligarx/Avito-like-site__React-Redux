import s from "./AdvSettings.module.scss";

export const AdvSettings = () => {

    return(
        <div className={s.ContainerBg}>
            <div className={s.Modal_Block}>
                <div className={s.Modal_Content}>
                    <h3 className={s.Modal_Title}>Редактировать объявление</h3>
                    <div className={s.Modal_BtnClose}>
                        <div className={s.Modal_BtnCloseLine}></div>
                    </div>
                    <form className={s.Modal_FormNewArt} id="formNewArt" action="#">
                        <div className={s.Modal_FormNewArt_Block}>
                            <label htmlFor="name">Название</label>
                            <input className={s.Modal_FormNewArt_Input} type="text" name="name" id="formName" placeholder="Введите название"/>
                        </div>
                        <div className={s.Modal_FormNewArt_Block}>
                            <label htmlFor="text">Описание</label>                            
                            <textarea className={s.Modal_FormNewArt_Area} name="text" id="formArea" cols="auto" rows="10" placeholder="Введите описание"></textarea>
                        </div>
                        <div className={s.Modal_FormNewArt_Block}>
                            <p className={s.Modal_FormNewArt_P}>Фотографии товара<span>не более 5 фотографий</span></p>
                            <div className={s.Modal_FormNewArt_BarImg}>
                                <div className={s.Modal_FormNewArt_Img}>
                                    <img src="" alt=""/>
                                    <div className={s.Modal_FormNewArt_ImgCover}></div>                                    
                                </div>
                                <div className={s.Modal_FormNewArt_Img}>
                                    <img src="" alt=""/>
                                    <div className={s.Modal_FormNewArt_ImgCover}></div>
                                </div>
                                <div className={s.Modal_FormNewArt_Img}>
                                    <div className={s.Modal_FormNewArt_ImgCover}></div>
                                    <img src="" alt=""/>
                                </div>
                                <div className={s.Modal_FormNewArt_Img}>
                                    <div className={s.Modal_FormNewArt_ImgCover}></div>
                                    <img src="" alt=""/>
                                </div>
                                <div className={s.Modal_FormNewArt_Img}>
                                    <div className={s.Modal_FormNewArt_ImgCover}></div>
                                    <img src="" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={s.Modal_FormNewArt_Block} style={{position: 'relative'}}>
                            <label htmlFor="price">Цена</label>
                            <input className={s.Modal_FormNewArt_InputPrice} type="text" name="price" id="formName"/>
                            <div className={s.Modal_FormNewArt_InputPriceCover}></div>
                        </div> 
                        <button className={s.Modal_FormNewArt_BtnPub} id="btnPublish">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdvSettings