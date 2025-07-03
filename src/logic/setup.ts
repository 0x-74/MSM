// Gives a Board with the Initial Positions set

import { Board } from "@/constants/types";

export const initialBoard: Board = [
  [
    { type: "R", owner: "white", isPromoted: false },
    { type: "B", owner: "white", isPromoted: false },
    { type: "S", owner: "white", isPromoted: false },
    { type: "G", owner: "white", isPromoted: false },
    { type: "K", owner: "white", isPromoted: false },
    
  ],
  [null, null, null, null, { type: "P", owner: "white", isPromoted: false }],
  [
    null,
    null,
    null,
    null,
    null,
  ],
  [
    { type: "P", owner: "black", isPromoted: false },
    null,
    null,
    null,
    null,
  ],
  [
    { type: "K", owner: "black", isPromoted: false },
    { type: "G", owner: "black", isPromoted: false },
    { type: "S", owner: "black", isPromoted: false },
    { type: "B", owner: "black", isPromoted: false },
    { type: "R", owner: "black", isPromoted: false },
  ],
];
