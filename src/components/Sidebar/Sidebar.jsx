import BoardContainer from "./BoardContainer";
import useWindowSize from "@hooks/useWindowSize";
import { useTheme } from "next-themes"
import Image from "next/image";
import ThemeToggle from "./themeToggle"

const Sidebar = ({data}) => {
    const {width} = useWindowSize();
    const {theme} = useTheme();
  if (width < 768) return null;

  return (
    <div className="flex flex-col items-start h-screen py-7 row-span-2 border-r bg-white  border-lightGreyLine dark:bg-darkGrey dark:border-darkGreyLine">
        <div className="ml-6">
        <Image src={theme === 'dark' ? "/logo-light.svg" : "/logo-dark.svg"} alt="kanban logo" height={25} width={152}  />
        </div>
        <BoardContainer data={data}/>
        <ThemeToggle />
    </div>
  )
}
export default Sidebar
