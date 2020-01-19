import React,{useContext} from "react";
import style from "./header.modules.scss";
import ImageGoods from "../../../../../images/Home-Hero-Image.jpg";
import Decoration from "../../../../../images/Decoration.png";
import {Link} from "react-router-dom";
import {UserContext} from "../../../../App/Context/userContext";

function Header() {
    const user = useContext(UserContext);

    return (
        <header>
            <div className={style.imageContainer}>
                <img className={style.image} src={ImageGoods} alt="rzeczy"/>
            </div>
            <div className={style.content}>
                <div className={style.welcome}>
                    <p>Zacznij pomagać!</p>
                    <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                </div>
                <div className={style.decoration}>
                    <img src={Decoration} alt="grafika"/>
                </div>
                <ul className={style.links}>
                    <li>
                        {!user ?
                        <Link to="/logowanie">
                            <p>ODDAJ</p>
                            <p>RZECZY</p>
                        </Link> :
                        <Link to="/oddaj-rzeczy">
                            <p>ODDAJ</p>
                            <p>RZECZY</p>
                        </Link> }
                    </li>
                    <li>
                        {!user ?
                        <Link to="/logowanie">
                            <p>ZORGANIZUJ</p>
                            <p>ZBIÓRKĘ</p>
                        </Link> :
                        <Link to="/oddaj-rzeczy">
                            <p>ZORGANIZUJ</p>
                            <p>ZBIÓRKĘ</p>
                        </Link> }
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;