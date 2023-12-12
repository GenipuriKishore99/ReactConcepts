import { Formik, Field, ErrorMessage, Form } from "formik";
// import * as yup from 'yup';
import * as yup from 'yup';

export function YupFormik() {
  return (
    <div className="conatiner-fluid">
      <div>
        <Formik
          initialValues={{
            "userName": "",
            "age": 0,
            "city": "",
            "number": "",
          }}
          onSubmit={
            (values)=>{
                alert(JSON.stringify(values))
            }
          }
          validationSchema={
               yup.object({
                "userName":yup.string().required("name must be required").min(4,"name short")
                .max(10,"name long"),
                "age":yup.number().required(),
                "number":yup.string().matches(/\+91\d{10}/,"Invalid Mobile")


               })
          }
        >
          {/* <div> */}
            {
                props=>
            <Form>
              <h3>React Yup</h3>
              <dl>
                <dt>userName</dt>
                <dd>
                  <Field type="text" name="userName"></Field>
                  <dd className="text-danger"><ErrorMessage  name="userName"></ErrorMessage></dd>
                </dd>
                <dt>Age</dt>
                <dd>
                  <Field type="text" name="age"></Field>
                  <dd className="text-danger"><ErrorMessage className="text-danger" name="age"></ErrorMessage></dd>

                </dd>
                <dt>city</dt>
                <dd>
                  <Field as="select">
                    <option>selectcity</option>
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                  </Field>
                </dd>
                <dt>Number</dt>
                <dd>
                  <Field type="text" name="number"></Field>
                  <dd className="text-danger"><ErrorMessage className="text-danger" name="number"></ErrorMessage></dd>

                </dd>
              </dl>
              <button disabled={!props.isValid}>Register</button>
              <button disabled={!props.dirty}>Save</button>

            </Form>
            }
          {/* </div> */}
        
        </Formik>
      </div>
    </div>
  );
}
