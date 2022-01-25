import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import {ScrollButton} from "../../GlobalReusableComponents/ScrollButton";

export const Intro = () => {
    return (
        <section className="intro wrapper" id="home">
            <div className="intro-img">
                <p className="intro-text">Find Your New <br/>
                    Modern Apartment</p>
            </div>
            <div className="search-button">
                <form action="">
                    <label>
                        <input type="text" placeholder="Search Locations"/>
                    </label>
                    <input type="submit" value="search"/>
                </form>
            </div>
            <div className="intro-contacts">
                <p>
                    <svg className="icon intro-icon icon_phone" width="18" height="18">
                        <use href="./src/img/sprite.svg#phone-solid"></use>
                    </svg>
                    (000)1234-567
                </p>
                <p>
                    <svg className="icon intro-icon" width="18" height="18">
                        <use href="./src/img/sprite.svg#map-marker-alt-solid"></use>
                    </svg>
                    Melbourn, Australia
                </p>
            </div>
            <ScrollButton link='stats'/>
        </section>
    )
}