import React from "react"
import style from "./navigation.modules.scss";
import SmallNavigation from "./SmallNavigation/smallNavigation";
import BigNavigation from "./BigNavigation/bigNavigation";


function Navigation() {
    return (
        <nav className={style.navigation}>
            <SmallNavigation/>
            <BigNavigation/>
        </nav>
    )
}

export default Navigation;