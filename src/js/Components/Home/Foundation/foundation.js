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
                <div className={style.wrapper}>
                    <div className={style.header}>
                        <p>Komu pomagamy?</p>
                    </div>
                    <div className={style.decoration}>
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
                    <div className={style.description}>
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                            Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                        </p>
                    </div>
                </div>
                <ul className={style.items}>
                    {data[index].slice(page*perPage-perPage,page*perPage).map((el,index) =>
                        <li key={index} className={style.item}>
                            <div className={style.itemWrapper}>
                                <p>{el.name}</p>
                                <p>{el.mission}</p>
                            </div>
                            <p>{el.items}</p>
                        </li>
                    )}
                </ul>
                <ul className={style.pages}
                    style={data[index].length === perPage ? {display:"none"} : {display:"flex"}}>
                    {pages}
                </ul>
            </div>
        </section>
    )
}

export default Foundation;