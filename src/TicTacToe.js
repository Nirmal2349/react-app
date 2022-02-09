import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { GameBox } from "./GameBox";

export function TicTacToe() {

  const [board, setBoard] =
    // useState[0,1,2,3,4,5,6,7,8]
    useState([null, null, null, null, null, null, null, null, null,]);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // if winning condition present in board then we have a winner
    for (let i = 0; i < lines.length; i++) {

      const [a, b, c] = lines[i];

      console.log(a, b, c);
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {

        console.log("winner is", board[a]);
        return board[a];
      }
      // else{
      //  return board("Game Draw")
      // }
    }
    return null;

  };
  const winner = decideWinner(board);
  const [isXturn, setIsXTurn] = useState(true);

  const handleClick = (index) => {

    // copy the board and replace with "x" in the clicked gamebox
    // update only untouched boxes  &  untill no winner
    if (winner === null && board[index] === null) {
      const boardCopy = [...board];

      console.log(boardCopy, index);

      boardCopy[index] = isXturn ? "X" : "O";

      setBoard(boardCopy);

      setIsXTurn(!isXturn);
    }

  };

  const { width, height } = useWindowSize();

  return (
    <div className="full-game">
      {winner ? <Confetti width={width} height={height} /> : ""}
      <div className="board">
        {/* <h1>Game on!!!</h1> */}
        {/* we use map for the looping */}
        {/* parent componentt => child component (data has to be passed) => props */}
        {board.map((val, index) => (
          <GameBox val={val}
            onPlayerClick={() => handleClick(index)} />
        ))}

      </div>
      {winner ? <h2>Winner is :{winner}</h2> : ""}<br/>


      <button onClick={() => {
        setBoard([null, null, null, null, null, null, null, null, null,]);
        setIsXTurn(true);
      }}
      > Restart </button>
    </div>
  );
}
