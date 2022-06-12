import { useBoards } from "@src/context";

const BoardContainer = () => {
    const { boards, currentBoard, setCurrentBoard } = useBoards();

  return (
    <div className="flex-1 my-16 w-full">
        <h3 className="heading-sm ml-6 uppercase">All boards ({boards.length})</h3>
        <div className="mt-8">
            {
            boards.map((board, i) => (
                <h3
                key={i}
                onClick={() => setCurrentBoard(i)}
                className={`heading-m pl-6 w-11/12 transition duration-500 font-bold text-mediumGrey py-3 bg-opacity-0 bg-mainPurple rounded-r-full hover:bg-opacity-70 hover:text-white
                ${i === currentBoard && 'active-board'}`}
                >
                    {board.name}
                </h3>
                ))
            }
        </div>
    </div>
  )
}
export default BoardContainer
