import React from 'react'
import s from "./style.module.css";


export const SearchButton = ({ placeholder, submitValue }) => {

    return (
        <div className={s.search_button}>
            <form action="">
                <label>
                    <input type="text" placeholder={placeholder}/>
                </label>
                <input type="submit" value={submitValue}/>
            </form>
        </div>
    )
}