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
                        <div className={style.internalWrapper}>
                            <div>
                                <p>
                                    Skontaktuj się z nami
                                </p>
                                <img src={Decoration} alt=""/>
                            </div>
                            <form className={style.form}>
                                <div className={style.inputs}>
                                    <label>
                                        <p>Wpisz swoje imię</p>
                                        <input
                                            type="text"
                                            placeholder="Podaj imię"
                                        />
                                    </label>
                                    <label>
                                        <p>Wpisz swój email</p>
                                        <input
                                            type="text"
                                            placeholder="podaj email"
                                        />
                                    </label>
                                </div>
                                <div className={style.textarea}>
                                    <p>Wpisz swoją wiadomość</p>
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"
                                        placeholder="wpisz swoją wiadomość">
                                    </textarea>
                                </div>
                                <div className={style.submit}>
                                    <input
                                        type="submit"
                                        value="Wyślij"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Footer;