import React, {useState} from 'react'
import s from './Header.module.css'



export const Header = ({ setModalOpen }) => {

    const [menuActive, setMenuActive] = useState(false);

    return (
        <header className={s.header} id='header'>
            <nav>
                <ul id='menu' className={menuActive ? `${s.menu} ${s.active}` : `${s.menu} ${s.touch}`}>
                        <li>
                            <a href="#" className={s.logo}>luxestate</a>
                        </li>
                        <li className={s.about}>
                            <a href="#stats">About</a>
                        </li>
                        <li>
                            <a href="#Apartments">Apartments</a>
                        </li>
                        <li>
                            <a href="#HIW">How It Work</a>
                        </li>
                        <li>
                            <a href="#Agents">Agents</a>
                        </li>
                        <li className={s.contact}>
                            <a
                                className={s.modal}
                                onClick={() => {setModalOpen(true)}}
                            >Contact Us</a>
                        </li>
                        <li>
                            <a href="#" className={s.popup}>Join Us</a>
                        </li>
                    </ul>
                    <span className={s.toggle} onClick={() => setMenuActive(!menuActive)}>☰</span>
            </nav>
        </header>
    )
}