import Modal from "@components/Modal";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes"
import Image from "next/image";
import { useState } from "react";
import useWindowSize from "@hooks/useWindowSize";
import AddNewTask from "./AddNewTask";
import { useBoards } from "@src/context";
import EditButton from "@components/shared/EditButton";

const Header = ({ sidebarVisible }) => {
  const {width} = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);
  const { currentBoard } = useBoards();
  const {theme} = useTheme();

  const logoAnimation = {
    closed: {
        width: 200,
        transition: {
            duration: 0.1,
            ease: 'easeInOut',
            delay: 0,
        }
    },
    open: {
        width: 300,
        transition: {
            duration: 0.1,
            ease: "easeInOut",
            delay: 0.2,
        }
    },
  }
  return (
    <header className="h-[85px] flex bg-white justify-between items-center border-b border-lightGreyLine dark:bg-darkGrey dark:text-white dark:border-darkGreyLine">
        <div className="flex items-center ">
            <AnimatePresence>
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
                        <motion.div
                            variants={logoAnimation}
                            initial="open"
                            animate={sidebarVisible ? "open" : "closed"}
                            className={`p-8 box-border transition-all ease border-r border-r-lightGreyLine dark:border-r-darkGreyLine`}>
                            <Image src={theme === 'dark' ? "/logo-light.svg" : "/logo-dark.svg"} alt="kanban logo" height={25} width={152}  />
                        </motion.div>
                        <h2 className="heading-lg ml-5 mr-2">{currentBoard.name}</h2>
                    </>
                )
            }
            </AnimatePresence>

        </div>
        <div className="flex items-center gap-4 p-8">
            <AddNewTask />
            <EditButton type="board" className="bottom-0 left-0 -translate-x-full translate-y-28"/>
        </div>
    </header>
  )
}
export default Header
