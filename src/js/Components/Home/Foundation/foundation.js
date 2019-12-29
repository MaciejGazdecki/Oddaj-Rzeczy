import React, {useState} from "react";
import style from "./foundation.modules.scss";
import Decoration from "../../../../images/Decoration.png";
import {data} from "./Data/data";

function Foundation() {
    const [index, setIndex] = useState(0);

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
                    <div>
                        <div onClick={() => setIndex(0)}>
                            <p>
                                Fundacjom
                            </p>
                        </div>
                        <div onClick={()=> setIndex(1)}>
                            <p>
                                Organizacjom pozarządowym
                            </p>
                        </div>
                        <div onClick={() => setIndex(2)}>
                            <p>
                                Lokalnym zbiórkom
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                            Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                        </p>
                    </div>
                </div>
                <ul>
                    {data[index].map((el,index) =>
                        <li key={index}>
                            <p>{el.name}</p>
                            <p>{el.mission}</p>
                            <p>{el.items}</p>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}

export default Foundation;