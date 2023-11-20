import { useCallback, useContext, useState } from "react"
import "../components.style/Header.css"
import { WeatherContext } from "../../hooks/WeatherContext"
import debounce from "just-debounce-it"

export function Header() {
    const {changeSearch} = useContext(WeatherContext)

    const debounce_changeSearch = useCallback(
        debounce((busqueda) => {
            changeSearch(busqueda)
        }, 300)
   , [])

    const handleChange = (evt) => {
        debounce_changeSearch(evt.target.value)
    }
    return (
        <header>
            <h1>Clima</h1>
            <input onChange={handleChange} type="search" placeholder="Buscar ciudad" id="searchInput" />
        </header>   
    )
    
   
}