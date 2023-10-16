import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

interface IInputField {
    label: string,
    id: string,
    type: string,
    autoComplete: string,
}
const InputField = ({ label, id, type, autoComplete }: IInputField) => {
  return (
    <div className="sm:col-span-4">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <Field
          type={type}
          name={id}
          id={id}
          autoComplete={autoComplete}
          className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-400 sm:text-sm sm:leading-6"
        />
      </div>
        <ErrorMessage name={id} component='span'/>
    </div>
  );
};

export default InputField;
