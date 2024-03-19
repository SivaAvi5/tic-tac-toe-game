import React, { useEffect, useState } from "react";
import Square from "./Square";
import './style2.css'

const TicTacToe2 = () => {
    const [tiles,setTiles] = useState(Array(9).fill(''))
    const [currentTile,setCurrentTile] = useState(true)
    const [status,setStatus] = useState('')

    function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  }

  useEffect(() => {
    if (!getWinner(tiles) && tiles.every((item) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (getWinner(tiles)) {
      setStatus(`Winner is ${getWinner(tiles)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${currentTile ? "X" : "O"}`);
    }
  }, [tiles, currentTile]);
    

    const handleClick = (getIndex) =>{
        const cpyTiles = [...tiles]
        if(cpyTiles[getIndex] || getWinner(cpyTiles)) return;
        cpyTiles[getIndex] = currentTile ? 'X':'O'
        setCurrentTile(!currentTile)
        setTiles(cpyTiles)
    }
    // console.log(tiles)
  return (
    <div className="board">
      <div className="row">
        <Square value = {tiles[0]} handleClick = {() => handleClick(0)}/>
        <Square value = {tiles[1]} handleClick = {() => handleClick(1)}/>
        <Square value = {tiles[2]} handleClick = {() => handleClick(2)}/>
      </div>
      <div className="row">
        <Square value = {tiles[3]} handleClick = {() => handleClick(3)}/>
        <Square value = {tiles[4]} handleClick = {() => handleClick(4)}/>
        <Square value = {tiles[5]} handleClick = {() => handleClick(5)}/>
      </div>
      <div className="row">
        <Square value = {tiles[6]} handleClick = {() => handleClick(6)}/>
        <Square value = {tiles[7]} handleClick = {() => handleClick(7)}/>
        <Square value = {tiles[8]} handleClick = {() => handleClick(8)}/>
      </div>
      <h1>{status}</h1>
    </div>
  );
};

export default TicTacToe2;
