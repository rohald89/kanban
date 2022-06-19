import { v4 as uuidv4 } from 'uuid';
import Button from "@components/shared/Button"
import { useBoards } from "@src/context";
import { useFormik } from "formik"

const UpdateTaskModal = () => {
    const { columns, createTask } = useBoards();

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            subtasks: ['', ''],
            status: ''
        },
        onSubmit: (values) => {
            console.log(values)
            createTask(values)
        }
    })
    return (
        <form
        onSubmit={formik.handleSubmit}
        className="w-[480px] min-w-11/12 mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
            <h1 className="heading-lg mb-6">Add New Task</h1>

            <label className="body-md text-mediumGrey dark:text-white block">
                Title
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    placeholder="e.g. Take coffee break"
                    className="bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 my-2 block rounded border text-black dark:text-white border-mediumGrey border-opacity-25 placeholder:opacity-25"
                />
            </label>

            <label className="body-md text-mediumGrey dark:text-white mt-6 block">
                Description
                <textarea
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
                    className="bg-white dark:bg-darkGrey body-lg w-full h-28 px-4 py-2 my-2 block rounded text-black dark:text-white resize-none border border-mediumGrey border-opacity-25 placeholder:opacity-25"
                />
            </label>

            <label className="body-md text-mediumGrey dark:text-white mt-6 block">
                Subtask
                <input
                    id="subtasks[0]"
                    name="subtasks[0]"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.subtasks[0]}
                    placeholder="e.g. Make coffee"
                    className="bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 my-2 block rounded border text-black dark:text-white border-mediumGrey border-opacity-25 placeholder:opacity-25"
                />
                <input
                    id="subtasks[1]"
                    name="subtasks[1]"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.subtasks[1]}
                    placeholder="e.g. Drink coffee & smile"
                    className="bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 mb-2 block rounded border text-black dark:text-white border-mediumGrey border-opacity-25 placeholder:opacity-25"/>
            </label>

            <Button className="w-full bg-mainPurple bg-opacity-10 text-mainPurple bold rounded-full p-2 pt-3 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white">+ Add New Subtask</Button>

            <label className="body-md text-mediumGrey dark:text-white block mt-6">
                Status
                <select
                    id="status"
                    name="status"
                    onChange={formik.handleChange}
                    value={formik.values.status}
                    type="text"
                    placeholder="e.g. Take coffee break"
                    className="bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 my-2 block rounded border border-mediumGrey">
                    <option value="">Select Status</option>
                    {columns.map((column, i) => (
                        <option key={i} value={column.name} className="text-mediumGrey block px-4 py-2 text-sm">{column.name}</option>
                    ))}
                </select>
            </label>

            <Button type="submit" className="mt-6 w-full bg-mainPurple text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainPurpleHover">+ Add New Subtask</Button>

        </form>
      )
}
export default UpdateTaskModal
