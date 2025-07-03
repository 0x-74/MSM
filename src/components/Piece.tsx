//Provides a Piece Component 
import React from "react";
import { PieceProps, pieceSymbols, PieceType, promotableTypes, promotedSymbols } from "@/constants/types";

const Piece: React.FC<PieceProps> = ({ type, owner, isPromoted }) => {
  const isActuallyPromoted = isPromoted && promotableTypes.includes(type);
  const symbol = isActuallyPromoted ? promotedSymbols[type]! : pieceSymbols[type];
  const textColor = isActuallyPromoted ? 'text-red-600' : 'text-black';
  const rotation = owner === 'white' ? 'rotate-180' : '';

  return (
    <div
      className={`flex h-0 w-0 items-center justify-center text-xl font-bold ${textColor} ${rotation}`}
    >
      {symbol}
    </div>
  );
};

export default Piece;
