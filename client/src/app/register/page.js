'use client';
import { useState } from 'react';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'
import Snackbar from '@mui/material/Snackbar';
import '../css/register.css'

function checkValidity(values) {
  if (Number(values)?.toString() == NaN?.toString() && values?.includes('@')) {
    if (values?.includes('.')) {
      return ['email', true]
    } else {
      return ['email', false]
    }
  } else if (Number(values).toString() != NaN.toString()) {
    if (values?.length == 10) {
      return ['phoneNumber', true]
    } else {
      return ['phoneNumber', false]
    }
  } else if (Number(values).toString() != NaN.toString()) {
    if (values?.trim().length > 0) {
      return ['password', true]
    } else {
      return ['password', false]
    }
  }
}

// creating schema
const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  PhoneNo: Yup.string()
    .min(10, 'Invalid number!')
    .max(15, 'Invalid number!')
    .required('Required'),
  password: Yup.string()
    .min(8, ' Password must be at least 8 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  userIdentityField: Yup.string()
    .test(`validate userIdentityField`, (item) => 'invalid ' + checkValidity(item?.value)[0], (value) => value?.length > 0 && checkValidity(value)[1]),

});

const Register = () => {
  const [open, setOpen] = useState(false)

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleRegister = async (values, resetForm) => {
    try {
      const userField = checkValidity(values.userIdentityField)
      values[userField[0]] = values.userIdentyField

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(values)
      }
      const res = await fetch('http://localhost:8080/register', requestOptions)
      const data = await res.json()
      if (res.status == 200 && data) {
        setOpen(true)
        alert("user registeration success")
      }
    } catch (err) {
      setOpen(true)
      alert("registration failed")
    }
  }

  return (
    <div className='form-box'>
      <h1>Sign up</h1>
      <Formik
      validationSchema={schema}
        initialValues={{
          firstName: '',
          lastName: '',
          PhoneNo: '',
          userIdentityField: '',
          password: '',
        }}

        onSubmit={(values, { resetForm }) => {
          handleRegister(values, resetForm)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
         }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Field name="firstName" onChange={handleChange} value={values.firstName} placeholder='First Name' className='firstName' />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" onChange={handleChange} value={values.lastName} placeholder='Last Name' className='lastName' />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="PhoneNo" onChange={handleChange} placeholder='Phone No.' className='contact' />
            {errors.PhoneNo && touched.PhoneNo ? (
              <div>{errors.PhoneNo}</div>
            ) : null}
            <Field name="userIdentityField" placeholder='Enter email id / username / phone no' className='userIdentityField' />
            {errors.userIdentityField && touched.userIdentityField ? <div>{errors.userIdentityField}</div> : null}
            <Field type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder='password' className='password' />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <div className='singup'>
              <button type="submit">Register</button>
            </div>
            <p className='register-link'>
              Already have an account yet? <Link href="/login"> Sing in</Link> Instead
            </p>
          </Form>
        )}
      </Formik>
      <Snackbar
        open={open}
        message="Popup"
        onClose={handleClose}
        autoHideDuration={3000}
      />



    </div>
  )
}

export default Register