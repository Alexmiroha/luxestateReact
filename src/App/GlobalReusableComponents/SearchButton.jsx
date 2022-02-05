import React, { useState } from 'react'
import s from "./style.module.css";


export const SearchButton = ({ placeholder, submitValue }) => {

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