import React from "react";
import style from './header.modules.scss';
import SmallNavigation from "./SmallNavigation/smallNavigation";
import BigNavigation from "./BigNavigation/bigNavigation";

function Header() {
    return (
        <header>
            <nav>
                <SmallNavigation/>
                <BigNavigation/>
            </nav>
        </header>
    )

}

export default Header