import React, { useEffect, useState } from "react";
import Square from "./Square";

const TicTac = () => {
    const [tiles,setTiles] = useState(Array(9).fill(''))
    const [currentTile,setCurrentTile] = useState(true)
    const [status, setStatus] = useState("");

    const getWinner = (tiles) =>{
        const winningPatterns =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i = 0; i < winningPatterns.length; i++){
            const [x,y,z] = winningPatterns[i]
            console.log(x,y,z)
            if(tiles[x] && tiles[x] === tiles[y] && tiles[x] === tiles[z]){
                console.log('wiiner')
                return tiles[x]
                
            }
        }
        return null  
    }
    

    const handleClick = (getIndex) =>{
        const cpyTiles = [...tiles]
        if (cpyTiles[getIndex] || getWinner(tiles)) return;
        cpyTiles[getIndex] = (currentTile ? 'X':'O')
        setCurrentTile(!currentTile)
        setTiles(cpyTiles)
    }
    console.log(tiles)

    useEffect(() => {
        try{
        if (!getWinner(tiles) && tiles.every((item) => item !== "")) {
          setStatus(`This is a draw ! Please restart the game`);
        } else if (getWinner(tiles)) {
          setStatus(`Winner is ${getWinner(tiles)}. Please restart the game`);
        } else {
            
          setStatus(`Next player is ${currentTile ? "X" : "O"}`);
        
        }
    }catch(e){
        console.log(e)
    }

      }, [tiles, currentTile]);

      const handleRestart = () =>{
        setTiles(Array(9).fill(''))
        setCurrentTile(true)
      }

  return (
    <div className="board">
      <div className="row">
        <Square value={tiles[0]} handleClick = {() => handleClick(0)}/>
        <Square value={tiles[1]} handleClick = {() => handleClick(1)}/>
        <Square value={tiles[2]} handleClick = {() => handleClick(2)}/>
      </div>
      <div className="row">
        <Square value={tiles[3]} handleClick = {() => handleClick(3)}/>
        <Square value={tiles[4]} handleClick = {() => handleClick(4)}/>
        <Square value={tiles[5]} handleClick = {() => handleClick(5)}/>
      </div>
      <div className="row">
        <Square value={tiles[6]} handleClick = {() => handleClick(6)}/>
        <Square value={tiles[7]} handleClick = {() => handleClick(7)}/>
        <Square value={tiles[8]} handleClick = {() => handleClick(8)}/>
      </div>
      <div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

export default TicTac;
