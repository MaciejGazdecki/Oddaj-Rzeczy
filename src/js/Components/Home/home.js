import React from 'react';
import style from './home.modules.scss';
import Header from "./subcomponents/Header/header";
import ThreeColumns from "./subcomponents/ThreeColumns/threeColumns";
import AboutIdea from "./subcomponents/About/aboutIdea";
import AboutUS from "./AboutUs/aboutUS";

function Home() {
    return (
        <>
            <Header/>
            <ThreeColumns/>
            <AboutIdea/>
            <AboutUS/>
        </>
    )
}

export default Home;