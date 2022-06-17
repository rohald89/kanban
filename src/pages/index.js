import Board from "@components/Board";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    // <div className="h-screen grid grid-rows-[64px_1fr] md:grid-rows-[80px_1fr] md:grid-cols-[minmax(0,_300px)_1fr]">
    <div className="h-screen">
      <Header sidebarVisible={showSidebar} />
      <div className="flex board-height">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Board sidebarVisible={showSidebar} />
      </div>
    </div>
  );
}
