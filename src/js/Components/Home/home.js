import React from 'react';
import style from './home.modules.scss';
import Header from "./subcomponents/Header/header";
import ThreeColumns from "./subcomponents/ThreeColumns/threeColumns";
import AboutIdea from "./subcomponents/AboutIdea/aboutIdea";
import AboutUS from "./subcomponents/AboutUs/aboutUS";
import Foundation from "./Foundation/foundation";

function Home() {
    return (
        <>
            <Header/>
            <ThreeColumns/>
            <AboutIdea/>
            <AboutUS/>
            <Foundation/>
        </>
    )
}

export default Home;