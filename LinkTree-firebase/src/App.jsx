import { useNavigate } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("./login")
  }, [])


  return (
    <>
      <div>{import.meta.env.VITE_SALUDO}</div>
    </>
  )
}

export default App
