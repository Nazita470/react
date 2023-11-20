import { Link } from "./Links"

export function HomePage() {
    return (
      <>
        <h1>Home Page</h1>
        <p>Pagina de prueba</p>
        <Link to="/about">Ir a sobre nosotros</Link>
      </>
    )
  }