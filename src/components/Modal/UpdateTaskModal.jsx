import Button from "@components/shared/Button"
import StatusDropdown from "@components/shared/StatusDropdown";
import TextInput from "@components/shared/TextInput";
import { useBoards } from "@src/context";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from 'yup';
import { useState } from 'react';
import TextArea from "@components/shared/TextArea";

const UpdateTaskModal = ({data, close}) => {
    const { updateTask } = useBoards();
    const [status, setStatus ] = useState(data.status);
    const [subtasks, setSubtasks] = useState(data.subtasks);


    const validate = Yup.object({
        title: Yup.string().required("Can't be empty"),
        description: Yup.string().required("Can't be empty"),
        subtasks: Yup.array().of(
            Yup.object({
                title : Yup.string().required("Can't be empty"),
            }),
        ),
        status: Yup.string().required("Can't be empty"),

    })

    return (

        <Formik
        initialValues={{
            ...data,
            status: status
        }}
        validationSchema={validate}
        onSubmit={ (values) => {
            values.status = status;
            updateTask(values)
            close();
        }}
        >
        { formik => (
            <div className="w-full mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
                <h1 className="heading-lg mb-6">Edit Task</h1>
                <Form>
                    <TextInput label="Title" name="title" type="text" placeholder="e.g. Take coffee break"/>
                    <TextArea label="Description" name="description" type="text" placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."/>

                    <label className="body-md text-mediumGrey dark:text-white mt-6 block">
                        Subtasks
                    </label>
                    <FieldArray name="subtasks"
                        render={arrayHelpers => (
                            <div>
                                {formik.values.subtasks.map((subtask, i) => (
                                    <div key={i} className="flex">
                                        <TextInput name={`subtasks[${i}].title`} type="text" placeholder="e.g. Take a break"/>
                                        <Button type="button" onClick={() => arrayHelpers.remove(i)} className="text-mediumGrey hover:text-mainRed ml-4">
                                            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fillRule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                                        </Button>
                                    </div>
                                ))}
                            <Button onClick={() => arrayHelpers.push({title: ''})}
                            className="w-full bg-mainPurple bg-opacity-10 text-mainPurple bold rounded-full p-2 pt-3 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white">+ Add New Subtask</Button>
                            </div>
                        )}
                    />

                    <StatusDropdown status={status} setStatus={setStatus}/>

                    <Button type="submit" className="mt-6 w-full bg-mainPurple text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainPurpleHover">Save Changes</Button>
                </Form>
            </div>
        )}
        </Formik>

      )
}
export default UpdateTaskModal
