import React, {useContext} from 'react';
import style from './stepFour.module.scss';
import {useFormContext} from 'react-hook-form';
import {StateContext} from "../FormStateContext";

function StepFour() {

    const state = useContext(StateContext);
    const {register} = useFormContext();

    return (
        <>
            <div>
                <p>Podaj adres oraz termin odbioru rzecz przez kuriera</p>
            </div>
            <div>
                <div>
                    <p>Adres odbioru:</p>
                    <label>Ulica:
                        <input type="text"
                               name="street"
                               value={state.street}
                               ref={register}
                        />
                    </label>
                    <label>Miasto:
                        <input type="text"
                               name="city"
                               value={state.city}
                               ref={register}
                        />
                    </label>
                    <label>Kod pocztowy:
                        <input type="text"
                               name="zipCode"
                               value={state.zipCode}
                               ref={register}
                        />
                    </label>
                    <label>Numer telefonu:
                        <input type="tel"
                               name="phoneNumber"
                               value={state.phoneNumber}
                               ref={register}
                        />
                    </label>
                </div>
                <div>
                    <p>Termin odbioru:</p>
                    <label>Data: 
                        <input type="date"
                               name="pickUpDate"
                               value={state.pickUpDate}
                               ref={register}
                        />
                    </label>
                    <label>Godzina:
                        <input type="time"
                               name="pickUpHour"
                               value={state.pickUpHour}
                               ref={register}
                        />
                    </label>
                    <label>Uwagi dla kuriera:
                        <textarea name="remarks"
                                  cols="30"
                                  rows="10"
                                  value={state.remarks}
                                  ref={register}
                        >
                        </textarea>
                    </label>
                </div>
            </div>
        </>
    )
}

export default StepFour;