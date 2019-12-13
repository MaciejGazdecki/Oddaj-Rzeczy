import React from 'react';
import style from "./app.modules.scss";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../Components/Home/home";

function App () {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    )
}

export default App;