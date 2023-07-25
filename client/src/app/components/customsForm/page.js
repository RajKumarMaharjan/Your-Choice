'use client';
import { useState } from 'react';
import { Formik } from "formik";
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar';

function customsForm(props) {
  const [open, setOpen] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [file, setFile] = useState(null)
  const submitFromData = async (values, { resetForm }) => {
 try{
  const form = new FormData();
  Object.entries(values).forEach(item => {
    form.append(item[0], item[1])
  })
  form.append('itemImage', file)

  const res = await axios.post("http://localhost:8080" + props.apiEndpoint, form)
   if(res.status === 200){
    setOpen(true)
    setSubmitMessage('upload success')
    resetForm()
   }

 }
 catch(error){
  setOpen(true)
  setSubmitMessage(error.message)
}
    }

  

  const handleFileSave = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={(values, { resetForm }) => {
        submitFromData(values, { resetForm })

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
            <div className="form">
              <form onSubmit={handleSubmit}>
                {props.formItems && props.formItems.map((item) => {
                  return (
                    <>
                      <input
                        name={item.label}
                        onChange={(e) => item.type == 'file' ? handleFileSave(e) : handleChange(e)}
                        value={values[item.label]}
                        id={item}
                        type={item.type}
                        placeholder={item.label}
                        className="form-control m-2 p-1 border-gray-300 rounded-lg w-auto" />
                      <p className="error">
                        {errors[item.label] && touched[item.label] && errors[item.label]}
                      </p>
                    </>
                  )
                })}




                <button type="submit" className='border border-gray-600 rounded-lg px-2 mx-auto'>
                  Save
                  </button>

              </form>
            </div>
        )}
      </Formik>
      <Snackbar
        open={open}
        message={submitMessage}
        onClose={handleClose}
        autoHideDuration={2000}
      />
    </>
  )
}

export default customsForm;



