import { useEffect, useState } from "react";
import Board from "@components/Board";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import data from "../data.json";
import useLocalStorage from "@hooks/useLocalStorage";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [boards, setBoards] = useLocalStorage("boards", data.boards);

  return (
    <div className="grid grid-rows-[64px_1fr] md:grid-rows-[80px_1fr] md:grid-cols-[261px_1fr] xl:grid-rows-[96px_1fr] xl:grid-cols-[300px_1fr]">
      <Sidebar data={boards} />
      <Header />
      <Board data={boards} />
    </div>
  );
}
