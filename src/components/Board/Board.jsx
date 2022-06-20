import { DragDropContext } from 'react-beautiful-dnd';
import { useBoards } from "@src/context";
import Column from "./Column";
import Task from "./Task";
import EmptyBoard from "./EmptyBoard";
import NewColumn from './NewColumn';
import NoBoardsFound from './NoBoardsFound';

const Board = () => {
  const {currentBoard, boards, dragTask} = useBoards();

  function handleOnDragEnd(result) {
    const {source, destination} = result;
    dragTask(source, destination);
  }

  console.log(currentBoard);
  if(!boards.length) return <NoBoardsFound />
  if(!currentBoard.columns.length) return <EmptyBoard />

  return (
    <main className='overflow-y-hidden scrollbar-thin scrollbar-thumb-mainPurple scrollbar-track-transparent flex-1 p-4 space-x-4 bg-lightGrey dark:bg-veryDarkGrey flex'>
        <DragDropContext
            onDragEnd={handleOnDragEnd}
        >
        {
            currentBoard.columns.map((column, i) => (
                <Column data={column} key={i}>
                    {
                        column.tasks.map((taskId, j) => {
                            const task = currentBoard.tasks.filter(task => task.id === taskId)[0];
                            return <Task data={task} index={j} key={taskId} />
                        })
                    }
                </Column>
            ))
        }
        </DragDropContext>
        <NewColumn />
    </main>
  )
}
export default Board
