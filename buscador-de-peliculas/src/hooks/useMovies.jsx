import { useRef, useState, useMemo } from "react"


export function useMovies(search, sort) {
    const [movies, setMovies] = useState([])
    let previusSearch = useRef(search)


    

    const getMovies = async (search) => {
        if(previusSearch.current == search) return
        if(search == null) return

        const api_key = "91dacbfa"

        try{
            const result = await fetch(`https://www.omdbapi.com/?apikey=${api_key}&s=${search}`)
            const json = await result.json()
            setMovies(json.Search)
        }catch(evt){
            console.log(evt)
        }
       

        previusSearch.current = search
    }

  
    

    let sortMovies = useMemo(() => {
        if(sort) {
            console.log("render order")
           return [...movies].sort((a,b) => {return a.Title.localeCompare(b.Title)})
        }else {
           return movies
        }
    }, [sort, movies])

    return {sortMovies, getMovies}
}