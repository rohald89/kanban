import {DragDropContext} from 'react-beautiful-dnd';
import { useBoards } from "@src/context";
import Column from "./Column";
import EmptyBoard from "./EmptyBoard";

const Board = () => {
  const {currentBoard, boards, setBoards} = useBoards();

  console.log(currentBoard);
  function handleOnDragEnd(result) {
    console.log(result);
    if (!result.destination) {
      return;
    }
    const {source, destination} = result;
    if (source.droppableId === destination.droppableId && destination.index === source.index) {
        return;
    }

    // const column =

  }

  if(!currentBoard.columns.length) return <EmptyBoard />

  return (
    <main className="p-4 space-x-4 overflow-scroll bg-lightGrey dark:bg-veryDarkGrey flex">
        <DragDropContext
            onDragEnd={handleOnDragEnd}
        >

        {
            currentBoard.columns.map((column, i) => (
                <Column data={column} key={i}/>
                ))
            }
            </DragDropContext>
    </main>
  )
}
export default Board
