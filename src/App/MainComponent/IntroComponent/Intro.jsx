import React from 'react'
import {ScrollButton} from "../../GlobalReusableComponents/ScrollButton";
import s from './Intro.module.css'
import {SearchButton} from "../../GlobalReusableComponents/SearchButton";

export const Intro = () => {
    return (
        <section className={`${s.intro} wrapper`} id="home">
            <div className={s.intro_img}>
                <p className={s.intro_text}>Find Your New <br/>
                    Modern Apartment</p>
            </div>
            <div className={s.search_button}>
                <SearchButton/>
            </div>
            <div className={s.intro_contacts}>
                <p>
                    <svg className={`${s.icon} ${s.intro_icon} ${s.icon_phone}`} width="18" height="18">
                        <use href="./src/img/sprite.svg#phone-solid"></use>
                    </svg>
                    (000)1234-567
                </p>
                <p>
                    <svg className={`${s.icon} ${s.intro_icon}`} width="18" height="18">
                        <use href="./src/img/sprite.svg#map-marker-alt-solid"></use>
                    </svg>
                    Melbourn, Australia
                </p>
            </div>
            <div className={s.scrollWrapper}>
                <ScrollButton name='Scroll Down' link='stats'/>
            </div>
        </section>
    )
}