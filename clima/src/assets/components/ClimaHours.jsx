import { useContext } from "react"
import { WeatherContext } from "../../hooks/WeatherContext"

export function ClimaHour() {

    const {changeHour} = useContext(WeatherContext)

    const handleClick = (evt) => {
        const id=evt.target.getAttribute("id")
        changeHour(parseInt(id))
    }

    return (
        <>
            <button onClick={handleClick} id={1} className="boton_hour">2:00</button>
            <button onClick={handleClick} id={4} className="boton_hour">5:00</button>
            <button onClick={handleClick} id={7} className="boton_hour">8:00</button>
            <button onClick={handleClick} id={10} className="boton_hour">11:00</button>
            <button onClick={handleClick} id={13} className="boton_hour">14:00</button>
            <button onClick={handleClick} id={16} className="boton_hour">17:00</button>
            <button onClick={handleClick} id={19} className="boton_hour">20:00</button>
            <button onClick={handleClick} id={22} className="boton_hour">23:00</button>
        </>

    )
}