'use client';
import { useState } from 'react';
import { Formik } from "formik";
import axios from 'axios'

function customsForm(props) {
  const [file, setFile] = useState(null)
  const submitFromData = async (values) => {
    const form = new FormData();
    Object.entries(values).forEach(item=>{
      form.append(item[0], item[1])
    })
    form.append('itemImage', file)

    await axios.post("http://localhost:8080" + props.apiEndpoint , form )
  }

  const handleFileSave = (e)=>{
    setFile(e.target.files[0])
  }

  return (
    <>
      <Formik

        initialValues={{}}
        onSubmit={(values, { resetForm }) => {
          submitFromData(values)
      
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
              <form onSubmit={handleSubmit}>
                {props.formItems.map((item) => {
                  return (
                    <>
                      <input
                        name={item.label}
                        onChange={(e)=>item.type == 'file' ? handleFileSave(e) : handleChange(e)}
                        value={values[item.label]}
                        id={item}
                        type={item.type}
                        placeholder={item.label}
                        className="form-control" />
                      <p className="error">
                        {errors[item.label] && touched[item.label] && errors[item.label]}
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



