import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextFields";
import * as Yup from "yup";


export const Signup =() =>{
    const validate = Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 character or less').required('required'),
        lastName: Yup.string().max(15, 'Must be 15 character or less').required('required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'password must be at least 6 character').required('password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'),null], 'Password must match to above Passowrd').required('confirm password is required')
    })


  return (
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email : '',
            password : '',
            confirmPassword : ''
        }}

        validationSchema={validate}
        onSubmit ={values => {

        }}
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight .display-4">Sign Up</h1>
                    <Form> 
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="text" />
                        <TextField label="Password" name="password" type="text" />
                        <TextField label="Confirm Password" name="confirmPassword" type="text" />
                        <button className="btn btn-dark mt-3" type="submit">Register</button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
            )}

    </Formik>   
  )
}

// export default Signup