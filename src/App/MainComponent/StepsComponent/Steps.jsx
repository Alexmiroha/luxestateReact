import React from 'react'
import s from './Steps.module.css'

export const Steps = () => {
    return (
        <section className={s.steps} id="HIW">
            <div className="wrapper">
                <h2>How it works?</h2>
                <p className={s.steps_text}>In this space market-facing, yet UI work flows, or bake it
                    in. <br/> Red flag we need a
                    recap by eod, cob or whatever comes <br/> first agile at the end of the day. </p>
                <div className={s.steps_container}>
                    <div className={s.step_block}>
                        <p className={s.step_number}>01</p>
                        <h4><span>01</span>Find Your Location</h4>
                        <p className={s.step_info}>
                            In this space market-facing, yet UI work flows, or bake it in. Red flag we neef the
                            day.
                        </p>
                        <p className={s.steplink}>Find Location</p>
                    </div>
                    <div className={s.step_block}>
                        <p className={s.step_number}>02</p>
                        <h4><span>02</span>Find Apartment</h4>
                        <p className={s.step_info}>
                            In this space market-facing, yet UI work flows, or bake it in. Red flag we neef the
                            day.
                        </p>
                        <p className={s.steplink}>Find Apartment</p>
                    </div>
                    <div className={s.step_block}>
                        <p className={s.step_number}>03</p>
                        <h4><span>03</span>Make Contact</h4>
                        <p className={s.step_info}>
                            In this space market-facing, yet UI work flows, or bake it in. Red flag we neef the
                            day.
                        </p>
                        <p className={s.steplink}>Make Contact</p>
                    </div>
                </div>
            </div>
        </section>
    )
}