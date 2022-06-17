import BoardContainer from "./BoardContainer";
import useWindowSize from "@hooks/useWindowSize";
import ThemeToggle from "./themeToggle"
import { useState } from "react";
import SidebarToggle from "./SidebarToggle";

const Sidebar = ({ showSidebar, setShowSidebar}) => {
  const {width} = useWindowSize();
  if (width < 768) return null;

  return (
        <div className={`flex flex-col items-start py-7 border-r bg-white  border-lightGreyLine dark:bg-darkGrey dark:border-darkGreyLine ${showSidebar ? 'translate-x-0' : '-translate-x-[300px]'}`}>
            <BoardContainer/>
            <ThemeToggle />
            <SidebarToggle show={showSidebar} setShow={setShowSidebar}/>
        </div>
  )
}
export default Sidebar
