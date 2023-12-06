import { useCallback, useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { MoviesContext } from "../context/moviesContext"
import style from "./MovieView.module.css"

export function MovieView() {
    const params = useParams()
    const { getMovie } = useContext(MoviesContext)
    const [currenMovie, setCurrentMovie] = useState({})
    
    useEffect(() => {
        const e = getMovie(params.movie)
        setCurrentMovie(e)
    }, [params])
    return(
       <main style={{height: "100vh", display: "flex", justifyContent: "center", paddingTop: "100px", gap:"100px"}}>
            <div>
                <img style={{objectFit: "cover"}} height={300} width={200} src={currenMovie.img} alt="Portada" />
            </div>

            <div>
                <h1>{currenMovie.title}</h1>
                <h2>{currenMovie.autor}</h2>
                <p>{currenMovie.intro}</p>
                <p>{currenMovie.review}</p>
            </div>
           
       </main>
    )
}