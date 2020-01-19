import React, {useEffect, useState} from 'react';
import style from "./app.modules.scss";
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "../Components/Home/home";
import Login from "../Components/Login/login";
import Register from "../Components/Register/register";
import Navigation from "../Components/Navigation/navigation";
import Logout from "../Components/Logout/logout";
import Donate from "../Components/Donate/donate";
import firebase from "firebase";
import {config} from "./firebaseConfig";
import {UserContext} from "./userContext"

firebase.initializeApp(config);

function App () {
    const [user, setUser] = useState('');

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // User is signed in.
                setUser(user.email);
            } else {
                // User is signed out.
                console.log("Użytkownik wylogowany")
            }
        });
    });

    return (
        <Router>
            <UserContext.Provider value={user}>
                <div className={style.container}>
                    <Navigation/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/logowanie" component={Login}/>
                    <Route path="/rejestracja" component={Register}/>
                    <Route path="/wylogowano" component={Logout}/>
                    <Route path="/oddaj-rzeczy" component={Donate}/>
                </div>
            </UserContext.Provider>
        </Router>
    )
}

export default App;