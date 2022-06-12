import { useBoards } from "@src/context";
import Column from "./Column";
import EmptyBoard from "./EmptyBoard";

const Board = () => {
  const {currentBoard} = useBoards();

  if(!currentBoard.columns.length) return <EmptyBoard />

  return (
    <main className="p-4 space-x-4 overflow-scroll bg-lightGrey dark:bg-veryDarkGrey flex">
        {
            currentBoard.columns.map((column, i) => (
                <Column data={column} key={i}/>
            ))
        }
    </main>
  )
}
export default Board
