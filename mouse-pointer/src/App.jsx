import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activate, setActivate] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    const handleClick = (evento) => {
      const { clientX, clientY } = evento
      setPosition({ x: clientX, y: clientY })
        console.log(clientX)
    }

    if(activate){
      window.addEventListener("pointermove", handleClick)
    } 

    return () => {
      window.removeEventListener("pointermove", handleClick)
    }

  }, [activate])

  useEffect(() => {
     document.body.classList.toggle('no-cursor', activate)

    return () => {
      document.body.classList.remove('no-cursor')
    }

  }, [activate])

  return (
    <main>
      <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
      }} ></div>

      <button onClick={ () => setActivate(!activate)}> {activate ? `Desactivar` : `Activar`} seguidor</button>
    </main>
  )
}

export default App
