import React from "react";
import style from "./foundation.modules.scss";
import Decoration from "../../../../images/Decoration.png";
import {Link} from "react-router-dom";

function Foundation() {
    return (
        <section className={style.foundation}>
            <div className={style.container}>
                <div>
                    <div>
                        <p>Komu pomagamy?</p>
                    </div>
                    <div>
                        <img src={Decoration} alt="dekoracja"/>
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div>
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                            Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                        </p>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default Foundation;