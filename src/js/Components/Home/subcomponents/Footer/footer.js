import React from "react";
import style from "./footer.modules.scss";
import {Element} from "react-scroll";
import Decoration from "../../../../../images/Decoration.png";
import Background from "../../../../../images/Background-Contact-Form.jpg";

function Footer() {
    return (
        <Element>
            <section className={style.footer} style={{backgroundImage:`url(${Background})`}}>
                <div className={style.background}>
                    <div className={style.wrapper}>
                        <div>
                            <p>
                                Skontaktuj się z nami
                            </p>
                        </div>
                        <img src={Decoration} alt=""/>
                        <form className={style.form}>
                            <input type="text"/>
                            <input type="text"/>
                            <div className={style.textarea}>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                                <input type="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Footer;