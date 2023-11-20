export function ClimaInfo({precipitacion, humedad, viento}) {
    return (
       <>
            <p className="infoClima_text">Prob de precipitacion: {precipitacion}</p>
            <p className="infoClima_text">Humedad: {humedad}</p>
            <p className="infoClima_text">Viento: {viento}</p>
       </>
    )
}