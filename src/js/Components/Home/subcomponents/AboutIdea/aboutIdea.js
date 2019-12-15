import React from "react";
import style from "./aboutIdea.modules.scss";
import Decoration from "../../../../../images/Decoration.png"
import {Link} from "react-router-dom";
import TShirt from "../../../../../images/Icon-1.png";
import Pack from "../../../../../images/Icon-2.png";
import Glass from "../../../../../images/Icon-3.png";
import Spinner from "../../../../../images/Icon-4.png";
import {Element} from "react-scroll"

function AboutIdea() {
    return (
        <Element name="aboutIdea" className="element">
            <section className={style.aboutContainer}>
                <div className={style.wrapper}>
                    <div>
                        <p>Wystarczą 4 proste kroki</p>
                    </div>
                    <div>
                        <img src={Decoration} className={style.decoration} alt="grafika"/>
                    </div>
                    <div className={style.contentContainer}>
                        <div className={style.contentWrapper}>
                            <div>
                                <img src={TShirt} alt="t-shirt"/>
                                <p>Wybierz rzeczy</p>
                                <p>ubrania, zabawki, sprzęt i inne</p>
                            </div>
                            <div>
                                <img src={Pack} alt="paczka"/>
                                <p>Spakuj je</p>
                                <p>skorzystaj z worków na śmieci</p>
                            </div>
                            <div>
                                <img src={Glass} alt="szkło powiększające"/>
                                <p>Zdecyduj komu chcesz pomóc</p>
                                <p>wybierz zaufane miejsce</p>
                            </div>
                            <div>
                                <img src={Spinner} alt="spinner"/>
                                <p>Zamów kuriera</p>
                                <p>kurier przyjedzie w dogodnym terminie</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.button}>
                        <Link to="/logowanie">
                            <p>ODDAJ</p>
                            <p>RZECZY</p>
                        </Link>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default AboutIdea;