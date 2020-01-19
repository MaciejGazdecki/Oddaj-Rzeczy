import React, {useEffect, useState} from 'react';
import style from "./app.modules.scss";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Components/Home/home";
import Login from "../Components/Login/login";
import Register from "../Components/Register/register";
import Navigation from "../Components/Navigation/navigation";
import Logout from "../Components/Logout/logout";
import Donation from "../Components/Donation/donation";
import firebase from "firebase";
import {config} from "./firebaseConfig";
import {UserContext} from "./Context/userContext";
import {SetUserContext} from './Context/setUserContext'

firebase.initializeApp(config);

function App () {
    const [user, setUser] = useState('');

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user.email);
            }
        });
    });

    return (
        <Router>
            <UserContext.Provider value={user}>
                <SetUserContext.Provider value={setUser}>
                    <div className={style.container}>
                        <Navigation/>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/logowanie" component={Login}/>
                            <Route path="/rejestracja" component={Register}/>
                            <Route path="/wylogowano" component={Logout}/>
                            <Route path="/oddaj-rzeczy" component={Donation}/>
                        </Switch>
                    </div>
                </SetUserContext.Provider>
            </UserContext.Provider>
        </Router>
    )
}

export default App;