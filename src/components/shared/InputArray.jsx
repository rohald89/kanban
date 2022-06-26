import { FieldArray } from "formik"
import Button from "./Button"
import TextInput from "./TextInput"

const InputArray = ({label, array, ...props}) => {
  return (
    <>
        <label className="body-md capitalize text-mediumGrey dark:text-white mt-6 block">
            {label}
        </label>

        <FieldArray name={label}
            render={arrayHelpers => (
                <div>
                    {array.map((_, i) => (
                        <div key={i} className="flex">
                            <TextInput name={`${label}[${i}].title`} type="text" placeholder="e.g. Take a break"/>
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
                <Button onClick={() => arrayHelpers.push({title: ''})}
                className="w-full bg-mainPurple bg-opacity-10 text-mainPurple bold rounded-full p-2 pt-3 mt-3 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white">+ Add New Subtask</Button>
                </div>
            )}
        />
    </>
  )
}
export default InputArray
