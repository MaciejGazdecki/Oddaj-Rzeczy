import React from "react";
import {NavLink} from "react-router-dom";
import style from "./smallNavigation.modules.scss"

function SmallNavigation() {
    return (
        <ul className={style.loginNav}>
            <li>
                <NavLink activeClassName={style.active} to="/logowanie">
                    Zaloguj
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={style.active} to="/rejestracja">
                    Załóż konto
                </NavLink>
            </li>
        </ul>
    )
}

export default SmallNavigation;