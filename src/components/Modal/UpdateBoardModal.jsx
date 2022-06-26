import { v4 as uuidv4 } from "uuid";
import Button from "@components/shared/Button"
import { useBoards } from "@src/context";
import { FieldArray, Form, Formik } from "formik"
import * as Yup from 'yup';
import { useState } from "react";
import TextInput from "@components/shared/TextInput";

const UpdateBoardModal = ({onConfirm}) => {
    const { updateBoard, currentBoard } = useBoards();
    const [columns, setColumns] = useState(currentBoard.columns);

    const validate = Yup.object({
        name: Yup.string().required("Can't be empty"),
        columns: Yup.array().of(
            Yup.object({
                name: Yup.string().required("Can't be empty"),
            }),
        )
    })

    return (
        <Formik
            initialValues={{
                name: currentBoard.name,
                columns: columns,
            }}
            validationSchema={validate}
            onSubmit={ (values) => {
                updateBoard(values);
                onConfirm();
            }
            }
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
                                        <TextInput name={`columns[${i}].name`} type="text" placeholder="e.g. Archived"/>
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
                                <Button onClick={() => arrayHelpers.push({ id: uuidv4(), name: "", slug: '', tasks: []})} className="w-full bg-mainPurple bg-opacity-10 text-mainPurple bold rounded-full p-2 pt-3 mt-3 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white">+ Add New Column</Button>
                                <Button type="submit" className="mt-6 w-full bg-mainPurple text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainPurpleHover">Save Changes</Button>
                            </div>
                        )}
                    />
                </Form>
            </div>
            )}
        </Formik>
      )
}
export default UpdateBoardModal
