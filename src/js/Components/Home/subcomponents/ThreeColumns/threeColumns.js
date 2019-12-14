import React from 'react';
import style from './threeColumns.modules.scss'

function ThreeColumns() {
    return (
        <div className={style.yellowWrapper}>
            <div className={style.wrapper}>
                <div className={style.message}>
                    <p>10</p>
                    <p>ODDANYCH WORKÓW</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                        elementuma. Aliquam erat volutpat.
                    </p>
                </div>
                <div className={style.message}>
                    <p>5</p>
                    <p>WSPARTYCH ORGANIZACJI</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                        elementuma. Aliquam erat volutpat.
                    </p>
                </div>
                <div className={style.message}>
                    <p>7</p>
                    <p>ZORGANIZOWANY ZBIÓREK</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                        elementuma. Aliquam erat volutpat.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ThreeColumns;