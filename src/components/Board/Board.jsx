import {DragDropContext} from 'react-beautiful-dnd';
import { useBoards } from "@src/context";
import Column from "./Column";
import EmptyBoard from "./EmptyBoard";
import NewColumn from './NewColumn';

const Board = () => {
  const {currentBoard, boards, setBoards} = useBoards();

  console.log(currentBoard);
  function handleOnDragEnd(result) {
      const {source, destination} = result;
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && destination.index === source.index) {
        return;
    }

    if(source.droppableId === destination.droppableId) {
        const column = currentBoard.columns.filter(column => column.slug === source.droppableId)[0];

        const draggedTask = column.tasks[source.index];

        const newTasks = Array.from(column.tasks)
        newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, draggedTask);


        const newColumn = {
            ...column,
            tasks: newTasks
        }

        const newBoard = {
            ...currentBoard,
            columns: currentBoard.columns.map(column => column.slug === source.droppableId ? newColumn : column)
        }

        setBoards((prevBoards) => {
            const newBoards = [...prevBoards];
            newBoards[newBoards.findIndex(board => board.name === newBoard.name)] = newBoard;
            console.log(newBoards);
            return newBoards;
        });
    } else {
        const originalColumn = currentBoard.columns.filter(column => column.slug === source.droppableId)[0];
        const draggedTask = originalColumn.tasks[source.index];
        const newTasks = Array.from(originalColumn.tasks);
        newTasks.splice(source.index, 1);
        const updatedOriginalColumn = {
            ...originalColumn,
            tasks: newTasks
        }
        const newColumn = currentBoard.columns.filter(column => column.slug === destination.droppableId)[0];
        const newTasks2 = Array.from(newColumn.tasks);
        newTasks2.splice(destination.index, 0, draggedTask);
        const updatedNewColumn = {
            ...newColumn,
            tasks: newTasks2
        }
        const newBoard = {
            ...currentBoard,
            columns: currentBoard.columns.map(column => column.slug === source.droppableId ? updatedOriginalColumn : column).map(column => column.slug === destination.droppableId ? updatedNewColumn : column)
        }
        console.log(newBoard);
        setBoards((prevBoards) => {
            const newBoards = [...prevBoards];
            newBoards[newBoards.findIndex(board => board.name === newBoard.name)] = newBoard;

            return newBoards;
        });
    }

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
        <NewColumn />
    </main>
  )
}
export default Board
