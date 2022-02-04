import React from 'react';
import s from "./AgentCard.module.css";

const AgentCard = () => {
    return (
        <div className={s.agent_card}>
            <img src="./src/img/man.jpeg" alt=""/>
            <div className={s.agent_info}>
                <p>Agent</p>
                <div className={s.agent_block}>
                    <p className={s.agent_name}>
                        Mr. Luke Skywalker
                    </p>
                    <div className={s.social}>
                        <a href="">
                            <svg className={`${s.icon} ${s.social_icon}`} width="18" height="18">
                                <use href="./src/img/sprite.svg#twitter-brands"></use>
                            </svg>
                        </a>
                        <a href="">
                            <svg className={`${s.icon} ${s.social_icon}`} width="18" height="18">
                                <use href="./src/img/sprite.svg#facebook-brands"></use>
                            </svg>
                        </a>
                        <a href="">
                            <svg className={`${s.icon} ${s.social_icon}`} width="18" height="18">
                                <use href="./src/img/sprite.svg#instagram-brands"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
)
};

export default AgentCard;
