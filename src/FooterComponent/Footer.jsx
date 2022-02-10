import React from 'react'
import s from './Footer.module.css'
import {SearchButton} from "../GlobalReusableComponents/SearchButton";
import icon from "../img/search.png";

export const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className={s.footer_block}>
                    <div className={s.footer_logo}>
                        <h3>luxestate<br/>Explore Real Estate</h3>
                    </div>
                    <div className={s.footer_input}>
                        <SearchButton placeholder='Subscribe To Our Newsletter' submitValue='Subscribe'/>
                    </div>
                </div>
                <hr/>
                <div className={s.footer_links}>
                    <div className={s.footer_links_logo}>
                        <h4>luxestate</h4>
                        <p>© 2019 - luxestate, <br/>
                            All Right Reserved</p>
                    </div>
                    <div className={s.footer_link}>
                        <p>luxestate</p>
                        <a href="#Agents">Agents</a>
                        <a href="#Agents">Hunters</a>
                    </div>
                    <div className={s.footer_link}>
                        <p>company</p>
                        <a href="#stats">About</a>
                        <a href="#">FAQ</a>
                        <a href="#">Contact</a>
                        <a href="#">Social</a>
                    </div>
                    <div className={s.footer_link}>
                        <p>product</p>
                        <a href="#Apartments">Apartments</a>
                        <a href="#HIW">How It Works</a>
                    </div>
                    <div className={s.footer_link}>
                        <p>services</p>
                        <a href="#Abt">Renting</a>
                        <a href="#Abt">Selling</a>
                        <a href="#Abt">Building</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}