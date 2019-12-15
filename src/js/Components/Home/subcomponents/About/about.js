import React from "react";
import style from "./about.modules.scss";
import Decoration from "../../../../../images/Decoration.png"
import {Link} from "react-router-dom";

function About() {
    return (
        <section className={style.aboutContainer}>
            <div className={style.wrapper}>
                <div>
                    <p>Wystarczą 4 proste kroki</p>
                </div>
                <div>
                    <img src={Decoration} className={style.decoration} alt="grafika"/>
                </div>
                <div className={style.contentWrapper}>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
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
    )
}

export default About;