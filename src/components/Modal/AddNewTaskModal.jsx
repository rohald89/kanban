import Button from "@components/shared/Button"

const AddNewTaskModal = () => {
    return (
        <div className="w-[480px] min-w-11/12 mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
            <h1 className="heading-lg mb-6">Add New Task</h1>

            <label className="body-md text-mediumGrey block">
                Title
                <input type="text" placeholder="e.g. Take coffee break" className="w-full px-4 py-2 my-2 block rounded border border-mediumGrey"/>
            </label>

            <label className="body-md text-mediumGrey mt-6 block">
                Description
                <textarea placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
                    className="w-full h-28 px-4 py-2 my-2 block rounded resize-none border border-mediumGrey"/>
            </label>

            <label className="body-md text-mediumGrey mt-6 block">
                Subtask
                <input type="text" placeholder="e.g. Make coffee" className="w-full px-4 py-2 my-2 block rounded border border-mediumGrey"/>
                <input type="text" placeholder="e.g. Drink coffee & smile" className="w-full px-4 py-2 mb-2 block rounded border border-mediumGrey"/>
            </label>

            <Button className="w-full bg-mainPurple bg-opacity-10 text-mainPurple bold rounded-full p-2 pt-3 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white">+ Add New Subtask</Button>

            <label className="body-md text-mediumGrey block mt-6">
                Status
                <input type="text" placeholder="e.g. Take coffee break" className="w-full px-4 py-2 my-2 block rounded border border-mediumGrey"/>
            </label>

            <Button className="mt-6 w-full bg-mainPurple text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainPurpleHover">+ Add New Subtask</Button>

        </div>
      )
}
export default AddNewTaskModal
