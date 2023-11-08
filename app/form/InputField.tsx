import React, { ReactNode } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

interface IInputField {
    label: string,
    id: string,
    type: string,
    autoComplete: string,
    rows?: number,
    as?: string
    children?: ReactNode
    placeholder?: string
    error?: boolean
}
const InputField = ({ label, id, type, autoComplete, as, rows, children, placeholder, error}: IInputField) => {
    console.log(id, error)
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <Field
          as={as} 
          type={type}
          name={id}
          id={id}
          autoComplete={autoComplete}
          rows={rows}
          placeholder={placeholder}
          className={`block w-full min-h-[32px] rounded-md border py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-400 sm:text-sm sm:leading-6 ${error ? 'border-red-500' : ' border-gray-300' }`}
        >
            {children}
        </Field>
      </div>
        <ErrorMessage name={id} component='span' className=' text-red-500'/>
    </div>
  );
};

export default InputField;
