import React from 'react'
import {Link, animateScroll as scroll} from "react-scroll";
import s from './style.module.css'

export const ScrollButton = ({ name, className, link }) => {
    return (
        <Link to={link} smooth={true} offset={-100} duration={500}
              className={`${s.scroll_button} ${className}`}>
            <p>{name}</p>
            <div className={s.arrow_1}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Link>
    )
}