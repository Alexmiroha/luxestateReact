import React from 'react';
import s from "./AgentCard.module.css";
import image from '../../../img/man.jpeg'
import sprite from '../../../img/sprite.svg'

const AgentCard = () => {

    const changeEvent = event => {
        event.preventDefault();
    }

    return (
        <div className={s.agent_card}>
            <img src={image} alt=""/>
            <div className={s.agent_info}>
                <p>Agent</p>
                <div className={s.agent_block}>
                    <p className={s.agent_name}>
                        Mr. Luke Skywalker
                    </p>
                    <div className={s.social}>
                        <a href="https://www.instagram.com/a1exm1roha_dev/" target="_blank">
                            <svg className={`${s.icon} ${s.social_icon}`} width="18" height="18">
                                <use href={`${sprite}#twitter-brands`}/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/a1exm1roha_dev/" target="_blank">
                            <svg className={`${s.icon} ${s.social_icon}`} width="18" height="18">
                                <use href={`${sprite}#facebook-brands`}/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/a1exm1roha_dev/" target="_blank">
                            <svg className={`${s.icon} ${s.social_icon}`} width="18" height="18">
                                <use href={`${sprite}#instagram-brands`}/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
)
};

export default AgentCard;
