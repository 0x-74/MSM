// main page for playing shogi
'use client'
import Board from "@/components/Board";
import { useState } from "react";
import { Board as BoardType } from "@/constants/types";
import { initialBoard } from "@/logic/setup";
export default function Home() {
  const [board,setBoard] = useState<BoardType>(initialBoard)
  return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <Board board = {board}/>
      </main>
  );
}
