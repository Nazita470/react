import "../components.style/Main.css"
import { ClimaHour } from "./ClimaHours"
import { ClimaGrades } from "./ClimaGrades"
import { ClimaDate } from "./ClimaDate"
import { ClimaInfo } from "./ClimaInfo"
import { useCallback, useContext } from "react"
import { WeatherContext } from "../../hooks/WeatherContext"

export function Main() {
const {weather, weatherCurrent, changeLocalTime} = useContext(WeatherContext)

   
    if(weather.error) {
        return(
            <div>No se encontraron resultados</div>
        )
    }

    if(weather.current == undefined) {
        return(
            <div>Loading</div>
        )
    }

   

    const {location} = weather



    const { temp_c, condition, humidity, precip_in, wind_kph, time } = weatherCurrent
    const realTime = time ? time : location.localtime
    console.log(typeof realTime)
    const icon = condition.icon
    

    return (
            <main>
               <div className="clima_img">
                    <header onClick={changeLocalTime}>
                        <ClimaGrades grades={temp_c} url={icon}/>  
                        <ClimaDate date={realTime} place={location.name + ", " + location.country}/>
                    </header>

                    <aside className="clima_img_info">
                        <ClimaInfo precipitacion={precip_in} humedad={humidity} viento={wind_kph}/>
                    </aside>

                    <main style={{alignItems: "end", paddingBottom: "20px", width: "100%",  justifyContent: "space-between"}}>
                        <ClimaHour />
                        
                    </main>
                  
               </div>

              
            </main>
    )
}