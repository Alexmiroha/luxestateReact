import React from 'react'
import {Link, animateScroll as scroll} from "react-scroll";
import s from './style.module.css'

export const ScrollButton = (props) => {
    console.log(props)
    return (
        <Link to={props.link} smooth={true} offset={-100} duration={500}
              className={`${s.scroll_button} ${props.class}`}>
            <p>{props.name}</p>
            <div className={s.arrow_1}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Link>
    )
}