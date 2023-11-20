import './App.css'
import { Router } from './components/Router'
import { roots } from "./rutas/rutas"


function App() {
 return (
    <main>
      <Router router={roots}/>
    </main>
  )
}

export default App
