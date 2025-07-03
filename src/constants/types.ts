//Types

export type PieceType = 'K' | 'G' | 'S' | 'B' | 'R' | 'P';

export type Square = PieceProps | null;
export type Board = Square[][];

export type Coords = {
  row: number;
  column: number;
};

//Constants

export const promotableTypes: PieceType[] = ['S', 'B', 'R', 'P'];
export const fixedMoveTypes : PieceType[] = ['K',]

export const pieceSymbols: Record<PieceType, string> = {
  K: '王',
  G: '金',
  S: '銀',
  B: '角',
  R: '飛',
  P: '歩',
};

export const promotedSymbols: Partial<Record<PieceType, string>> = {
  S: '全',
  B: '馬',
  R: '龍',
  P: 'と',
};

//Interfaces

export interface PieceProps {
  type: PieceType;
  owner: 'black' | 'white';
  isPromoted: boolean;
}

export interface BoardProps {
  board: Board;
}

export interface SquareInfo {
  coords: Coords;
  square: Square;
  selected: boolean;
  highlighted : boolean;
  onClick?: () => void;
}
