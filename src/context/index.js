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
      const column = columns.find(
        (column) => column.name === source.droppableId
      );
      const taskId = column.tasks[source.index];
      column.tasks.splice(source.index, 1);
      column.tasks.splice(destination.index, 0, taskId);
      setBoards([...boards]);
    }
    //If the card has been moved to a different column
    else {
      const column = columns.find(
        (column) => column.name === source.droppableId
      );
      const taskId = column.tasks[source.index];
      const draggedTask = currentBoard.tasks.find((task) => task.id === taskId);
      draggedTask.status = destination.droppableId;
      column.tasks.splice(source.index, 1);
      const newColumn = columns.find(
        (column) => column.name === destination.droppableId
      );
      newColumn.tasks.splice(destination.index, 0, taskId);
      setBoards([...boards]);
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
