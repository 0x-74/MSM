'use client'
//The main rendering Component of the board
import { BoardProps, Coords, PieceProps, Square as Squareprop} from "@/constants/types"
import { useState } from "react"
import { Square } from "./Square";
import { generateFixedMoves } from "@/logic/generateMoves";

const Board: React.FC<BoardProps> = ({ board }) => {
  const [selectedSquare, setSelectedSquare] = useState<Coords | null>(null);
  const [validMoves,setValidMoves] = useState<[number,number][] | null>(null);
  const isHighlighted = (row: number, col: number): boolean => {
  return validMoves?.some(([r, c]) => r === row && c === col) ?? false;
};
const isSameCoords = (a: Coords | null, b: Coords): boolean => {
  return a?.row === b.row && a?.column === b.column;
};


const handleSquareClick = (coords: Coords, piece: Squareprop) => {
  const isSameSquare = isSameCoords(selectedSquare, coords);
  const newSelected = isSameSquare ? null : coords;
  setSelectedSquare(newSelected);

  if (!isSameSquare) {
    setValidMoves(generateFixedMoves(coords, piece));
  } else {
    setValidMoves(null);
  }
};

  return (
    <div className="grid grid-cols-5 gap-1 max-w-[300px] max-h-[300px] w-200 h-200">
      {board.map((row, rowidx) =>
        row.map((square, colidx) => (
          <Square
            key={`${rowidx}-${colidx}`}
            coords={{ row: rowidx, column: colidx }}
            square={square}
            selected={isSameCoords(selectedSquare,{row:rowidx,column:colidx})}
            highlighted = {isHighlighted(rowidx,colidx)}
            onClick={() =>handleSquareClick({ row: rowidx, column: colidx },square)}
          />
        ))
      )}
    </div>
  );
};

export default Board