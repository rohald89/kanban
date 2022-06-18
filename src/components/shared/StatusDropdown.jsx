import { motion } from "framer-motion";
import { useBoards } from "@src/context";
import { useState } from "react";

const StatusDropdown = ({ data }) => {
  const [status, setStatus] = useState(data.status);
  const [showMenu, setShowMenu] = useState(false);
  const { columns, changeTaskStatus } = useBoards();

  const menuVariations = {
    closed: {
        opacity: 0,
    },
    open: {
        opacity: 1,
    }
}

  return (
    <div className="relative">
        <button
            onClick={() => setShowMenu(!showMenu )}
            type="button"
            className="inline-flex justify-between w-full rounded-md outline outline-1 outline-mediumGrey shadow-sm px-4 py-2 bg-white text-sm font-medium text-black focus:outline-mainPurple dark:bg-darkGrey dark:text-white"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
        >
            {status}
            <svg className="-mr-1 ml-2 h-5 w-5 fill-mainPurple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </button>
        <motion.div
        className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-veryDarkGrey"
        variants={menuVariations}
        initial="closed"
        animate={showMenu ? "open" : "closed"}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1">
            <div className="py-1" role="none">
                {columns.map((column, i) => (
                    <a
                    onClick={() => {
                        setStatus(column.name);
                        setShowMenu(false)
                        changeTaskStatus(data.id, column.name);
                    }}
                    key={i}
                    href="#"
                    className="text-mediumGrey block px-4 py-2 text-sm hover:text-mainPurple hover:bg-mainPurple dark:hover:bg-white hover:bg-opacity-10"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0">
                        {column.name}
                    </a>
                ))}
            </div>
        </motion.div>
    </div>
  )
}
export default StatusDropdown
