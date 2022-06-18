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
    task.slug = stringToSlug(task.title);
    column.tasks.push(task.id);
    currentBoard.tasks.push(task);
    setBoards([...boards]);
  };

  const toggleSubtask = (taskId, subtaskId) => {
    console.log(taskId, subtaskId);
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

  const value = {
    boards,
    setBoards,
    currentBoard,
    columns,
    toggleSubtask,
    createTask,
    changeTaskStatus,
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
