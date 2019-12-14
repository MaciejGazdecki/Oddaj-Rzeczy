import React from 'react';
import style from './home.modules.scss';
import Header from "./subcomponents/Header/header";
import ThreeColumns from "./subcomponents/ThreeColumns/threeColumns";
import About from "./subcomponents/About/about";

function Home() {
    return (
        <>
            <Header/>
            <ThreeColumns/>
            <About/>
        </>
    )
}

export default Home;