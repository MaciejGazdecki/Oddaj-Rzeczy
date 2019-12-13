import React from "react";
import {Link} from "react-router-dom";
import style from "./smallNavigation.modules.scss"

function SmallNavigation() {
    return (
        <ul className={style.loginNav}>
            <li>
                <Link to="/logowanie">
                    Zaloguj
                </Link>
            </li>
            <li>
                <Link to="/rejestracja">
                    Rejestracja
                </Link>
            </li>
        </ul>
    )
}

export default SmallNavigation;