import React,{useContext} from 'react';
import style from './stepTwo.module.scss';
import {RegisterContext} from "../formContextRegister";

function StepTwo() {
    const register = useContext(RegisterContext);;

    return (
        <>
            <div>
                <p>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
            </div>
            <select ref={register} name="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input type="submit" value="submit" form="mainForm"/>
        </>
    )
}

export default StepTwo;