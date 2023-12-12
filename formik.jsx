import React from 'react'
import {useFormik} from 'formik';
function App() {
  const formik=useFormik({
    initialValues:{
      "userName":"",
      "age":0,
      "city":"",
      "number":""
    },
    validate:userValidate,
    onSubmit:(values)=>{
      alert(JSON.stringify(values))
    }

  })
  function userValidate(formBody){
    var errors={}
    if(formBody.userName==""){
      errors.userName="userName must be required"
    }else if(formBody.userName.length<4 || formBody.userName.length>10){
      errors.userName="name must be above 4 chars && below 10"
    }else{
      errors.userName=""
    }
    if(isNaN(formBody.age)){
      errors.age="age must be number"
    }else{
      errors.age=""
    }
    if(formBody.city==="-1"){
      errors.city="city must be selected"
    }else{
      errors.city=""
    }
    if(formBody.number.match(/\+91\d{10}/)){
      errors.number=""

    }else{
      errors.number="Invalid number"
    }
    return errors

  }
  return (
    <div>
      <div>
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
      </div>
    </div>
  )
}

export default App