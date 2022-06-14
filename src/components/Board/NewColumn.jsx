import Modal from "@components/Modal";
import { useState } from "react";

const NewColumn = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
        <button className="mt-10 flex items-center justify-center w-[280px] rounded-md bg-gradient-to-b from-[#E9EFFA] dark:from-[#2b2c373f] to-[rgba(233, 239, 250, 0.5)] dark:to-[#2b2c371f]"
        onClick={() => setOpenModal(true)}>
            <h2 className="heading-xl text-mediumGrey">+ New Column</h2>
        </button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            NEW COLUMN MODAL
        </Modal>
    </>
  )
}
export default NewColumn
