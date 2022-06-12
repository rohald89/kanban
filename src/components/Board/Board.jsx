import { useBoards } from "@src/context";
import EmptyBoard from "./EmptyBoard";

const Board = () => {
  const {boards, currentBoard} = useBoards();

  return (
    <main className="bg-lightGrey dark:bg-veryDarkGrey">
        {boards[currentBoard].columns.length === 0 && <EmptyBoard />}
    </main>
  )
}
export default Board
