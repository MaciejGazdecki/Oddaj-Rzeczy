import React from 'react';
import style from './donationForm.modules.scss';
import Bear from '../../../../../images/Background-Form.jpg'

function DonationForm() {
    return (
        <section className={style.formSection}>
            <div className={style.info}>
                <p></p>
                <p></p>
            </div>
            <div style={{backgroundImage: `url(${Bear})`}} className={style.formBackground}>
                <div>
                </div>
            </div>
        </section>
    )
}

export default DonationForm;