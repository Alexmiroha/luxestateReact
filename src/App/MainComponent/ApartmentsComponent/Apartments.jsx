import React from 'react'
import s from './Apartments.module.css'
import {SearchButton} from "../../GlobalReusableComponents/SearchButton";
import Card from "./Card";

export const Apartments = () => {
    return (
        <section className={s.rent} id="Apartments">
            <div className={`wrapper ${s.apart}`}>
                <h2>More Then 500+ <br/> Apartments For Rent</h2>
                <div className={s.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className={s.search_button}>
                    <SearchButton/>
                    <button className={s.all_ap}>View All Apartments</button>
                </div>
            </div>
        </section>
    )
}