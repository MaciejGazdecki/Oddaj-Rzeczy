import React, {useContext} from 'react';
import style from './stepThree.module.scss';
import {StateContext} from "../FormStateContext";
import {useFormContext} from "react-hook-form";

function StepThree() {
    const state = useContext(StateContext);
    const {register} = useFormContext();

    return (
        <>
            <div>
                <p>Lokalizacja:</p>
            </div>
            <select name="localization" value={state.localization} ref={register}>
                <option value="">--Wybierz--</option>
                <option value="Poznań">Poznań</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Katowice">Katowice</option>
            </select>
            <div>
                <p>Komu chcesz pomóc?</p>
                <div>
                    <input type="checkbox"
                           name="purpose"
                           value="dzieciom"
                           ref={register}
                    />dzieciom
                    <input type="checkbox"
                           name="purpose"
                           value="samotnym matkom"
                           ref={register}
                    />samotnym matkom
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>
            </div>
        </>
    )
}

export default StepThree;