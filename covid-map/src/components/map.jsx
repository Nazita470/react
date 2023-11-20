import { MapContainer, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { MarkerMio } from "./marker"
import { useCountries } from "../logic/useCountries"
import { useEffect } from "react"

const position = [51.505, -0.09]
  

export  function Mapa() {
    const {countries, searchCountries} = useCountries()

    useEffect(() => {
        searchCountries()
    }, [])
    
   
    return (
        <MapContainer center={position} zoom={3} scrollWheelZoom={true} style={{height: "100vh"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerMio Allcountries={countries}></MarkerMio>
     
        </MapContainer>
    )
}
