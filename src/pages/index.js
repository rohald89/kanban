import Board from "@components/Board";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="h-screen grid grid-rows-[64px_1fr] md:grid-rows-[80px_1fr] md:grid-cols-[261px_1fr] xl:grid-rows-[96px_1fr] xl:grid-cols-[300px_1fr]">
      <Header sidebarVisible={showSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Board sidebarVisible={showSidebar} />
    </div>
  );
}
