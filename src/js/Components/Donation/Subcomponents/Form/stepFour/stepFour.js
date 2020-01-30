import React, {useContext} from 'react';
import style from './stepFour.module.scss';
import {useFormContext} from 'react-hook-form';
import {StateContext} from "../FormStateContext";

function StepFour() {

    const state = useContext(StateContext);
    const {register} = useFormContext();

    return (
        <>
            <div className={style.header}>
                <p>Podaj adres oraz termin odbioru rzecz przez kuriera</p>
            </div>
            <div className={style.formWrapper}>
                <div className={style.formSectionOne}>
                    <p className={style.smallHeaders}>Adres odbioru:</p>
                    <div>
                        <label>Ulica</label>
                        <input type="text"
                               name="street"
                               value={state.street}
                               ref={register}
                        />
                    </div>
                    <div>
                        <label>Miasto</label>
                        <input type="text"
                               name="city"
                               value={state.city}
                               ref={register}
                        />
                    </div>
                    <div>
                        <label>Kod<br/>pocztowy</label>
                        <input type="text"
                               name="zipCode"
                               value={state.zipCode}
                               ref={register}
                        />
                    </div>
                    <div>
                        <label>Numer<br/>telefonu</label>
                        <input type="tel"
                               name="phoneNumber"
                               value={state.phoneNumber}
                               ref={register}
                        />
                    </div>
                </div>
                <div className={style.formSectionTwo}>
                    <p className={style.smallHeaders}>Termin odbioru:</p>
                    <div>
                        <label>Data</label>
                        <input type="date"
                               name="pickUpDate"
                               value={state.pickUpDate}
                               ref={register}
                        />
                    </div>
                    <div>
                        <label>Godzina</label>
                        <input type="time"
                               name="pickUpHour"
                               value={state.pickUpHour}
                               ref={register}
                        />
                    </div>
                    <div className={style.textarea}>
                        <label>Uwagi dla kuriera</label>
                        <textarea name="remarks"
                                  cols="30"
                                  rows="7"
                                  value={state.remarks}
                                  ref={register}
                        >
                        </textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepFour;