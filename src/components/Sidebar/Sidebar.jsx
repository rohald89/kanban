import { useTheme } from "next-themes"
import Image from "next/image";
import ThemeToggle from "./themeToggle"

const Sidebar = () => {
    const {theme} = useTheme();

  return (
    <div className="w-96 border-r border-lightGreyLine dark:border-darkGreyLine">
        <Image src={theme === 'dark' ? "/logo-light.svg" : "/logo-dark.svg"} alt="kanban logo" height={25} width={152}  />
        <ThemeToggle />
    </div>
  )
}
export default Sidebar
