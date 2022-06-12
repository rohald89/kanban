import { createContext, useContext, useState } from "react";
import useLocalStorage from "@hooks/useLocalStorage";
import data from "../data.json";

const BoardContext = createContext();

function BoardProvider({ children }) {
  const [boards, setBoards] = useLocalStorage("boards", data.boards);
  const [currentBoard, setCurrentBoard] = useState(0);

  const value = {
    boards,
    setBoards,
    currentBoard,
    setCurrentBoard,
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
