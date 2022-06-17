import BoardContainer from "./BoardContainer";
import useWindowSize from "@hooks/useWindowSize";
import ThemeToggle from "./themeToggle"
import { useState } from "react";
import SidebarToggle from "./SidebarToggle";

const Sidebar = ({ showSidebar, setShowSidebar}) => {
  const {width} = useWindowSize();
  if (width < 768) return null;

  return (
    <>
    {
    showSidebar === true ? (
        <div className="flex flex-col items-start py-7 border-r bg-white  border-lightGreyLine dark:bg-darkGrey dark:border-darkGreyLine">
        <BoardContainer/>
        <ThemeToggle />
        <SidebarToggle show={showSidebar} />
        </div>
    ) : (
        <div className="absolute bottom-0 left-0 w-12 h-12">
            <SidebarToggle show={showSidebar} />
        </div>
    )}
    </>
  )
}
export default Sidebar
