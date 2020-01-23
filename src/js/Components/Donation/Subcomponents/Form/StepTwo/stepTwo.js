import React,{useContext} from 'react';
import style from './stepTwo.module.scss';
import {useFormContext} from 'react-hook-form';
import {StateContext} from "../FormStateContext";

function StepTwo() {
    const {register} = useFormContext();
    const state = useContext(StateContext);

    return (
        <>
            <div>
                <p>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
            </div>
            <select ref={register} name="quantity" value={state.quantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
}

export default StepTwo;