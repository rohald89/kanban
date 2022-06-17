import Modal from "@components/Modal";
import { useTheme } from "next-themes"
import Image from "next/image";
import { useState } from "react";
import useWindowSize from "@hooks/useWindowSize";
import AddNewTask from "./AddNewTask";
import { useBoards } from "@src/context";

const Header = ({ sidebarVisible }) => {
  const {width} = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);
  const { currentBoard } = useBoards();
  const {theme} = useTheme();

  return (
    <header className="p-4 flex bg-white justify-between items-center border-b border-lightGreyLine dark:bg-darkGrey dark:text-white dark:border-darkGreyLine">
        <div className="flex items-center ">
        {
            width <= 768 ? (
                <>
                <Image src="/logo-mobile.svg" alt="kanban logo" height={25} width={24}  />
                <button className="flex justify-center items-center" onClick={() => setShowMenu(true)}>
                    <h2 className="heading-lg ml-5 mr-2">{currentBoard.name}</h2>
                    {
                        showMenu ? (
                            <Image src="/icon-chevron-up.svg" alt="chevron" height={4} width={8} />
                        ) :  (
                            <Image src="/icon-chevron-down.svg" alt="chevron" height={4} width={8} />
                        )
                    }
                </button>
                <Modal show={showMenu} onClose={() => setShowMenu(!showMenu)}>
                    <div className="h-96 w-96 bg-white">TEST</div>
                </Modal>
                </>
            ) : (
                <>
                    <div className={`${sidebarVisible ? 'w-[300px]' : 'w-[200px]'} py-2.5 box-border transition border-r border-r-darkGreyLine`}>
                        <Image src={theme === 'dark' ? "/logo-light.svg" : "/logo-dark.svg"} alt="kanban logo" height={25} width={152}  />
                    </div>
                    <h2 className="heading-lg ml-5 mr-2">{currentBoard.name}</h2>
                </>
            )
        }


        </div>
        <div className="flex items-center gap-4">
            <AddNewTask />
            <Image src="/icon-vertical-ellipsis.svg" height={16} width={4} />
        </div>
    </header>
  )
}
export default Header
