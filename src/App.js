import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleGamePlay = (currentSquare) => {
    board[currentSquare]="🌴"
    setBoard([...board])
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
      {board.map((square, index)=>{
        return <Square square={square} 
        index={index} 
        handleGamePlay={handleGamePlay} />
      })}
      </div>
    </>
  )
}

export default App
