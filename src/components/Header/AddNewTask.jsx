import Modal from "@components/Modal";
import AddNewTaskModal from "@components/Modal/AddNewTaskModal";
import useWindowSize from "@hooks/useWindowSize";
import Image from "next/image";
import { useState } from "react";

const AddNewTask = () => {
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const {width} = useWindowSize();

  return (
    <>
        {
        width > 768 ? (
            <button className="btn btn__primary btn-lg" onClick={() => setOpenTaskModal(true)}>
                + Add New Task
            </button>
        ) : (
            <button className="btn btn__primary px-5 flex justify-center items-center" onClick={() => setOpenTaskModal(true)}>
                <Image src="/icon-add-task-mobile.svg" alt="plus icon" height={12} width={12} />
            </button>
        )}
        <Modal show={openTaskModal} onClose={() => setOpenTaskModal(false)}>
            <AddNewTaskModal onClose={() => setOpenTaskModal(!openTaskModal)} />
        </Modal>
    </>
  )
  }

export default AddNewTask
