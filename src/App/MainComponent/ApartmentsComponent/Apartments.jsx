import React from 'react'
import s from './Apartments.module.css'

export const Apartments = () => {
    return (
        <section className={s.rent} id="Apartments">
            <div className={`wrapper ${s.apart}`}>
                <h2>More Then 500+ <br/> Apartments For Rent</h2>
                <div className={s.cards}>
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
                    <div className={s.card}>
                        <img src="./src/img/apart.jpeg" alt=""/>
                        <div className={s.card_info}>
                            <p>Random Street, Apt B453, New York</p>
                            <div className={s.priceitp}>
                                <div className={s.price}>$3,500</div>
                                <div className={s.info_card}>
                                <span>
                                    <svg className={`${s.icon} ${s.info_card_icon}`} width="18" height="18">
                                        <use href="./src/img/sprite.svg#shower-solid"></use>
                                    </svg>
                                    2BA
                                </span>
                                    <span>
                                    <svg className={`${s.icon} ${s.info_card_icon}`} width="18" height="18">
                                        <use href="./src/img/sprite.svg#bed-solid"></use>
                                    </svg>
                                    2BD
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="./src/img/apart.jpeg" alt=""/>
                        <div className={s.card_info}>
                            <p>Random Street, Apt B453, New York</p>
                            <div className={s.priceitp}>
                                <div className={s.price}>$3,500</div>
                                <div className={s.info_card}>
                                <span>
                                    <svg className={`${s.icon} ${s.info_card_icon}`} width="18" height="18">
                                        <use href="./src/img/sprite.svg#shower-solid"></use>
                                    </svg>
                                    2BA
                                </span>
                                    <span>
                                    <svg className={`${s.icon} ${s.info_card_icon}`} width="18" height="18">
                                        <use href="./src/img/sprite.svg#bed-solid"></use>
                                    </svg>
                                    2BD
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="./src/img/apart.jpeg" alt=""/>
                        <div className={s.card_info}>
                            <p>Random Street, Apt B453, New York</p>
                            <div className={s.priceitp}>
                                <div className={s.price}>$3,500</div>
                                <div className={s.info_card}>
                                <span>
                                    <svg className={`${s.icon} ${s.info_card_icon}`} width="18" height="18">
                                        <use href="./src/img/sprite.svg#shower-solid"></use>
                                    </svg>
                                    2BA
                                </span>
                                    <span>
                                    <svg className={`${s.icon} ${s.info_card_icon}`} width="18" height="18">
                                        <use href="./src/img/sprite.svg#bed-solid"></use>
                                    </svg>
                                    2BD
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="./src/img/apart.jpeg" alt=""/>
                        <div className={s.card_info}>
                            <p>Random Street, Apt B453, New York</p>
                            <div className={s.priceitp}>
                                <div className={s.price}>$3,500</div>
                                <div className={s.info_card}>
                                <span>
                                    <svg className={`${s.icon} ${s.info_card_icon}`} width="18" height="18">
                                        <use href="./src/img/sprite.svg#shower-solid"></use>
                                    </svg>
                                    2BA
                                </span>
                                    <span>
                                    <svg className={`${s.icon} ${s.info_card_icon}`} width="18" height="18">
                                        <use href="./src/img/sprite.svg#bed-solid"></use>
                                    </svg>
                                    2BD
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="./src/img/apart.jpeg" alt=""/>
                        <div className={s.card_info}>
                            <p>Random Street, Apt B453, New York</p>
                            <div className={s.priceitp}>
                                <div className={s.price}>$3,500</div>
                                <div className={s.info_card}>
                                <span>
                                    <svg className={`${s.icon} ${s.info_card_icon}`} width="18" height="18">
                                        <use href="./src/img/sprite.svg#shower-solid"></use>
                                    </svg>
                                    2BA
                                </span>
                                    <span>
                                    <svg className={`${s.icon} ${s.info_card_icon}`} width="18" height="18">
                                        <use href="./src/img/sprite.svg#bed-solid"></use>
                                    </svg>
                                    2BD
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.search_button}>
                    <form action="">
                        <label>
                            <input type="text" placeholder="Search Locations"/>
                        </label>
                        <input type="submit" value="search"/>
                    </form>
                    <button className={s.all_ap}>View All Apartments</button>
                </div>
            </div>
        </section>
    )
}