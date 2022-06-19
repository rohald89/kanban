import { useBoards } from "@src/context"

const DeleteTaskModal = ({onConfirm, onClose}) => {
    const { currentBoard } = useBoards();
    console.log(currentBoard)
    return (
      <div className="space-y-6 w-[480px] min-w-11/12 mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
          <h1 className="text-mainRed heading-lg">Delete this task?</h1>
          <p className="body-lg">Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.</p>
          <div className="flex gap-4">

              <button className="flex-1 bg-mainRed text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainRedHover" onClick={() => {
                  onConfirm()
                  onClose()
              }}>
                  Delete
              </button>
              <button className="flex-1 bg-mainPurple bg-opacity-10 text-mainPurple text-base rounded-full p-2 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white" onClick={onClose}>
                  Cancel
              </button>
          </div>
      </div>
    )
  }
  export default DeleteTaskModal
