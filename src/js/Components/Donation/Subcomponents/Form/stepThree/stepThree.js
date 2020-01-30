import React, {useContext} from 'react';
import style from './stepThree.module.scss';
import {StateContext} from "../FormStateContext";
import {useFormContext} from "react-hook-form";

function StepThree() {
    const state = useContext(StateContext);
    const {register} = useFormContext();

    return (
        <>
            <div className={style.localization}>
                <p>Lokalizacja:</p>
            </div>
            <select name="localization"
                    value={state.localization}
                    ref={register}
                    className={style.select}
            >
                <option value="">--Wybierz--</option>
                <option value="Poznań">Poznań</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Katowice">Katowice</option>
            </select>
            <div>
                <p className={style.help}>Komu chcesz pomóc?</p>
                <div className={style.checkboxes}>
                    <div>
                        <input type="checkbox"
                               name="children"
                               ref={register}
                               checked={state.children}
                               id="children"
                        />
                        <label htmlFor="children">dzieciom</label>
                        <input type="checkbox"
                               name="mothers"
                               ref={register}
                               checked={state.mothers}
                               id="mothers"
                        />
                        <label htmlFor="mothers">samotnym matkom</label>
                        <input type="checkbox"
                               name="homeless"
                               ref={register}
                               checked={state.homeless}
                               id="homeless"
                        />
                        <label htmlFor="homeless">bezdomnym</label>
                    </div>
                    <div>
                        <input type="checkbox"
                               name="disabled"
                               ref={register}
                               checked={state.disabled}
                               id="disabled"
                        />
                        <label htmlFor="disabled">niepełnosprawnym</label>
                        <input type="checkbox"
                               name="olderPeople"
                               ref={register}
                               checked={state.olderPeople}
                               id="olderPeople"
                        />
                        <label htmlFor="olderPeople">osobom starszym</label>
                    </div>
                </div>
                <div className={style.organizationName}>
                    <label htmlFor="organizationName">
                        Wpisz nazwę konkretnej organizacji (opcjonalnie)
                    </label>
                    <input type="text"
                           name="organizationName"
                           ref={register}
                           value={state.organizationName}
                           id="organizationName"
                    />
                </div>
            </div>
        </>
    )
}

export default StepThree;