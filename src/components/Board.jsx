import React, { useState } from 'react';
import Square from './Square';

// Handles the overall board!
const Board = ({ board, handleSquareEvent, winningSquare }) => {
  // Updating the position whenever it's clicked
  const updateSquare = position => {
    const isWinningSquare = winningSquare.includes(position);
    return (
      <Square
        // Props value to the Square
        value={board[position]} // Where the square is located?
        onClick={() => handleSquareEvent(position)} // What occurs when the square is clicked?
        isWinningSquare={isWinningSquare}
      />
    );
  };

  return (
    // The board itself! 3 rows, 3 columns
    <div className="board">
      <div className="board-row">
        {updateSquare(0)}
        {updateSquare(1)}
        {updateSquare(2)}
      </div>

      <div className="board-row">
        {updateSquare(3)}
        {updateSquare(4)}
        {updateSquare(5)}
      </div>

      <div className="board-row">
        {updateSquare(6)}
        {updateSquare(7)}
        {updateSquare(8)}
      </div>
    </div>
  );
};

export default Board;
