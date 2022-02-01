import React from 'react'
import s from "./style.module.css";

export const SearchButton = () => {
    return (
        <div className={s.search_button}>
            <form action="">
                <label>
                    <input type="text" placeholder="Search Locations"/>
                </label>
                <input type="submit" value="search"/>
            </form>
        </div>
    )
}