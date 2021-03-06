import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom";
import style from "./smallNavigation.modules.scss"
import {UserContext} from "../../../App/Context/userContext";
import {SetUserContext} from '../../../App/Context/setUserContext';
import firebase from "firebase";

function SmallNavigation() {
    const user = useContext(UserContext);
    const setUser = useContext(SetUserContext);
    const history = useHistory();

    const logOut = () => {
        firebase.auth().signOut().then(()=> {
            // Sign-out successful.
            alert('User Logged Out!');
        }).catch(error => {
            // An error happened.
            alert(error);
        });
        setUser('');
        history.push('/wylogowano')
    };

    return (
        <ul className={style.loginNav}>
            <li>
                {user ? `Cześć ${user}` : null}
            </li>
            <li>
                {!user ?
                <NavLink activeClassName={style.active} to="/logowanie">
                    Zaloguj
                </NavLink> :
                <NavLink activeClassName={style.active} to="/oddaj-rzeczy">
                    Oddaj Rzeczy
                </NavLink>}
            </li>
            <li>
                {!user ?
                <NavLink activeClassName={style.active} to="/rejestracja">
                    Załóż konto
                </NavLink> :
                <button className={style.logout} onClick={logOut}>
                    Wyloguj się
                </button>}
            </li>
        </ul>
    )
}

export default SmallNavigation;