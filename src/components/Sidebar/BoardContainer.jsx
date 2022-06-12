import { useBoards } from "@src/context";
import Image from "next/image";

const BoardContainer = () => {
    const { boards, currentBoard, setActiveBoard } = useBoards();

    console.log(boards[0].name)
    console.log(currentBoard.name)
  return (
    <div className="flex-1 my-16 w-full">
        <h3 className="heading-sm ml-6 uppercase">All boards ({boards.length})</h3>
        <div className="mt-8">
            {
            boards.map((board, i) => (
                <div key={i} className={`group cursor-pointer flex space-x-3 items-center pl-6 w-11/12 transition duration-500 bg-opacity-0 bg-mainPurple dark:hover:bg-white rounded-r-full hover:bg-opacity-10 ${currentBoard.name === boards[i].name && 'active-board'}`}>
                    <Image src="/icon-board.svg" alt="board" height={16} width={16} />
                    <h3
                    key={i}
                    onClick={() => setActiveBoard(i)}
                    className={`heading-m  font-bold text-mediumGrey py-3 group-hover:text-mainPurple ${currentBoard.name === boards[i].name && 'active-board'}`}
                    >
                        {board.name}
                    </h3>
                </div>
                ))
            }
             <div className={`group cursor-pointer flex space-x-3 items-center pl-6 w-11/12 transition duration-500 bg-opacity-0 bg-mainPurple rounded-r-full hover:bg-opacity-70`}>
                    <Image src="/icon-board.svg" alt="board" height={16} width={16} />
                    <h3 className={`heading-m font-bold text-mainPurple py-3 group-hover:text-white`}>
                        + Create New Board
                    </h3>
                </div>
        </div>
    </div>
  )
}
export default BoardContainer
