import React from "react";
import { ErrorMessage,useField } from "formik";

export const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props);


return (
    <div className="mb-2">
        <label htmlFor={field.name}>{label}</label>
        <input className={`form-control shadow-non ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props} autoComplete="off" />

        <ErrorMessage component='div' name={field.name} className="error" />
    </div>

    //in meta we check page is touched or not dala is valid or not

    //in field we have name last name etc which is made in signup form

    ///... props (triple dots means) i es6 rest or spread operator  
)
}

