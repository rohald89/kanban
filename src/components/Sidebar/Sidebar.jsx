import BoardContainer from "./BoardContainer";
import useWindowSize from "@hooks/useWindowSize";
import ThemeToggle from "./ThemeToggle"
import SidebarToggle from "./SidebarToggle";

const Sidebar = ({ showSidebar, setShowSidebar}) => {
  const {width} = useWindowSize();
  if (width < 768) return null;



  return (
        <div className={`pb-28 flex flex-col items-start py-7 border-r bg-white  border-lightGreyLine dark:bg-darkGrey dark:border-darkGreyLine transition-all duration-300 ${showSidebar ? 'translate-x-0 min-w-[260px] lg:min-w-[300px]' : '-translate-x-[300px] w-0'}`}>
            <BoardContainer/>
            <ThemeToggle />
            <SidebarToggle show={showSidebar} setShow={setShowSidebar}/>
        </div>
  )
}
export default Sidebar
