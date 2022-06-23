import { useField, ErrorMessage } from 'formik';

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-6">
      <label
        className="body-md text-mediumGrey dark:text-white block"
        htmlFor={field.name}
      >
        {label}
      </label>
      <textarea
        className={`bg-white dark:bg-darkGrey body-lg w-full h-28 px-4 py-2 my-2 block rounded text-black dark:text-white resize-none border border-mediumGrey border-opacity-25 placeholder:opacity-25 ${
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

export default TextArea;
