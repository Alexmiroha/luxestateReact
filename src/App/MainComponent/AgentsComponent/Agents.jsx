import React from 'react'
import s from './Agents.module.css'
import AgentCard from "./AgentComponent/AgentCard";

export const Agents = () => {
    return (
        <section className={s.agents} id="Agents">
            <div className="wrapper">
                <h2>Meet Our Agents</h2>
                <p className={s.agents_info}>In this space market-facing, yet UI work flows , or bake it in. <br/> Red
                    flag we need a
                    recap by eod, cob or whatever comes <br/> first agile at the end of the day. </p>
                <div className={s.agent_cards}>
                    <AgentCard />
                    <AgentCard />
                    <AgentCard />
                </div>
            </div>
        </section>
    )
}