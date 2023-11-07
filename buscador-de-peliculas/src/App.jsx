import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import { NoResults, ListMovies} from './components/ListMovies'
import whit_result from'./results/result.json'
import { useMovies } from './hooks/useMovies'
import debounce from "just-debounce-it"

function App() {

  const [error, setError] = useState(null)
  const [text, setText] = useState()
  const [sort, setSort] = useState(false)
  const {sortMovies, getMovies} = useMovies(text, sort)
  const hasMovies = sortMovies?.length > 0

  const debounce_getMovies = useCallback(
    debounce(search => {
      getMovies(search)
    }, 300)
  , [])
 

  const handleSubmit = (evt) => {
    evt.preventDefault()
    getMovies(text)
  }

  const handleChange = (evt) => {
    let texto = evt.target.value
    setText(texto)

    debounce_getMovies(texto)

    if(texto === ' ') {
      evt.target.value = ""
    }

    else if(texto.length == 0){
      setError("Ingrese una pelicula")
    } else if(texto.length <= 2){
      setError("Ingrese una pelicula con mas de 2 letras")
    }
     else { 
      setError(null)
    }
    
  }

  const handleCheck = () => {
  
    setSort(!sort)
  }
 
  return (
    <div>
       <header>
          <h1>Buscador de peliculas</h1>
          <form action="" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder='Capitan America, Ironman' />
            <input onChange={handleCheck} type="checkbox" on style={{width: "20px", height: "20px"}} />
            <button>Buscar</button>
          </form>  

          {
            error 
            ? <p style={{color: "red"}}>{error}</p>
            : <p></p>
          }
       </header>

       <main>     
        {
           hasMovies ? <ListMovies movies={sortMovies} /> : <NoResults />
        }
        
       </main>
    </div>
  )
}

export default App
