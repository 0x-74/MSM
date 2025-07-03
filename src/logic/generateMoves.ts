import { pawnDirections } from "@/constants/moves";
import { Coords, Square, SquareInfo } from "@/constants/types";

export const generateFixedMoves = (coords: Coords,square : Square): [number, number][] | null => {
    const moves: [number, number][] = [];

    if (!square) return null;

        const { owner, type } = square;
        const { row, column } = coords;
        const forward = owner === 'black' ? 1 : -1;
    switch (type) {
        case 'P':

            for (const [dx, dy] of pawnDirections) {
                const newRow = row + dx * forward;
                const newCol = column + dy;

                moves.push([newRow, newCol]);
                }
            break;
        }

    return moves;
    };
