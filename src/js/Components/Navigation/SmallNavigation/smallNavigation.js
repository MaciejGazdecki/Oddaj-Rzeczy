import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import style from "./smallNavigation.modules.scss"
import {UserContext} from "../../../App/userContext";
import firebase from "firebase";

function SmallNavigation() {
    const user = useContext(UserContext);

    const logOut = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            alert('User Logged Out!');
        }).catch(function(error) {
            // An error happened.
            alert(error);
        });
    };
    return (
        <ul className={style.loginNav}>
            <li>
                <NavLink activeClassName={style.active} to="/logowanie">
                    Zaloguj
                </NavLink>
            </li>
            <li>
                {!user ? <NavLink activeClassName={style.active} to="/rejestracja">Załóż konto</NavLink> :
                    <button className={style.logout} onClick={logOut}>Wyloguj się</button>}
            </li>
        </ul>
    )
}

export default SmallNavigation;