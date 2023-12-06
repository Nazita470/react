import { createContext, useContext, useEffect, useState } from "react";

export const MoviesContext = createContext({
    movies: [],
    agregarPeli: (peli) => {}
})

export function MoviesProvider({children}){
    const [movies, setMovies] = useState([])

    function agregarPeli(peli) {
        const temp = [...movies]
        temp.push(peli)

        setMovies(temp)
        console.log(movies)
    }

    function getMovie(id) {
        const movie = movies.find((e) => e.id == id)
        return movie
    }

    return(
        <MoviesContext.Provider value= {{
            movies,
            agregarPeli,
            getMovie
        }}
        >
            {children}
        </MoviesContext.Provider>
    )
}
