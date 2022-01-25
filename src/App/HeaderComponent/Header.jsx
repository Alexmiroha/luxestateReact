import React, {useState} from 'react'
import s from './Header.module.css'



export const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    console.log(menuActive)
    return (
        <header className={s.header}>
            <nav>
                <ul id='menu' className={menuActive ? `${s.menu} ${s.active}` : `${s.menu} ${s.touch}`}>
                        <li><a href="#" className={s.logo}>luxestate</a></li>
                        <li className={s.about}><a href="#stats">About</a></li>
                        <li><a href="#Apartments">Apartments</a></li>
                        <li><a href="#HIW">How It Work</a></li>
                        <li><a href="#Agents">Agents</a></li>
                        <li className={s.contact}><a href="#Contact_popup" className={s.popup}>Contact Us</a></li>
                        <li><a href="#" className={s.popup}>Join Us</a></li>
                    </ul>
                    <span className={s.toggle} onClick={() => setMenuActive(!menuActive)}>☰</span>
            </nav>
        </header>
    )
}