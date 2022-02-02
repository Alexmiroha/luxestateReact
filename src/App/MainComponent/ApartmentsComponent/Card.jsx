import React from 'react';
import s from "./Card.module.css";

const Card = () => {
    return (
        <div className={s.card}>
            <img src="./src/img/apart.jpeg" alt=""/>
            <div className={s.card_info}>
                <p>Random Street, Apt B453, New York</p>
                <div className={s.priceitp}>
                    <div className={s.price}>$3,500</div>
                    <div className={s.info_card}>
                                <span>
                                    <svg className={`${s.icon} ${s.info_card_icon}`} width="18" height="18">
                                        <use href="./src/img/sprite.svg#shower-solid"/>
                                    </svg>
                                    2BA
                                </span>
                        <span>
                                    <svg className={`${s.icon} ${s.info_card_icon}`} width="18" height="18">
                                        <use href="./src/img/sprite.svg#bed-solid"/>
                                    </svg>
                                    2BD
                                </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
