import { Popup } from "react-leaflet";

export function Pop({country}) {
    let casos = country.cases
    let muertes = country.deaths
    let muertes_grandes = muertes > 10000
    return  <Popup>
               <div>
                    <h1>{country.country}</h1>
                    <p>Casos: <span>{casos}</span></p>
                    <p>Muertes <span style={{color: muertes_grandes ? "red": "black"}}>{country.deaths}</span></p>
               </div>
            </Popup>
}