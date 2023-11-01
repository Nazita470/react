import { COMBOS_WINNER } from "../const/constantes"

export const checkWinner = (boardToCheck) => {
    for(const combo of COMBOS_WINNER){
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] ==  boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }

    return null
  }

export  const gameOver = (boardToCheck) => {
    return boardToCheck.every((item) => item != null)
  }
