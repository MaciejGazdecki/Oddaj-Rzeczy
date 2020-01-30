import React, {useContext} from 'react';
import style from './steoOne.module.scss';
import {useFormContext} from 'react-hook-form';
import {StateContext} from "../FormStateContext";

function StepOne() {
    const {register} = useFormContext();
    const state = useContext(StateContext);

    return (
        <div className={style.stepOne}>
            <div className={style.header}>Zaznacz co chcesz oddać:</div>
            <div>
                <input type="radio"
                       value="ubrania, które nadają się do ponownego użycia"
                       name="things"
                       id="clothesToUse"
                       ref={register}
                       defaultChecked={state.things === "ubrania, które nadają się do ponownego użycia"}
                />
                <label htmlFor="clothesToUse">ubrania, które nadają się do ponownego użycia</label>
            </div>
            <div>
                <input type="radio"
                       id="clothesToThrow"
                       name="things"
                       value='ubrania, do wyrzucenia'
                       ref={register}
                       defaultChecked={state.things === 'ubrania, do wyrzucenia'}
                />
                <label htmlFor="clothesToThrow">ubrania, do wyrzucenia</label>
            </div>
            <div>
                <input type="radio"
                       name="things"
                       value="zabawki"
                       id="zabawki"
                       ref={register}
                       defaultChecked={state.things === "zabawki"}
                />
                <label htmlFor="zabawki">zabawki</label>
            </div>
            <div>
                <input type="radio"
                       name="things"
                       value="książki"
                       id="książki"
                       ref={register}
                       defaultChecked={state.things === "książki"}
                />
                <label htmlFor="książki">książki</label>
            </div>
            <div>
                <input type="radio"
                       name="things"
                       value="Inne"
                       id="Inne"
                       ref={register}
                       defaultChecked={state.things ==="Inne"}
                />
                <label htmlFor="Inne">Inne</label>
            </div>
        </div>
    )
}

export default StepOne