import React,{useState,useEffect} from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe';
import {calculateWinner} from './helpers';

function App() {
  const [xCurrentUser, setXCurrentUser] = useState(true);
  const [squares,setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);

  const onClick = (i) => {
    const squaresCopy = [...squares];
    if(winner || squaresCopy[i]) return;
    squaresCopy[i] = xCurrentUser ? "X" : "O";
    setSquares(squaresCopy);
    setXCurrentUser(!xCurrentUser);
  }

  const newGame = () =>{
    setSquares(Array(9).fill(null));
    setXCurrentUser(true);
  }

  return (
    <div className="App">
      <h1>TIC TAC TOE</h1>
      <p>{winner && "WINNER: " + winner+"!"}</p>
      <TicTacToe squares={squares} onClick={onClick}/>  
      <button onClick={newGame}> New Game </button>
    </div>
  );
}

export default App;
