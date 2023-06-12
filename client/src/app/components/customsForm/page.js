'use client';
import { useState } from 'react';
import { Formik } from "formik";
import axios from 'axios';
import '../../css/form.css'


function customsForm(props) {
  const [open, setOpen] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handlecustomsForm = async (values, resetForm) => {
    try {
      const userField = checkValidity(values.userIdentityField)
      values[userField[0]] = values.userIdentityField

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      }
      const res = await fetch('http://localhost:8080/item', requestOptions)
      const data = await res.json()
      if (res.status == 200 && data) {
        setOpen(true)
        setSubmitMessage('upload successfully')
        resetForm()
      }


    } catch (err) {
      setOpen(true)
      setSubmitMessage('upload failed')
    }

  }

  return (
    <>

      <Formik
        initialValues={{}}
        onSubmit={(values, { resetForm }) => {
          console.log(values,"@@")
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
          <div className="register">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
            
            {props.formItems.map((item)=>{
              return(
                <>
                 <input
                      name={item.label}
                      onChange={handleChange}
                      value={values[item.label]}
                      id={item.label}
                      placeholder={item.label}
                      className="form-control" />
                    <p className="error">
                      {errors[item.label]&& touched[item.label]  && errors[item.label] }
                    </p>
                </>
              )
            })}
                


                <button type="submit">Save</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default customsForm;



