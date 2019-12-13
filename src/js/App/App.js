import React from 'react';
import style from "./app.modules.scss";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../Components/Home/home";
import Login from "../Components/Login/login";
import Register from "../Components/Register/register";

function App () {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/logowanie" component={Login}/>
                <Route path="/rejestracja" component={Register}/>
            </Switch>
        </Router>
    )
}

export default App;