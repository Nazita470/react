import { useEffect } from "react"

export function SearchPage({routeParams}) {
    useEffect(() => {
        document.title = `Haz buscado ${routeParams.query}`
    }, []) 
    return <h1>Buscador {routeParams.query} </h1>
}