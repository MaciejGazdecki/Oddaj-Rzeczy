import React from 'react';
import style from "./app.modules.scss";
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "../Components/Home/home";
import Login from "../Components/Login/login";
import Register from "../Components/Register/register";
import Navigation from "../Components/Navigation/navigation";

function App () {
    return (
        <Router>
            <div className={style.container}>
                <Navigation/>
                <Route path="/" exact component={Home}/>
                <Route path="/logowanie" component={Login}/>
                <Route path="/rejestracja" component={Register}/>
            </div>
        </Router>
    )
}

export default App;