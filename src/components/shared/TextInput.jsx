import { useField, ErrorMessage } from 'formik';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field, meta);
  return (
    <div className="mb-6">
      <label
        className="body-md text-mediumGrey dark:text-white block"
        htmlFor={field.name}
      >
        {label}
      </label>
      <input
        className={`bg-white dark:bg-darkGrey body-lg w-full px-4 py-2 my-2 block rounded border text-black dark:text-white border-mediumGrey border-opacity-25 placeholder:opacity-25 ${
          meta.touched &&
          meta.error &&
          ' border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:border-red-400'
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
