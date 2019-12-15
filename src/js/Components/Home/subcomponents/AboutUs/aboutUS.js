import React from "react";
import style from "./aboutUS.modules.scss";
import People from "../../../../../images/People.jpg";
import Decoration from "../../../../../images/Decoration.png";
import Signature from "../../../../../images/Signature.png";
import {Element} from "react-scroll"

function AboutUS() {
    return (
        <Element name="aboutUS" className="element">
            <section className={style.aboutUS}>
                <div className={style.content}>
                    <div className={style.contentWrapper}>
                        <div>O nas</div>
                        <div>
                            <img src={Decoration} alt="dekoracja"/>
                        </div>
                        <div>
                            <p>
                                Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                                Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                            </p>
                        </div>
                        <div>
                            <img src={Signature} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={style.imageWrapper}>
                    <img src={People} alt="ludzie" className={style.image}/>
                </div>
            </section>
        </Element>
    )
}

export default AboutUS;