const Board = () => {
    return(
        <div className="grid grid-cols-5 w-[400px] h-[400px]">
        {[...Array(25)].map((_,i) =>(
            <div key={i} className="border border-gray-300">
                </div>
        ))}
        </div>
    )
}
export default Board