import { Filters } from "./Filters"
import "../components_style/Header.css"
export function Header() {
    return (
        <header>
            <h1>Tienda</h1>
            <Filters />
        </header>
    )
}