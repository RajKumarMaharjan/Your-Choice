"use client";
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'
import '../css/login.css'

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
 
});

 const Login = () => {
  return(
  <div className='form-box'>
    <h1>Sign in</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="UserName" placeholder='UserName' className="username"/>
          {errors.UserName && touched.UserName ? (
            <div>{errors.UserName}</div>
          ) : null}
          <Field name="password" placeholder='password' className="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <div className='login-btn'>
          <button type="submit" className='singin'>Login</button>
          </div>
        </Form>
      )}
    </Formik>
    Already have an account yet? <Link href="/register"> Sing up</Link> Instead
   
  </div>
)}

export default Login