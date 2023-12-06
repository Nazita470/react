import { Link } from "react-router-dom"
import "./Header.css"
export function Header({children}) {
    return(
        <section className="container">
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/create">Agregar</Link></li>
                </ul>
            </nav>
        </header>

        <div className="children">
            {children}
        </div>
        </section>
    )
}