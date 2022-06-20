import Button from "@components/shared/Button"
import { useBoards } from "@src/context";
import { useFormik } from "formik"

const AddNewColumnModal = () => {
    const { createColumn } = useBoards();

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        onSubmit: (values) => {
            console.log(values)
            createColumn(values)
        }
    })
    return (
        <form
        onSubmit={formik.handleSubmit}
        className="w-full mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
            <h1 className="heading-lg mb-6">Add New Column</h1>

            <label className="body-md text-mediumGrey dark:text-white block">
                Column Name
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

            <Button type="submit" className="mt-6 w-full bg-mainPurple text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainPurpleHover">+ Add New Column</Button>

        </form>
      )
}
export default AddNewColumnModal
