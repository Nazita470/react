import { useState, useEffect } from "react";


const api_fact_URL = 'https://catfact.ninja/fact'

export function setRandomFact({reiniciar}){
    
    const [fact, setFact] = useState();
    useEffect( 
      () => {
        fetch(api_fact_URL)
        .then( (result) => result.json())
        .then( (json) => {
          setFact(json.fact)
        })
        
      } 
      , [reiniciar])
      return { fact }
  }