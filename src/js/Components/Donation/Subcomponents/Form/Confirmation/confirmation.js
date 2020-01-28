import React from 'react';
import style from './confirmation.module.scss';
import Decoration from './../../../../../../images/Decoration.png'

function Confirmation() {
    return (
        <div>
            <div>
                <p>Dziękujemy za przesłanie formularza</p>
                <p>Na maila prześlemy wszelkie</p>
                <p>informacje o odbiorze</p>
                <img src={Decoration} alt=""/>
            </div>
        </div>
    )
}

export default Confirmation;