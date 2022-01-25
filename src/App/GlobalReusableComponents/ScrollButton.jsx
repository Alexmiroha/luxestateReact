import React from 'react'
import {Link, animateScroll as scroll} from "react-scroll";

export const ScrollButton = (props) => {
    console.log(props)
    return (
        <Link to={props.link} smooth={true} offset={-70} duration={500} onClick={props.scroll}
              className="intro-scroll-button scroll-button">
            <p>Scroll Down</p>
            <div className="arrow-1">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Link>
    )
}