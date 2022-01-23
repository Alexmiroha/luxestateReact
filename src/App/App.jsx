import React from 'react';

export const App = () => {
    return (
        <div>
            <header className="header">
                <nav>
                    <input type="checkbox" id="checkbox-menu"/>
                    <label htmlFor="checkbox-menu">
                        <ul className="menu touch">
                            <li><a href="#" className="logo">luxestate</a></li>
                            <li className="about"><a href="#stats">About</a></li>
                            <li><a href="#Apartments">Apartments</a></li>
                            <li><a href="#HIW">How It Work</a></li>
                            <li><a href="#Agents">Agents</a></li>
                            <li className="contact"><a href="#Contact_popup" className="popup-link">Contact Us</a></li>
                            <li><a href="#" className="popup-link">Join Us</a></li>
                        </ul>
                        <span className="toggle">☰</span>
                    </label>
                </nav>
            </header>
            <main>
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
                    <a href="#" className="intro-scroll-button scroll-button" onClick="slowScroll('#stats')">
                        <p>Scroll Down</p>
                        <div className="arrow-1">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                </section>
                <section className="stats wrapper" id="stats">
                    <div className="stats-text">
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
                    <div className="stats-info">
                        <div className="stats-line">
                            <div className="square apartments-square">
                                <div className="backdrop">
                                    <span className="stats-square">748</span>
                                    <span className="square-text">Apartments</span>
                                </div>
                            </div>
                            <div className="square clients-square">
                                <div className="backdrop">
                                    <span className="stats-square">3854</span>
                                    <span className="square-text">Clients</span>
                                </div>
                            </div>
                        </div>
                        <div className="stats-line">
                            <div className="square employees-square">
                                <div className="backdrop">
                                    <span className="stats-square">24</span>
                                    <span className="square-text">Employees</span>
                                </div>
                            </div>
                            <div className="square awards-square">
                                <div className="backdrop">
                                    <span className="stats-square">14</span>
                                    <span className="square-text">Awards</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="rent" id="Apartments">
                    <div className="wrapper apart">
                        <h2>More Then 500+ <br/> Apartments For Rent</h2>
                        <div className="cards">
                            <div className="card">
                                <img src="./src/img/apart.jpeg" alt=""/>
                                <div className="card_info">
                                    <p>Random Street, Apt B453, New York</p>
                                    <div className="priceitp">
                                        <div className="price">$3,500</div>
                                        <div className="info_card">
                                <span>
                                    <svg className="icon info_card_icon" width="18" height="18">
                                        <use href="./src/img/sprite.svg#shower-solid"></use>
                                    </svg>
                                    2BA
                                </span>
                                            <span>
                                    <svg className="icon info_card_icon" width="18" height="18">
                                        <use href="./src/img/sprite.svg#bed-solid"></use>
                                    </svg>
                                    2BD
                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <img src="./src/img/apart.jpeg" alt=""/>
                                <div className="card_info">
                                    <p>Random Street, Apt B453, New York</p>
                                    <div className="priceitp">
                                        <div className="price">$3,500</div>
                                        <div className="info_card">
                                <span>
                                    <svg className="icon info_card_icon" width="18" height="18">
                                        <use href="./src/img/sprite.svg#shower-solid"></use>
                                    </svg>
                                    2BA
                                </span>
                                            <span>
                                    <svg className="icon info_card_icon" width="18" height="18">
                                        <use href="./src/img/sprite.svg#bed-solid"></use>
                                    </svg>
                                    2BD
                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <img src="./src/img/apart.jpeg" alt=""/>
                                <div className="card_info">
                                    <p>Random Street, Apt B453, New York</p>
                                    <div className="priceitp">
                                        <div className="price">$3,500</div>
                                        <div className="info_card">
                                <span>
                                    <svg className="icon info_card_icon" width="18" height="18">
                                        <use href="./src/img/sprite.svg#shower-solid"></use>
                                    </svg>
                                    2BA
                                </span>
                                            <span>
                                    <svg className="icon info_card_icon" width="18" height="18">
                                        <use href="./src/img/sprite.svg#bed-solid"></use>
                                    </svg>
                                    2BD
                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <img src="./src/img/apart.jpeg" alt=""/>
                                <div className="card_info">
                                    <p>Random Street, Apt B453, New York</p>
                                    <div className="priceitp">
                                        <div className="price">$3,500</div>
                                        <div className="info_card">
                                <span>
                                    <svg className="icon info_card_icon" width="18" height="18">
                                        <use href="./src/img/sprite.svg#shower-solid"></use>
                                    </svg>
                                    2BA
                                </span>
                                            <span>
                                    <svg className="icon info_card_icon" width="18" height="18">
                                        <use href="./src/img/sprite.svg#bed-solid"></use>
                                    </svg>
                                    2BD
                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <img src="./src/img/apart.jpeg" alt=""/>
                                <div className="card_info">
                                    <p>Random Street, Apt B453, New York</p>
                                    <div className="priceitp">
                                        <div className="price">$3,500</div>
                                        <div className="info_card">
                                <span>
                                    <svg className="icon info_card_icon" width="18" height="18">
                                        <use href="./src/img/sprite.svg#shower-solid"></use>
                                    </svg>
                                    2BA
                                </span>
                                            <span>
                                    <svg className="icon info_card_icon" width="18" height="18">
                                        <use href="./src/img/sprite.svg#bed-solid"></use>
                                    </svg>
                                    2BD
                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <img src="./src/img/apart.jpeg" alt=""/>
                                <div className="card_info">
                                    <p>Random Street, Apt B453, New York</p>
                                    <div className="priceitp">
                                        <div className="price">$3,500</div>
                                        <div className="info_card">
                                <span>
                                    <svg className="icon info_card_icon" width="18" height="18">
                                        <use href="./src/img/sprite.svg#shower-solid"></use>
                                    </svg>
                                    2BA
                                </span>
                                            <span>
                                    <svg className="icon info_card_icon" width="18" height="18">
                                        <use href="./src/img/sprite.svg#bed-solid"></use>
                                    </svg>
                                    2BD
                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="search-button">
                            <form action="">
                                <label>
                                    <input type="text" placeholder="Search Locations"/>
                                </label>
                                <input type="submit" value="search"/>
                            </form>
                            <button className="all_ap">View All Apartments</button>
                        </div>
                    </div>
                </section>
                <section className="steps" id="HIW">
                    <div className="wrapper">
                        <h2>How it works?</h2>
                        <p className="steps_text">In this space market-facing, yet UI work flows, or bake it
                            in. <br/> Red flag we need a
                            recap by eod, cob or whatever comes <br/> first agile at the end of the day. </p>
                        <div className="steps-container">
                            <div className="step_block">
                                <p className="step_number">01</p>
                                <h4><span>01</span>Find Your Location</h4>
                                <p className="step_info">
                                    In this space market-facing, yet UI work flows, or bake it in. Red flag we neef the
                                    day.
                                </p>
                                <p className="steplink">Find Location</p>
                            </div>
                            <div className="step_block">
                                <p className="step_number">02</p>
                                <h4><span>01</span>Find Apartment</h4>
                                <p className="step_info">
                                    In this space market-facing, yet UI work flows , or bake it in. Red flag we neef the
                                    day.
                                </p>
                                <p className="steplink">Find Apartment</p>
                            </div>
                            <div className="step_block">
                                <p className="step_number">03</p>
                                <h4><span>01</span>Make Contact</h4>
                                <p className="step_info">
                                    In this space market-facing, yet UI work flows , or bake it in. Red flag we neef the
                                    day.
                                </p>
                                <p className="steplink">Make Contact</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="services wrapper" id="Abt">
                    <h2>Services</h2>
                    <p className="serv_ttl">In this space market-facing, yet UI work flows , or bake it in. <br/> Red
                        flag we need a
                        first agile at the end of the day. </p>
                    <div className="serv_container">
                        <div className="serv-img">
                            <img src="./src/img/serv.jpeg" alt=""/>
                        </div>
                        <div className="serv-text">
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
                <section className="agents" id="Agents">
                    <div className="wrapper">
                        <h2>Meet Our Agents</h2>
                        <p className="a-inf">In this space market-facing, yet UI work flows , or bake it in. <br/> Red
                            flag we need a
                            recap by eod, cob or whatever comes <br/> first agile at the end of the day. </p>
                        <div className="agent-cards">
                            <div className="agent-card">
                                <img src="./src/img/man.jpeg" alt=""/>
                                <div className="agent-info">
                                    <p>Agent</p>
                                    <div className="agent-block">
                                        <p className="agent-name">
                                            Mr. Luke Skywalker
                                        </p>
                                        <div className="social">
                                            <a href="">
                                                <svg className="icon social_icon" width="18" height="18">
                                                    <use href="./src/img/sprite.svg#twitter-brands"></use>
                                                </svg>
                                            </a>
                                            <a href="">
                                                <svg className="icon social_icon" width="18" height="18">
                                                    <use href="./src/img/sprite.svg#facebook-brands"></use>
                                                </svg>
                                            </a>
                                            <a href="">
                                                <svg className="icon social_icon" width="18" height="18">
                                                    <use href="./src/img/sprite.svg#instagram-brands"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="agent-card">
                                <img src="./src/img/man.jpeg" alt=""/>
                                <div className="agent-info">
                                    <p>Agent</p>
                                    <div className="agent-block">
                                        <p className="agent-name">
                                            Mr. Luke Skywalker
                                        </p>
                                        <div className="social">
                                            <a href="">
                                                <svg className="icon social_icon" width="18" height="18">
                                                    <use href="./src/img/sprite.svg#twitter-brands"></use>
                                                </svg>
                                            </a>
                                            <a href="">
                                                <svg className="icon social_icon" width="18" height="18">
                                                    <use href="./src/img/sprite.svg#facebook-brands"></use>
                                                </svg>
                                            </a>
                                            <a href="">
                                                <svg className="icon social_icon" width="18" height="18">
                                                    <use href="./src/img/sprite.svg#instagram-brands"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="agent-card">
                                <img src="./src/img/man.jpeg" alt=""/>
                                <div className="agent-info">
                                    <p>Agent</p>
                                    <div className="agent-block">
                                        <p className="agent-name">
                                            Mr. Luke Skywalker
                                        </p>
                                        <div className="social">
                                            <a href="">
                                                <svg className="icon social_icon" width="18" height="18">
                                                    <use href="./src/img/sprite.svg#twitter-brands"></use>
                                                </svg>
                                            </a>
                                            <a href="">
                                                <svg className="icon social_icon" width="18" height="18">
                                                    <use href="./src/img/sprite.svg#facebook-brands"></use>
                                                </svg>
                                            </a>
                                            <a href="">
                                                <svg className="icon social_icon" width="18" height="18">
                                                    <use href="./src/img/sprite.svg#instagram-brands"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="add wrapper" id="SAwA">
                    <div className="add-line">
                        <div className="line-img">
                            <img src="./src/img/addroom.jpeg" alt=""/>
                            <div className="location location-melbourn">
                                <svg className="icon location_icon" width="21" height="21">
                                    <use href="./src/img/sprite.svg#map-marker-alt-solid"></use>
                                </svg>
                                Melbourn, Australia
                            </div>
                        </div>
                        <div className="line-text">
                            <h3>Super Awesome Add</h3>
                            <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap
                                by eod, cob
                                or whatever comes first agile at the end of the day. Not enough bandwidth closing these
                                latest
                                prospects is like putting socks on an octopus, yet due diligence</p>
                        </div>
                    </div>
                    <div className="add-line add-line-right">
                        <div className="line-text">
                            <h3 className="saat2">Super Awesome Add</h3>
                            <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap
                                by eod, cob
                                or whatever comes first agile at the end of the day. Not enough bandwidth closing these
                                latest
                                prospects is like putting socks on an octopus, yet due diligence</p>
                        </div>
                        <div className="line-img">
                            <img src="./src/img/addroom.jpeg" alt=""/>
                            <div className="location location-australia">
                                <svg className="icon location_icon" width="21" height="21">
                                    <use href="./src/img/sprite.svg#map-marker-alt-solid"></use>
                                </svg>
                                Melbourn, Australia
                            </div>
                        </div>
                    </div>
                    <div className="add-line">
                        <div className="line-img">
                            <img src="./src/img/addroom.jpeg" alt=""/>
                            <div className="show-more">Show Me More</div>
                        </div>
                        <div className="line-text lt3">
                            <h3>Super Awesome Add</h3>
                            <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap
                                by eod, cob
                                or whatever comes first agile at the end of the day. Not enough bandwidth closing these
                                latest
                                prospects is like putting socks on an octopus, yet due diligence</p>

                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="wrapper">
                    <div className="footer-block">
                        <div className="footer-logo">
                            <h3>luxestate</h3>
                            <h3>Explore Real Estate</h3>
                        </div>
                        <div className="footer-search">
                            <form action="">
                                <label>
                                    <input type="text" placeholder="Subscribe To Our Newsletter"/>
                                </label>
                                <input type="submit" value="⟶"/>
                            </form>
                        </div>
                    </div>
                    <hr/>
                        <div className="footer-links">
                            <div className="footer-links-logo">
                                <h4>luxestate</h4>
                                <p>© 2019 - luxestate, <br/>
                                    All Right Reserved</p>
                            </div>
                            <div className="footer-link">
                                <p>luxestate</p>
                                <a href="#Agents">Agents</a>
                                <a href="#Agents">Hunters</a>
                            </div>
                            <div className="footer-link">
                                <p>company</p>
                                <a href="#stats">About</a>
                                <a href="#">FAQ</a>
                                <a href="#">Contact</a>
                                <a href="#">Social</a>
                            </div>
                            <div className="footer-link">
                                <p>product</p>
                                <a href="#Apartments">Apartments</a>
                                <a href="#HIW">How It Works</a>
                            </div>
                            <div className="footer-link">
                                <p>services</p>
                                <a href="#Abt">Renting</a>
                                <a href="#Abt">Selling</a>
                                <a href="#Abt">Building</a>
                            </div>
                        </div>
                </div>
            </footer>

        </div>
    )
}