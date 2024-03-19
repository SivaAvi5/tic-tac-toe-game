import React, { useEffect, useState } from "react";
import "./style.css";

const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(16).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  const getWinner = (squares) => {
    const winningPattern = [
      [0, 1, 2, 3],
      [4, 5 ,6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [0, 5, 10, 15],
      [3, 6, 9, 12],
    ];
    for (let i = 0; i < winningPattern.length; i++) {
      const [w, x, y, z] = winningPattern[i];
      console.log(w,x,y,z)
      console.log(squares[x],squares[y],squares[z])
      if (
        squares[w] &&
        squares[w] === squares[x] && squares[w] === squares[y] && squares[w] === squares[z]
      ) {
        console.log('s',squares[y],y)
        return squares[w];
      }
      // console.log('h',squares[x]);
    }
    console.log('null')
    return null;
  };

  const handleRestart = () => {
    setIsXTurn(true);
    setSquares(Array(16).fill(""));
  };
  

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. please restart  the game`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  const handleClick = (getCurrentIndex) => {
    const cpySquares = [...squares];
    if (cpySquares[getCurrentIndex] || getWinner(cpySquares)) return;
    cpySquares[getCurrentIndex] = isXTurn ? "X" : "O";
    setSquares(cpySquares);
    setIsXTurn(!isXTurn);
  };
    console.log(squares);
    

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
        <Square value={squares[3]} onClick={() => handleClick(3)} />
      </div>
      <div className="row">
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
      </div>
      <div className="row">
        <Square value={squares[8]} onClick={() => handleClick(8)} />
        <Square value={squares[9]} onClick={() => handleClick(9)} />
        <Square value={squares[10]} onClick={() => handleClick(10)} />
        <Square value={squares[11]} onClick={() => handleClick(11)} />
      </div>
      <div className="row">
        <Square value={squares[12]} onClick={() => handleClick(12)} />
        <Square value={squares[13]} onClick={() => handleClick(13)} />
        <Square value={squares[14]} onClick={() => handleClick(14)} />
        <Square value={squares[15]} onClick={() => handleClick(15)} />
      </div>
      <div>
        <h1>{status}</h1>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

export default TicTacToe;
