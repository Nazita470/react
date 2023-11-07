
export function ListMovies ( movies ) {
  let lista = movies.movies
    return (
      <ul className='movies'>
        {
      
          lista.map(movie => (
            <li className='movie' key={movie.imdbID}>
              <h3 className="movie-title">{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.title} />
            </li>
          ))

    
        }
      </ul>
    )
  }

 export function NoResults(){
    return (
        <p style={{textAlign: "center", color: "white"}}>No se encontraron resultados</p>
    )
  }