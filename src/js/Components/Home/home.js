import React from 'react';
import style from './home.modules.scss';
import Header from "./subcomponents/Header/header";
import ThreeColumns from "./subcomponents/ThreeColumns/threeColumns";

function Home() {
    return (
        <>
            <Header/>
            <ThreeColumns/>
        </>
    )
}

export default Home;