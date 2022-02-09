import React from 'react'
import {Intro} from "./IntroComponent/Intro";
import {Stats} from "./StatsComponent/Stats";
import {Apartments} from "./ApartmentsComponent/Apartments";
import {Steps} from "./StepsComponent/Steps";
import {Services} from "./ServicesComponent/Services";
import {Agents} from "./AgentsComponent/Agents";
import {Add} from "./AddComponent/Add";

export const Main = () => {
    return (
        <main>
            <Intro/>
            <Stats/>
            <Apartments/>
            <Steps/>
            <Services/>
            <Agents/>
            <Add/>
        </main>
    )
}