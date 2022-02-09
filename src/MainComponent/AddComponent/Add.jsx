import React from 'react'
import s from './Add.module.css'
import image from '../../img/addroom.jpeg'
import sprite from '../../img/sprite.svg'

export const Add = () => {
    return (
        <section className={`${s.add} wrapper`} id='SAwA'>
            <div className={s.add_line}>
                <div className={s.line_img}>
                    <img src={image} alt=""/>
                    <div className={`${s.location} ${s.location_melbourn}`}>
                        <svg className={`${s.icon} ${s.location_icon}`} width="21" height="21">
                            <use href={`${sprite}#map-marker-alt-solid`}/>
                        </svg>
                        Melbourn, Australia
                    </div>
                </div>
                <div className={s.line_text}>
                    <h3>Super Awesome Add</h3>
                    <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap
                        by eod, cob
                        or whatever comes first agile at the end of the day. Not enough bandwidth closing these
                        latest
                        prospects is like putting socks on an octopus, yet due diligence</p>
                </div>
            </div>
            <div className={`${s.add_line} ${s.add_line_right}`}>
                <div className={s.line_text}>
                    <h3 className={s.saat2}>Super Awesome Add</h3>
                    <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap
                        by eod, cob
                        or whatever comes first agile at the end of the day. Not enough bandwidth closing these
                        latest
                        prospects is like putting socks on an octopus, yet due diligence</p>
                </div>
                <div className={s.line_img}>
                    <img src={image} alt=""/>
                    <div className={`${s.location} ${s.location_australia}`}>
                        <svg className={`${s.icon} ${s.location_icon}`} width="21" height="21">
                            <use href={`${sprite}#map-marker-alt-solid`}/>
                        </svg>
                        Melbourn, Australia
                    </div>
                </div>
            </div>
            <div className={s.add_line}>
                <div className={s.line_img}>
                    <img src={image} alt=""/>
                    <div className={s.show_more}>Show Me More</div>
                </div>
                <div className={`${s.line_text} ${s.lt3}`}>
                    <h3>Super Awesome Add</h3>
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