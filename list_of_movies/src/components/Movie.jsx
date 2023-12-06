import {useNavigate } from "react-router"
import "./Movies.css"
export function Movie({peli}) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/view/${peli.id}`)
    }
    return (
        <button className="boton_pelicula" onClick={handleClick}>
            {
                peli.img ? <img height={300} width={200} src={peli.img} alt="Portada" /> 
                : <div style={{width: "200px", height: "300px"}}>Sin portada</div>

            }
            
            <p>{peli.title}</p>
        </button>
    )
    
}