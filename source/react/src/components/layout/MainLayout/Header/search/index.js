import {useEffect, useState} from "react";

export default function Search() {

    let [mobileSearchClass,changeClass] = useState('')

    // mobile search
    useEffect(()=>{
        document.querySelector('#button-mobile-search').addEventListener('click', () => {
            changeClass('visible')
        })

        document.querySelector('#button-back').addEventListener('click', () => {
            changeClass('')
        })
    },[])

    return (
        <div className={`center ${mobileSearchClass}`}>
            <div className="search">
                <button id="button-back" className="icon">
                    <span className="_icon-leftBottom"></span>
                </button>
                <div className="search-bar">
                    <label htmlFor="search-field"></label>
                    <input className="search-field" placeholder="Search" id="search-field"/>
                    <button className="search-button icon">
                        <span className="_icon-search"></span>
                    </button>
                </div>
                <button className="button-search-micro icon">
                    <span className="_icon-mic"></span>
                </button>
            </div>
        </div>
    )
}