import Button from "@components/shared/Button"
import { useBoards } from "@src/context";
import stringToSlug from "@utils/stringToSlug";
import { useFormik } from "formik"

const UpdateBoardModal = () => {
    const { updateBoard, currentBoard } = useBoards();

    const formik = useFormik({
        initialValues: {
            name: currentBoard.name,
            columns: currentBoard.columns,
        },
        onSubmit: (values) => {
            console.log(values);
            let newBoard = {
                ...currentBoard,
                name: values.name,
            }
            newBoard.columns.forEach((column, index) => {
                newBoard.columns[index].name = values.columns[index].name;
                newBoard.columns[index].slug = stringToSlug(values.columns[index].name);
            });
            updateBoard(newBoard);
        }
    })
    return (
        <form
        onSubmit={formik.handleSubmit}
        className="w-full mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
            <h1 className="heading-lg mb-6">Edit Board</h1>

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
                {
                    currentBoard.columns.map((column, index) => (
                        <input
                        key={index}
                        id={`columns[${index}].name`}
                        name={`columns[${index}].name`}
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.columns[index].name}
                        placeholder="e.g. Make coffee"
                        className="bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 my-2 block rounded border text-black dark:text-white border-mediumGrey border-opacity-25 placeholder:opacity-25"
                    />
                    ))
                }
                </label>

            <Button className="w-full bg-mainPurple bg-opacity-10 text-mainPurple bold rounded-full p-2 pt-3 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white">+ Add New Column</Button>

            <Button type="submit" className="mt-6 w-full bg-mainPurple text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainPurpleHover">Save Changes</Button>

        </form>
      )
}
export default UpdateBoardModal
