'use client';
import {useState} from 'react';
import { Formik } from "formik";
import * as Yup from "yup";

import '../css/form.css'

function DynamicForm() {
  return (
    <>

      <Formik
     
        initialValues={{
          firstName: ''
        }}
        onSubmit={(values, { resetForm }) => {
         
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
          <div className="DynamicForm">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
              
                <input 
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                id="firstName"
                placeholder="Enter First Name"
                  className="form-control"/>
                <p className="error">
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>

                <button type="submit">Save</button>
             
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default DynamicForm;



 