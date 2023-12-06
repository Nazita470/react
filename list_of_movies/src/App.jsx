import { useContext, useEffect } from 'react'
import {Header} from "./components/Header"
import {MoviesContext, MoviesProvider} from "./context/moviesContext"
import style from "./App.module.css"
import { Movie } from './components/Movie'

function App() {
  const {movies} = useContext(MoviesContext);
 
  return (
     <Header>
      <main className={style.main}>
        <div className={style.movieContainer}>
          {
            movies.length != 0 ?
              movies.map(e => (
                <Movie key={e.title} peli={e}/>
              ))
            :
            <p 
            style={{color: "white", textAlign: "center", fontSize: "25px", paddingTop: "50px"}}>
            No hay peliculas</p>
          }
        </div>
      </main>

     </Header>
  )
}

export default App
