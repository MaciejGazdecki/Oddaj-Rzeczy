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
                           name="children"
                           ref={register}
                           checked={state.children}
                    />dzieciom
                    <input type="checkbox"
                           name="mothers"
                           ref={register}
                           checked={state.mothers}
                    />samotnym matkom
                    <input type="checkbox"
                           name="homeless"
                           ref={register}
                           checked={state.homeless}
                    />bezdomnym
                    <input type="checkbox"
                            name="disabled"
                           ref={register}
                           checked={state.disabled}
                    />niepelnosprawnym
                    <input type="checkbox"
                            name="olderPeople"
                           ref={register}
                           checked={state.olderPeople}
                    />
                    osobom starszym
                </div>
                <div>
                    <label htmlFor="">
                        Wpisz nazwę konkretnej organizacji (opcjonalnie)
                        <input type="text"
                                name="organizationName"
                               ref={register}
                               value={state.organizationName}
                        />
                    </label>
                </div>
            </div>
        </>
    )
}

export default StepThree;