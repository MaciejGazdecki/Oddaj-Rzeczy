import React from "react";
import style from "./bigNavigation.modules.scss";
import {Link} from "react-scroll";
import {Link as RouterLink} from "react-router-dom";

function BigNavigation() {
    return (
        <ul className={style.bigNav}>
            <li>
                <RouterLink to="/">
                    Start
                </RouterLink>
            </li>
            <li>
                <Link to="aboutIdea"
                      offset={1280}>
                    O co chodzi?
                </Link>
            </li>
            <li>
                <Link to="aboutUS"
                      offset={2010}>
                    O nas
                </Link>
            </li>
            <li>
                <Link to="foundation"
                      offset={3000}>
                    Fundacja i organizacje
                </Link>
            </li>
            <li>
                <Link to="footer" offset={4040}>
                    Kontakt
                </Link>
            </li>
        </ul>
    )
}

export default BigNavigation;