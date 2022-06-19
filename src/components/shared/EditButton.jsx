import Image from "next/image"
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import useOnClickOutside from "@hooks/useOnClickOutside";
import Modal from "@components/Modal";
import DeleteBoardModal from "@components/Modal/deleteBoardModal";
import UpdateBoardModal from "@components/Modal/UpdateBoardModal";


const EditButton = ({ type, className='', onClick}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showUpdateBoardModal, setShowUpdateBoardModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const menuRef = useRef();

  useOnClickOutside(menuRef, () => setShowMenu(false));

  const menuVariations = {
    closed: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
            delay: 0,
        }
    },
    open: {
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        }
    }
}

  return (
    <div className="relative">
        <button className="h-8 w-8" onClick={() => setShowMenu(!showMenu)}>
            <Image src="/icon-vertical-ellipsis.svg" height={16} width={4} />
        </button>
        <motion.div
            ref={menuRef}
            variants={menuVariations}
            initial="closed"
            animate={showMenu ? "open" : "closed"}
            className={`${className} flex flex-col items-start space-y-4 absolute body-lg rounded p-4 w-48 shadow-main capitalize bg-white dark:bg-veryDarkGrey`}
        >
            <button
            className="text-mediumGrey"
            onClick={() => showUpdateBoardModal(!showUpdateBoardModal)}
            >
                Edit {type}
            </button>
            <Modal show={showUpdateBoardModal} onClose={() => setShowUpdateBoardModal(!showUpdateBoardModal)}>
                <UpdateBoardModal onConfirm={onClick} onClose={() => setShowUpdateBoardModal(!showUpdateBoardModal)} />
            </Modal>
            <button
            className="text-mainRed"
            onClick={() => setShowDeleteModal(true)}
            >Delete {type}
            </button>
            <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(!showDeleteModal)}>
                <DeleteBoardModal onConfirm={onClick} onClose={() => setShowDeleteModal(!showDeleteModal)}/>
            </Modal>
        </motion.div>
    </div>
  )
}
export default EditButton
