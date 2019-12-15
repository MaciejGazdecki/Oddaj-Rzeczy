import React from 'react';
import style from './home.modules.scss';
import Header from "./subcomponents/Header/header";
import ThreeColumns from "./subcomponents/ThreeColumns/threeColumns";
import AboutIdea from "./subcomponents/About/aboutIdea";

function Home() {
    return (
        <>
            <Header/>
            <ThreeColumns/>
            <AboutIdea/>
        </>
    )
}

export default Home;