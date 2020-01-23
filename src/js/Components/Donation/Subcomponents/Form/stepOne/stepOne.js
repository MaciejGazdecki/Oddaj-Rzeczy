import React, {useContext} from 'react';
import style from './steoOne.module.scss';
import {RegisterContext} from "../formContextRegister";

function StepOne() {
    const register = useContext(RegisterContext);

    return (
        <>
            <div>Zaznacz co chcesz oddać:</div>
            <div>
                <input type="checkbox"
                       value="ubrania, które nadają się do ponownego użycia"
                       name="things"
                       id="clothesToUse"
                       ref={register}
                />
                <label htmlFor="clothesToUse">ubrania, które nadają się do ponownego użycia</label>
            </div>
            <div>
                <input type="checkbox"
                       id="clothestoThrow"
                       name="things"
                       value='ubrania, do wyrzucenia'
                       ref={register}
                />
                <label htmlFor="clothesToThrow">ubrania, do wyrzucenia</label>
            </div>
            <div>
                <input type="checkbox"
                       name="things"
                       value="zabawki"
                       id="zabawki"
                       ref={register}
                />
                <label htmlFor="zabawki">zabawki</label>
            </div>
            <div>
                <input type="checkbox"
                       name="things"
                       value="książki"
                       id="książki"
                       ref={register}
                />
                <label htmlFor="książki">książki</label>
            </div>
            <div>
                <input type="checkbox"
                       name="things"
                       value="Inne"
                       id="Inne"
                       ref={register}
                />
                <label htmlFor="Inne">Inne</label>
            </div>
        </>
    )
}

export default StepOne