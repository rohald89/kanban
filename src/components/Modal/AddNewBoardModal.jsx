import Button from "@components/shared/Button"
import { useBoards } from "@src/context";
import { useFormik } from "formik"

const AddNewBoardModal = ({onClose}) => {
    const { createBoard } = useBoards();

    const formik = useFormik({
        initialValues: {
            name: "",
            columns: ['', ''],
        },
        onSubmit: (values) => {
            createBoard(values)
            onClose();
        }
    })
    return (
        <form
        onSubmit={formik.handleSubmit}
        className="w-full mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
            <h1 className="heading-lg mb-6">Add New Board</h1>

            <label className="body-md text-mediumGrey dark:text-white block">
                Board Name
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="e.g. Take coffee break"
                    className="bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 my-2 block rounded border text-black dark:text-white border-mediumGrey border-opacity-25 placeholder:opacity-25"
                />
            </label>

            <label className="body-md text-mediumGrey dark:text-white mt-6 block">
                Board Columns
                <input
                    id="columns[0]"
                    name="columns[0]"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.columns[0]}
                    placeholder="e.g. Make coffee"
                    className="bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 my-2 block rounded border text-black dark:text-white border-mediumGrey border-opacity-25 placeholder:opacity-25"
                />
                <input
                    id="columns[1]"
                    name="columns[1]"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.columns[1]}
                    placeholder="e.g. Drink coffee & smile"
                    className="bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 mb-2 block rounded border text-black dark:text-white border-mediumGrey border-opacity-25 placeholder:opacity-25"/>
            </label>

            <Button className="w-full bg-mainPurple bg-opacity-10 text-mainPurple bold rounded-full p-2 pt-3 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white">+ Add New Column</Button>

            <Button type="submit" className="mt-6 w-full bg-mainPurple text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainPurpleHover">Create New Board</Button>

        </form>
      )
}
export default AddNewBoardModal
