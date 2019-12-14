import React from "react";
import style from "./bigNavigation.modules.scss";
import {Link} from "react-scroll";

function BigNavigation() {
    return (
        <ul className={style.bigNav}>
            <li>
                <Link>
                    Start
                </Link>
            </li>
            <li>
                <Link>
                    O co chodzi?
                </Link>
            </li>
            <li>
                <Link>
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