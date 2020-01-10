import React from 'react';
import style from './logout.modules.scss';
import Decoration from "./../../../images/Decoration.png";
import {Link} from "react-router-dom";

function Logout() {
    return (
        <section className={style.logoutSection}>
            <div className={style.wrapper}>
                <div className={style.header}>
                    <p>Wylogowanie nastąpiło</p>
                    <p>pomyślnie!</p>
                </div>
                <div className={style.decoration}>
                    <img src={Decoration} alt=""/>
                </div>
                <div className={style.button}>
                    <Link to="/">
                        Strona głowna
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Logout;