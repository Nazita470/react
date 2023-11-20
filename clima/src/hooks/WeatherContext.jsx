import { createContext, useEffect, useState } from "react"
import result from "../assets/results/result.json"
export const WeatherContext = createContext()

export function WeatherProvider({children}) {
    const [weather, setWeather] = useState({})
    const [weatherCurrent, setWeatherCurrent] = useState({})
    const [search , setSearch] = useState("Santiago del Estero")

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=751d397506d54c9cbd794817231811&q=${search}&days=1&aqi=no&alerts=no`)
        .then(result => result.json())
        .then(json => {
            setWeather(json)
            setWeatherCurrent(
                json.current
            )
        } )

    }, [search])

    console.log(weather)

    const changeHour = (hora) => {
       
        const hourArr = weather.forecast.forecastday[0].hour[hora]
        setWeatherCurrent(hourArr)
    }

    const changeLocalTime = () => {
        setWeatherCurrent(weather.current)
    }

    const changeSearch = (busqueda) => {
        setSearch(busqueda)
    }   
    
    return (
       <WeatherContext.Provider value={{weather, weatherCurrent, changeHour, changeLocalTime, changeSearch}}>
       
       {children}
       </ WeatherContext.Provider>
    )
}