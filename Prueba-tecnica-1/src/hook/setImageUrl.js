import { useState, useEffect } from "react";

export function setImageUrl({fact}) {
    const [img, setImg] = useState();
    useEffect(() => {
        if(!fact) return 
        
        const threeWords = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeWords}?fontSize=50&fontColor=red`)
        .then( (result) => setImg(result.url))
       
      },[fact])
      console.log(img)
      return { img }
  
}