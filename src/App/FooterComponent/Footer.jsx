import React from 'react'

export const Footer = () => {
    return (
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
    )
}