import Button from "@components/shared/Button"
import { useBoards } from "@src/context";
import { useFormik } from "formik";
import { useState } from "react";
import StatusDropdown from "@components/shared/StatusDropdown";

const AddNewTaskModal = () => {
    const { columns, createTask } = useBoards();
    const [status, setStatus] = useState(columns[0].name);
    const [subtasks, setSubtasks] = useState(['', '']);

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            subtasks: subtasks,
            status: status
        },
        onSubmit: (values) => {
            values.status = status;
            createTask(values)
        }
    })
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="w-full mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
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
                {
                    subtasks.map((subtask, index) => (
                        <input
                            key={index}
                            id={`subtasks[${index}]`}
                            name={`subtasks[${index}]`}
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.subtasks[index]}
                            placeholder="e.g. Make coffee"
                            className="bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 my-2 block rounded border text-black dark:text-white border-mediumGrey border-opacity-25 placeholder:opacity-25"
                        />
                    ))
                }
            </label>

            <Button
                type="button"
                className="w-full bg-mainPurple bg-opacity-10 text-mainPurple bold rounded-full p-2 pt-3 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white"
                onClick={() => setSubtasks([...subtasks, ''])}
            >+ Add New Subtask</Button>

            <StatusDropdown status={status} setStatus={setStatus}/>

            <Button type="submit" className="mt-6 w-full bg-mainPurple text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainPurpleHover">+ Add New Task</Button>

        </form>
    )
}
export default AddNewTaskModal
