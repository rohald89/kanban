import { createContext, useContext, useState } from "react";
import useLocalStorage from "@hooks/useLocalStorage";
import data from "../data.json";
import stringToSlug from "@utils/stringToSlug";

const BoardContext = createContext();

function BoardProvider({ children }) {
  const [boards, setBoards] = useLocalStorage("boards", data.boards);
  const [activeBoard, setActiveBoard] = useState(0);

  const currentBoard = boards[activeBoard];

  const columns = currentBoard.columns;

  const createTask = (task) => {
    task.id = currentBoard.tasks.length;
    const column = columns.find((column) => column.name === task.status);
    task.status = column.name;
    task.name = stringToSlug(task.title);
    column.tasks.push(task.id);
    currentBoard.tasks.push(task);
    setBoards([...boards]);
  };

  const toggleSubtask = (taskId, subtaskId) => {
    const task = currentBoard.tasks.find((task) => task.id === taskId);
    const subtask = task.subtasks[subtaskId];
    subtask.isCompleted
      ? (subtask.isCompleted = false)
      : (subtask.isCompleted = true);
    setBoards([...boards]);
  };

  const changeTaskStatus = (taskId, status) => {
    const task = currentBoard.tasks.find((task) => task.id === taskId);
    const column = columns.find((column) => column.name === status);
    const prevColumn = columns.find((column) => column.name === task.status);
    prevColumn.tasks = prevColumn.tasks.filter((id) => id !== taskId);
    column.tasks.push(taskId);
    task.status = column.name;
    setBoards([...boards]);
  };

  const deleteTask = (taskId) => {
    const task = currentBoard.tasks.find((task) => task.id === taskId);
    const column = columns.find((column) => column.name === task.status);
    column.tasks = column.tasks.filter((id) => id !== taskId);
    currentBoard.tasks = currentBoard.tasks.filter(
      (task) => task.id !== taskId
    );
    setBoards([...boards]);
  };

  const dragTask = (source, destination) => {
    // dropped outside a column
    if (!destination) {
      return;
    }

    // if the source and destination are the same, do nothing
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // If the card is moved within the same column and just needs an index change
    if (source.droppableId === destination.droppableId) {
      const column = currentBoard.columns.filter(
        (column) => column.name === source.droppableId
      )[0];

      const draggedTaskId = column.tasks[source.index];

      const newTasks = Array.from(column.tasks);
      newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, draggedTaskId);

      const newColumn = {
        ...column,
        tasks: newTasks,
      };

      const newBoard = {
        ...currentBoard,
        columns: currentBoard.columns.map((column) =>
          column.name === source.droppableId ? newColumn : column
        ),
      };

      setBoards((prevBoards) => {
        const newBoards = [...prevBoards];
        newBoards[
          newBoards.findIndex((board) => board.name === newBoard.name)
        ] = newBoard;
        return newBoards;
      });
    }
    // If the card has been moved to a different column
    else {
      const originalColumn = currentBoard.columns.filter(
        (column) => column.name === source.droppableId
      )[0];
      const draggedTaskId = originalColumn.tasks[source.index];
      const draggedTask = currentBoard.tasks.find(
        (task) => task.id === draggedTaskId
      );
      draggedTask.status = destination.droppableId;
      const newTasks = Array.from(originalColumn.tasks);
      newTasks.splice(source.index, 1);
      const updatedOriginalColumn = {
        ...originalColumn,
        tasks: newTasks,
      };
      const newColumn = currentBoard.columns.filter(
        (column) => column.name === destination.droppableId
      )[0];
      const newTasks2 = Array.from(newColumn.tasks);
      newTasks2.splice(destination.index, 0, draggedTaskId);
      const updatedNewColumn = {
        ...newColumn,
        tasks: newTasks2,
      };
      const newBoard = {
        ...currentBoard,
        columns: currentBoard.columns
          .map((column) =>
            column.name === source.droppableId ? updatedOriginalColumn : column
          )
          .map((column) =>
            column.name === destination.droppableId ? updatedNewColumn : column
          ),
      };

      setBoards((prevBoards) => {
        const newBoards = [...prevBoards];
        newBoards[
          newBoards.findIndex((board) => board.name === newBoard.name)
        ] = newBoard;

        return newBoards;
      });
    }
  };

  const value = {
    boards,
    setBoards,
    currentBoard,
    columns,
    toggleSubtask,
    createTask,
    changeTaskStatus,
    deleteTask,
    dragTask,
    setActiveBoard,
  };
  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
}

const useBoards = () => {
  const context = useContext(BoardContext);
  if (context === undefined) {
    throw new Error("useBoards must be used within a BoardProvider");
  }
  return context;
};

export { BoardProvider, useBoards };
