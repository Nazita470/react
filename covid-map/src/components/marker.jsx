import { Marker } from "react-leaflet";
import { Pop} from "./Pop";
export function MarkerMio({Allcountries}) {
  

  const markers = Allcountries.map((country) => {
    return <Marker
     key={country.country} 
     position={[country.countryInfo.lat, country.countryInfo.long]}>
     <Pop country={country}></Pop>
     </Marker>
  })

  return markers
}

