import React, {useContext} from 'react';
import style from './resume.module.scss';
import {StateContext} from "../FormStateContext";
import Image1 from './../../../../../../images/Icon-1.png'
import Image2 from './../../../../../../images/Icon-4.png'

function Resume() {
    const state = useContext(StateContext);

    return (
        <>
            <div>
                <p>Podsumowanie Twojej darowizny</p>
            </div>
            <div>
                <p>Oddajesz:</p>
                <div>
                    <div>
                        <img src={Image1} alt="t-shirt"/>
                        {`${state.quantity} worki, ${state.things}, `}
                        <p>
                            {state.children ? 'dzieciom, ' : null}
                            {state.mothers ? 'samotnym matkom, ' : null}
                            {state.homeless ? 'bezdomnym, ' : null}
                            {state.disabled ? 'niepełnosprawnym, ' : null}
                            {state.olderPeople ? 'starszym ludziom, ' : null}
                        </p>
                    </div>
                    <div>
                        <img src={Image2} alt=""/>
                        <p>Dla lokalizacji: {state.localization}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Adres odbioru:</p>
                        <p>Ulica: {state.street}</p>
                        <p>Miasto: {state.city}</p>
                        <p>Kod pocztowy: {state.zipCode}</p>
                        <p>Numer telefonu: {state.phoneNumber}</p>
                    </div>
                    <div>
                        <p>Termin odbioru: {state.pickUpDate}</p>
                        <p>Godzina: {state.pickUpHour}</p>
                        <p>{state.remarks ? `Uwagi dla kuriera: ${state.remarks}`: null}</p>
                        <p>{state.organizationName ? `Nazwa findacji: ${state.organizationName}`: null}</p>
                    </div>
                </div>
            </div>
            <input type="submit" value="submit" form="mainForm"/>
        </>
    )
}

export default Resume;