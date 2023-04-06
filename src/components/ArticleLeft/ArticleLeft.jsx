import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./ArticleLeft.module.scss";

export const ArticleLeft = () => {
    const chosenOffer = useSelector(state => state.offers.chosenOffer)
    const navigate = useNavigate()
    const [Tenis, setTenis] = useState(chosenOffer.images.length >=1 ? `http://localhost:8090/${chosenOffer.images[0].url}` : '/img/noImage.png');

    useEffect(() => {
        chosenOffer.id === 0 && navigate('/')
    },[])

    const changeTenis = (newTenis) => {
        setTenis(newTenis)
    }
    return (
        <div className={s.Article_Left}>
            <div className={s.Article_FillImg}>
                <div className={s.Article_Img}>
                    <img className="Img" src={Tenis} alt="my Article"/>
                </div>
                <div className={s.Article_ImgBar}>
                    {   
                        chosenOffer.images.map((img) => {
                            const chosenImg = `http://localhost:8090/${img.url}`

                            return (
                                <div className={s.Article_ImgBarDiv} key={img.id}>
                                    <img className="Img" onClick={() => changeTenis(chosenImg)} src={chosenImg} alt="my pic"/>
                                </div>        
                            )
                        })
                    }
                </div>
                <div className={s.Article_ImgBarMob}>
                    {
                        chosenOffer.images.map((img) => {
                            const chosenImg = `http://localhost:8090/${img.url}`

                            return (
                                <div onClick={() => changeTenis(chosenImg)} className={s.Article_ImgBarMobCircle} key={Math.random()}></div>
                                )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ArticleLeft