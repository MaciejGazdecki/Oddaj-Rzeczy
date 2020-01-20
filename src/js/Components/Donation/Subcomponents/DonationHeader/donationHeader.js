import React from 'react';
import style from './donationHeader.modules.scss'
import ImageGoods from "../../../../../images/Form-Hero-Image.jpg";
import Decoration from "../../../../../images/Decoration.png";

function DonationHeader() {
    return (
        <header>
            <div className={style.imageContainer}>
                <img className={style.image} src={ImageGoods} alt="rzeczy"/>
            </div>
            <div className={style.content}>
                <div className={style.welcome}>
                    <p>Oddaj rzeczy, których już nie chcesz</p>
                    <p>POTRZEBUJĄCYM</p>
                </div>
                <div className={style.decoration}>
                    <img src={Decoration} alt="grafika"/>
                </div>
                <div className={style.description}>
                    <p>Wystarczą 4 proste kroki:</p>
                </div>
                <ul className={style.links}>
                    <li>
                        <div>
                            <p>1</p>
                            <p>Wybierz</p>
                            <p>rzeczy</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>2</p>
                            <p>Spakuj je</p>
                            <p>w worki</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>3</p>
                            <p>Wybierz</p>
                            <p>Fundację</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>4</p>
                            <p>Zamów</p>
                            <p>Kuriera</p>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default DonationHeader;