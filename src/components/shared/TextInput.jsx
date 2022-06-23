import { useField, ErrorMessage } from 'formik';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field, meta);
  return (
    <div className="flex-grow">
      { label && (
      <label
        className="body-md text-mediumGrey dark:text-white block mt-6"
        htmlFor={field.name}
      >
        {label}
      </label>)
    }
      <input
        className={`flex-1 bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 my-2 block rounded border text-black dark:text-white border-mediumGrey border-opacity-25 placeholder:opacity-25 ${
          meta.touched &&
          meta.error &&
          ' border-2 border-opacity-100 border-mainRed'
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="mt-2 text-sm text-red-500" />
    </div>
  );
};

export default TextInput;
