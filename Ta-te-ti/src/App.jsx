import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './Components/Square'
import { TURN } from './const/constantes'
import { checkWinner, gameOver } from './funciones/funciones'

function App() {
  const [turn, setTurn] = useState(() => {
    const turnoStorage = window.localStorage.getItem("turno")
    if(turnoStorage) return turnoStorage
    return TURN.x
  })

  const [board, setBoard] = useState( () => {
    const boardStorage = window.localStorage.getItem("board")
    if(boardStorage) return JSON.parse(boardStorage) 
    return Array(9).fill(null)
  })
  const [winner, setWinner] = useState(null)

  const click = (index) => {
    const newTurn = turn == TURN.x ? TURN.o : TURN.x

    if(board[index] || winner ) return 
      
      let newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      setTurn(newTurn)
      window.localStorage.setItem("board", JSON.stringify(newBoard))
      window.localStorage.setItem("turno", newTurn)  

      let win = checkWinner(newBoard)
      console.log(win)
      
      if(win){
        confetti()
        setWinner(win)
      }else if(gameOver(newBoard)){
        setWinner(false)
      }
    
   


  }

  const resetGame = () => {
    setTurn(TURN.x)
    setBoard(Array(9).fill(null))
    setWinner(null)
  }



  return (    
    <main className='board'>
    <h1>Ta-te-ti</h1>
    <button onClick={resetGame}>Empezar de nuevo</button>
      <section className='game'>
       {
        board.map((_, index) => {
          return (
            <Square
              key = {index}
              index = {index}
              clickfunction= {click}
            >
              {board[index]}
            </Square>
          )
        })
       }
      </section>

      <section className='turn'>
        <Square isSelected={turn == "X"}>
          {TURN.x}
        </Square>
        <Square isSelected={turn == "O"}>
          {TURN.o}
        </Square>
      </section>

      {
        winner != null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner == false ? `Empate` : `Gano`
                }
              </h2>

              <header className='win'>
                  {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
      </section>
        )
      }
    </main>
      
  )
}

export default App
