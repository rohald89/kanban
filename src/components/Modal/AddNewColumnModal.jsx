import { Form, Formik } from "formik"
import * as Yup from 'yup';
import Button from "@components/shared/Button"
import TextInput from "@components/shared/TextInput";
import { useBoards } from "@src/context";

const AddNewColumnModal = ({ onClose }) => {
    const { createColumn } = useBoards();

    const validate = Yup.object({
        name: Yup.string().required("Can't be empty"),
    })

    return (
        <Formik
            initialValues={{
                name: "",
            }}
            validationSchema={validate}
            onSubmit={ (values) => {
                createColumn(values)
                onClose()
            }
            }
        >
            { formik => (
                <div className="w-full mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
                    <h1 className="heading-lg mb-6">Add New Column</h1>
                    <Form>

                    <TextInput label="Name" name="name" type="text" placeholder="e.g. Archived" />

                    <Button type="submit" className="mt-6 w-full bg-mainPurple text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainPurpleHover">+ Add New Column</Button>
                    </Form>
                </div>
            )}
        </Formik>
    )}
export default AddNewColumnModal
