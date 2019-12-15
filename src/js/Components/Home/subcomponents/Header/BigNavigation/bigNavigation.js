import React from "react";
import style from "./bigNavigation.modules.scss";
import {Link} from "react-scroll";
import AboutUS from "../../AboutUs/aboutUS";

function BigNavigation() {
    return (
        <ul className={style.bigNav}>
            <li>
                <Link>
                    Start
                </Link>
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
                <Link>
                    Fundacja i organizacje
                </Link>
            </li>
            <li>
                <Link>
                    Kontakt
                </Link>
            </li>
        </ul>
    )
}

export default BigNavigation;