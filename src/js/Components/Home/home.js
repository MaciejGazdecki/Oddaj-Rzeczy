import React from 'react';
import Header from "./subcomponents/Header/header";
import ThreeColumns from "./subcomponents/ThreeColumns/threeColumns";
import AboutIdea from "./subcomponents/AboutIdea/aboutIdea";
import AboutUS from "./subcomponents/AboutUs/aboutUS";
import Foundation from "./subcomponents/Foundation/foundation";
import Footer from "./subcomponents/Footer/footer";

function Home() {
    return (
        <>
            <Header/>
            <ThreeColumns/>
            <AboutIdea/>
            <AboutUS/>
            <Foundation/>
            <Footer/>
        </>
    )
}

export default Home;