import React from 'react'
import s from './Stats.module.css'
import apartments from "../../img/apartments.jpg"
import clients from "../../img/clients.jpg"
import employees from "../../img/employees.jpg"
import Awards from "../../img/Awards.jpg"


export const Stats = () => {
    return (
        <section className={`${s.stats} wrapper`} id="stats">
            <div className={s.stats_text}>
                <h2>Our's Company Statistics</h2>
                <p>
                    In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by
                    eod, cob or
                    whatever comes first agile at the end of the day. Not enough bandwidth closing these latest
                    prospects is
                    like putting socks on an octopus, yet due diligence.
                </p>
                <p>
                    We need to get all stakeholders up to speed and in the right place hard stop, or
                    technologically savvy
                    or pre launch. Pro-sumer software commitment to the cause offline this discussion and wiggle
                    room blue
                    sky. Beef up teams were able to drive adoption and awareness. Screw the pooch killing it.
                </p>
            </div>
            <div className={s.stats_info}>
                <div className={s.stats_line}>
                    <div style={{backgroundImage: `url(${apartments})`}} className={`${s.square} ${s.apartments_square}`}>
                        <div className={s.backdrop}>
                            <span className={s.stats_square}>748</span>
                            <span className={s.square_text}>Apartments</span>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${clients})`}} className={`${s.square} ${s.clients_square}`}>
                        <div className={s.backdrop}>
                            <span className={s.stats_square}>3854</span>
                            <span className={s.square_text}>Clients</span>
                        </div>
                    </div>
                </div>
                <div className={s.stats_line}>
                    <div style={{backgroundImage: `url(${employees})`}} className={`${s.square} ${s.employees_square}`}>
                        <div className={s.backdrop}>
                            <span className={s.stats_square}>24</span>
                            <span className={s.square_text}>Employees</span>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${Awards})`}} className={`${s.square} ${s.awards_square}`}>
                        <div className={s.backdrop}>
                            <span className={s.stats_square}>14</span>
                            <span className={s.square_text}>Awards</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}