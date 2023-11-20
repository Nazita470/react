import { useState } from "react"

export  function useCountries() {
    const [countries, setCountries] = useState([])

    async function searchCountries() {
        try{
            const res = await  fetch("https://disease.sh/v3/covid-19/countries")
            const json = await res.json()
            setCountries(json)
        }catch(err){
            console.log(err)
        }
       
    }
   

    return {countries, searchCountries}
}

  
    
