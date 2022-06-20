import Button from "@components/shared/Button"
import { useBoards } from "@src/context";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useState } from "react";

const AddNewTaskModal = () => {
    const { columns, createTask } = useBoards();
    const [showMenu, setShowMenu] = useState(false);
    const [status, setStatus ] = useState(columns[0].name);
    const [subtasks, setSubtasks] = useState(['', '']);

    const menuVariations = {
        closed: {
            opacity: 0,
            y: -10,
            pointerEvents: 'none',
        },
        open: {
            opacity: 1,
            y: 0,
            pointerEvents: 'auto',
        }
    }

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            subtasks: subtasks,
            status: status
        },
        onSubmit: (values) => {
            console.log(values)
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

            <div className="relative">
                    <button
                        onClick={() => setShowMenu(!showMenu )}
                        type="button"
                        className="inline-flex justify-between w-full rounded-md outline outline-1 outline-mediumGrey shadow-sm px-4 py-2 bg-white text-sm font-medium text-black focus:outline-mainPurple dark:bg-darkGrey dark:text-white"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                    >
                        {status}
                        <svg className="-mr-1 ml-2 h-5 w-5 fill-mainPurple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <motion.div
                    className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-veryDarkGrey"
                    variants={menuVariations}
                    initial="closed"
                    animate={showMenu ? "open" : "closed"}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1">
                        <div className="py-1" role="none">
                            {columns.map((column, i) => (
                                <a
                                onClick={() => {
                                    setStatus(column.name);
                                    formik.values.status = column.name;
                                    setShowMenu(false)
                                }}
                                key={i}
                                href="#"
                                className="text-mediumGrey block px-4 py-2 text-sm hover:text-mainPurple hover:bg-mainPurple dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-0">
                                    {column.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

            <Button type="submit" className="mt-6 w-full bg-mainPurple text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainPurpleHover">+ Add New Task</Button>

        </form>
      )
}
export default AddNewTaskModal
