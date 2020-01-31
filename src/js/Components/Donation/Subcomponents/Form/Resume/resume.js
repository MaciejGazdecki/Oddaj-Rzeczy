import React, {useContext} from 'react';
import style from './resume.module.scss';
import {StateContext} from "../FormStateContext";
import Image1 from './../../../../../../images/Icon-1.png'
import Image2 from './../../../../../../images/Icon-4.png'

function Resume() {
    const state = useContext(StateContext);

    return (
        <>
            <div className={style.title}>
                <p>Podsumowanie Twojej darowizny</p>
            </div>
            <div>
                <p className={style.header}>Oddajesz:</p>
                <div>
                    <div className={style.items}>
                        <img src={Image1} alt="t-shirt"/>
                        <p>
                            {`${state.quantity} worki, ${state.things}, `}
                            {state.children ? 'dzieciom, ' : null}
                            {state.mothers ? 'samotnym matkom, ' : null}
                            {state.homeless ? 'bezdomnym, ' : null}
                            {state.disabled ? 'niepełnosprawnym, ' : null}
                            {state.olderPeople ? 'starszym ludziom, ' : null}
                        </p>
                    </div>
                    <div className={style.localization}>
                        <img src={Image2} alt=""/>
                        <p>Dla lokalizacji: {state.localization}</p>
                    </div>
                </div>
                <div className={style.formDetails}>
                    <div className={style.sectionOne}>
                        <div className={style.sectionTitles}>
                            <p>Adres odbioru:</p>
                        </div>
                        <div>
                            <p>Ulica: </p><p>{state.street}</p>
                        </div>
                        <div>
                            <p>Miasto: </p><p>{state.city}</p>
                        </div>
                        <div>
                            <p>Kod<br/>pocztowy: </p><p>{state.zipCode}</p>
                        </div>
                        <div>
                            <p>Numer<br/>telefonu: </p><p>{state.phoneNumber}</p>
                        </div>
                    </div>
                    <div className={style.sectionTwo}>
                        <div className={style.sectionTitles}>
                            <p>Termin odbioru: </p>
                        </div>
                        <div>
                            <p>Data: </p><p>{state.pickUpDate}</p>
                        </div>
                        <div>
                            <p>Godzina: </p><p>{state.pickUpHour}</p>
                        </div>
                        <div>{state.remarks ? <><p>Uwagi<br/>dla kuriera:</p><p>{state.remarks}</p></>: null}</div>
                        <div>{state.organizationName ? <><p>Nazwa fundacji:</p><p>{state.organizationName}</p></>: null}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;