import React, {useState} from "react";
import style from "./foundation.modules.scss";
import Decoration from "../../../../images/Decoration.png";
import {data} from "./Data/data";

function Foundation() {
    const [index, setIndex] = useState(0);
    const [page, setPage] = useState(1);
    const perPage = 3;

    const pages = [];
    for (let i = 1; i <= data[index].length/perPage; i++) {
        pages.push(<li key={i} onClick={() => setPage(i)}>{i}</li>)
    }

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
                    <div className={style.buttons}>
                        <div className={style.button} onClick={() => {setIndex(0);setPage(1)}}>
                            <p>
                                Fundacjom
                            </p>
                        </div>
                        <div className={style.button} onClick={()=> {setIndex(1);setPage(1)}}>
                            <p>
                                Organizacjom pozarządowym
                            </p>
                        </div>
                        <div className={style.button} onClick={() => {setIndex(2);setPage(1)}}>
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
                <ul className={style.items}>
                    {data[index].slice(page*perPage-perPage,page*perPage).map((el,index) =>
                        <li key={index}>
                            <p>{el.name}</p>
                            <p>{el.mission}</p>
                            <p>{el.items}</p>
                        </li>
                    )}
                </ul>
                <ul className={style.pages} style={data[index].length === 3 ? {display:"none"} : {display:"flex"}}>
                    {pages}
                </ul>
            </div>
        </section>
    )
}

export default Foundation;