import React from 'react'
import {useFormik} from 'formik';
import * as yup from 'yup';
function App() {
  const formik=useFormik({
    initialValues:{
      "userName":"",
      "age":0,
      "city":"",
      "number":""
    },
    validationSchema:yup.object({
      "userName":yup.string().required("name must be required").min(4,"name short").max(10,"name long"),
      "age":yup.number().required("name must be required"),
      "number":yup.string().matches(/\+91\d{10}/,"Invalid +91 mobile number")

    }),
  
    onSubmit:(values)=>{
      alert(JSON.stringify(values))
    }

  })

  return (
    <div>
      <div>
        {
        <form onSubmit={formik.handleSubmit}>
          <div>
            <dl>
              <dt>UserName</dt>
              <dd><input type="text" className='form-control w-50' onChange={formik.handleChange} name="userName"></input></dd>
              <dd className='text-danger'>{formik.errors.userName}</dd>
              <dt>Age</dt>
              <dd><input type="text" className='form-control w-50' onChange={formik.handleChange} name="age"></input></dd>
              <dd className='text-danger'>{formik.errors.age}</dd>
              <dt>City</dt>
              <dd>
                <select className='form-control w-50' onChange={formik.handleChange} name="city">
                  <option value="-1">select city</option>
                  <option value="ban">Bangalore</option>
                  <option value="hyd">Hyderabad</option>
                  <option value="del">Delhi</option>
                </select>
                <dd className='text-danger'>{formik.errors.city}</dd>
              </dd>
            </dl>
            <dt>Number</dt>
            <dd><input type="text"className='form-control w-50'onChange={formik.handleChange} name="number"></input></dd>
            <dd className='text-danger'>{formik.errors.number}</dd>
          </div>
          <div>
            <button className='btn btn-warning'>Register</button>
          </div>
        </form>
        }
      </div>
    </div>
  )
}

export default App