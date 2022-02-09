import React from 'react'
import s from './Services.module.css'
import image from '../../img/serv.jpeg'

export const Services = () => {
    return (
        <section className={`${s.services} wrapper`}>
            <h2>Services</h2>
            <p className={s.serv_title}>In this space market-facing, yet UI work flows , or bake it in. <br/> Red
                flag we need a
                first agile at the end of the day. </p>
            <div className={s.serv_container}>
                <div className={s.serv_img}>
                    <img src={image} alt=""/>
                </div>
                <div className={s.serv_text}>
                    <h4>Renting</h4>
                    <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap
                        by eod, cob
                        or whatever comes first agile at the end of the day. Not enough bandwidth closing these
                        latest
                        prospects is like putting socks on an octopus, yet due diligence</p>
                    <h4>Selling</h4>
                    <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap
                        by eod, cob
                        or whatever comes first agile at the end of the day. Not enough bandwidth closing these
                        latest
                        prospects is like putting socks on an octopus, yet due diligence</p>
                    <h4>Building</h4>
                    <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap
                        by eod, cob
                        or whatever comes first agile at the end of the day. Not enough bandwidth closing these
                        latest
                        prospects is like putting socks on an octopus, yet due diligence</p>
                </div>
            </div>
        </section>
    )
}