import React, { useState } from 'react'
import s from "./style.module.css";
import icon from "../img/search.png";


export const SearchButton = ({ placeholder, submitValue, icon_active }) => {

    const [search, setSearch] = useState('')

    return (
        <div className={s.search_button}>
            <form action="">
                <label>
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={search}
                        onChange={event => setSearch(event.target.value)}
                        style={icon_active && {backgroundImage: `url(${icon})`}}
                    />
                </label>
                <input
                    type="button"
                    value={submitValue}
                    onClick={ () => {

                    }}
                />
            </form>
        </div>
    )
}