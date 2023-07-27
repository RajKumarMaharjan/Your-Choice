'use client';
import { useState } from 'react';
import { Formik } from "formik";
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar';


const customerForm = (props) => {
  const [open, setOpen] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  

  const handleClose = (_, reason) => { 
    if (reason === 'clickaway'){
      return;
    }
    setOpen(false)
  };

  const submitOrderList = async (values, {resetForm}) =>{
    try{
      const res = await axios.post("http://localhost:8080/orders" , values)
      if(res.status === 200){
        setOpen(true);
        setSubmitMessage('Order Saved');
        resetForm();
      }
    }catch(error){
      setOpen(true);
      setSubmitMessage(error.message);
    }
  }

  return(
    <>
    <Formik 
    initialValues={{
      firstName: '',
      lastName: '',
      Address: '',
      ContactNumber: '',
      ProductCode: '',
      ProductDescription: '',
    }}
    onSubmit={(values, { resetForm }) => {
      submitOrderList(values, { resetForm},);
    }}
    >
     {({ values, handleChange, handleBlur, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
    <input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='firstName'
          className='border rounded-lg m-2 p-2'
        />
        <input
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='lastName'
          className='border rounded-lg m-2 p-2'
        />
        <input
          name="Address"
          value={values.Address}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Address'
          className='border rounded-lg m-2 p-2'
        />
        <input
          name="ContactNumber"
          value={values.ContactNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Contact No.'
          className='border rounded-lg m-2 p-2'
        />
        <input
          name="ProductCode"
          value={values.ProductCode}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Product Code.'
          className='border rounded-lg m-2 p-2'
        />
        <input
          name="ProductDescription"
          value={values.ProductDescription}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Product Description.'
          className='border rounded-lg m-2 p-2'
        />
         <button type="submit" className='border-2 rounded-xl p-2 m-2'>Submit</button>
    </form>)}
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


export default customerForm;