import React from "react";
import style from './header.modules.scss';
import SmallNavigation from "./SmallNavigation/smallNavigation";
import BigNavigation from "./BigNavigation/bigNavigation";
import Content from "./Content/content";

function Header() {
    return (
        <header>
            <nav className={style.navigation}>
                <SmallNavigation/>
                <BigNavigation/>
            </nav>
            <Content/>
        </header>
    )
}

export default Header;