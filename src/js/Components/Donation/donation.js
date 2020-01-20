import React,{useContext,useEffect} from 'react';
import DonationHeader from "./Subcomponents/DonationHeader/donationHeader";
import Footer from "../Home/subcomponents/Footer/footer";
import DonationForm from "./Subcomponents/Form/donationForm";
import {SetHomeContext} from "../../App/Context/setHomeContext";

function Donation() {
    const setHome = useContext(SetHomeContext);

    useEffect(()=> setHome(false));

    return(
        <>
            <DonationHeader/>
            <DonationForm/>
            <Footer/>
        </>
    )
}

export default Donation;