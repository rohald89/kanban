import Modal from "@components/Modal";
import Image from "next/image";
import { useState } from "react";
import useWindowSize from "@hooks/useWindowSize";
import AddNewTask from "./AddNewTask";
import { useBoards } from "@src/context";

const Header = () => {
  const {width} = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);
  const { currentBoard } = useBoards();

  return (
    <header className="flex bg-white justify-between items-center p-4 border-b border-lightGreyLine dark:bg-darkGrey dark:text-white dark:border-darkGreyLine">
        <div className="flex items-center">
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
                <h2 className="heading-lg ml-5 mr-2">{currentBoard.name}</h2>
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
