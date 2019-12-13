import React from "react";
import {Link} from "react-router-dom";

function SmallNavigation() {
    return (
        <ul>
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