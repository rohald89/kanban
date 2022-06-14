import Modal from "@components/Modal";
import AddNewTaskModal from "@components/Modal/AddNewTaskModal";
import Button from "@components/shared/Button";
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
            <Button className="btn btn__primary btn-lg" onClick={() => setOpenTaskModal(true)}>
                + Add New Task
            </Button>
        ) : (
            <Button className="btn btn__primary px-5 flex justify-center items-center" onClick={() => setOpenTaskModal(true)}>
                <Image src="/icon-add-task-mobile.svg" height={12} width={12} />
            </Button>
        )}
        <Modal show={openTaskModal} onClose={() => setOpenTaskModal(false)}>
            <AddNewTaskModal />
        </Modal>
    </>
  )
  }

export default AddNewTask
