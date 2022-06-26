import Button from "@components/shared/Button"
import InputArray from "@components/shared/InputArray";
import TextInput from "@components/shared/TextInput";
import { useBoards } from "@src/context";
import { FieldArray, Form, Formik, useFormik } from "formik"
import * as Yup from 'yup';

const AddNewBoardModal = ({onClose}) => {
    const { createBoard } = useBoards();


    const validate = Yup.object({
        name: Yup.string().required("Can't be empty"),
        columns: Yup.array().of(
                Yup.string().required("Can't be empty"),
        )
    })


    return (
        <Formik
        initialValues={{
            name: "",
            columns: ['Todo', 'Doing'],
        }}
        validationSchema={validate}
        onSubmit={ (values) => {
            createBoard(values);
            onClose();
        }}
        >
        { formik => (
                <div className="w-full mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
                    <h1 className="heading-lg mb-6">Add New Board</h1>
                    <Form>
                        <TextInput label="Board Name" name="name" type="text" placeholder="e.g. Web Design" />

                        <label className="body-md capitalize text-mediumGrey dark:text-white mt-6 block">
                            Board Columns
                        </label>

                        <FieldArray name="columns"
                            render={arrayHelpers => (
                                <div>
                                    {formik.values.columns.map((_, i) => (
                                        <div key={i} className="flex">
                                            <TextInput name={`columns[${i}]`} type="text" placeholder="e.g. Archived"/>
                                            <Button onClick={() => arrayHelpers.remove(i)} className="text-mediumGrey hover:text-mainRed ml-4">
                                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="currentColor" fillRule="evenodd">
                                                        <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/>
                                                        <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/>
                                                    </g>
                                                </svg>
                                            </Button>
                                        </div>
                                    ))}
                                <Button onClick={() => arrayHelpers.push('')}
                                className="w-full bg-mainPurple bg-opacity-10 text-mainPurple bold rounded-full p-2 pt-3 mt-3 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white">+ Add New Column</Button>
                                </div>
                            )}
                        />
                    </Form>
                </div>
        )}
        </Formik>
        // <form
        // onSubmit={formik.handleSubmit}
        // className="w-full mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
        //     <h1 className="heading-lg mb-6">Add New Board</h1>

        //     <label className="body-md text-mediumGrey dark:text-white block">
        //         Board Name
        //         <input
        //             id="name"
        //             name="name"
        //             type="text"
        //             onChange={formik.handleChange}
        //             value={formik.values.name}
        //             placeholder="e.g. Take coffee break"
        //             className="bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 my-2 block rounded border text-black dark:text-white border-mediumGrey border-opacity-25 placeholder:opacity-25"
        //         />
        //     </label>

        //     <label className="body-md text-mediumGrey dark:text-white mt-6 block">
        //         Board Columns
        //         <input
        //             id="columns[0]"
        //             name="columns[0]"
        //             type="text"
        //             onChange={formik.handleChange}
        //             value={formik.values.columns[0]}
        //             placeholder="e.g. Make coffee"
        //             className="bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 my-2 block rounded border text-black dark:text-white border-mediumGrey border-opacity-25 placeholder:opacity-25"
        //         />
        //         <input
        //             id="columns[1]"
        //             name="columns[1]"
        //             type="text"
        //             onChange={formik.handleChange}
        //             value={formik.values.columns[1]}
        //             placeholder="e.g. Drink coffee & smile"
        //             className="bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 mb-2 block rounded border text-black dark:text-white border-mediumGrey border-opacity-25 placeholder:opacity-25"/>
        //     </label>

        //     <Button className="w-full bg-mainPurple bg-opacity-10 text-mainPurple bold rounded-full p-2 pt-3 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white">+ Add New Column</Button>

        //     <Button type="submit" className="mt-6 w-full bg-mainPurple text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainPurpleHover">Create New Board</Button>

        // </form>
      )
}
export default AddNewBoardModal
