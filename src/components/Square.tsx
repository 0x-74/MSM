import { SquareInfo } from "@/constants/types";
import Piece from "./Piece";

export const Square: React.FC<SquareInfo> = ({coords,square,selected,highlighted,onClick}) => {
  const color = selected ? 'bg-yellow-200' : highlighted? 'bg-orange-200':'bg-white';
    return(
        <div
        onClick={onClick} 
        className={`border border-gray-300 w-full h-full ${color} flex items-center justify-center cursor-pointer select-none`}
        >
        {
        square && <Piece type={square.type} owner={square.owner} isPromoted={square.isPromoted}/>
        }

        </div>
    )
}