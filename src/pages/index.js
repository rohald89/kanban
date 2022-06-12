import Board from "@components/Board";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen grid grid-rows-[64px_1fr] md:grid-rows-[80px_1fr] md:grid-cols-[261px_1fr] xl:grid-rows-[96px_1fr] xl:grid-cols-[300px_1fr]">
      <Sidebar />
      <Header />
      <Board />
    </div>
  );
}
