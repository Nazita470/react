import { useState } from 'react'
import './App.css'
import { setRandomFact } from './hook/setRandomFact.js'
import { setImageUrl } from './hook/setImageUrl.js'
 


function App() {
  const [reiniciar, setReiniciar] = useState(false);
  const { fact } = setRandomFact({reiniciar})
  const { img } = setImageUrl({fact})

  return (
    <main>
     <h1>Recuperar datos</h1>
      {fact && <p>{fact}</p>}
      <button onClick={() => setReiniciar(!reiniciar)}>Reinicar</button>
      {img && <img src={img} alt="imagen extraida de la api de gatos" />}
    </main>
  )
}

export default App
