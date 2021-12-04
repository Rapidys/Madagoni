import React, {useState} from 'react';
import {Button, Card, Form, FormGroup, FormInput} from "shards-react";
import styled from "styled-components";
import {Formik} from "formik";
import * as yup from 'yup';
import {connect} from "react-redux";
import {setNewUser} from "../../Reducers/registerReducer";

let Styles = styled.div`
  .loginWrapper {
    max-width: 600px;
    margin:60px auto;
    padding: 20px;
    box-sizing: border-box;

  }
`

const Register = (props) => {

  const validationSchema = yup.object().shape({
    firstName: yup.string().typeError('უნდა იყოს ასოები').required('აუცილებელი'),
    lastName: yup.string().typeError('უნდა იყოს ასოები').required('აუცილებელი'),
    email: yup.string().email().required('აუცილებელი'),
    // password: yup.string().typeError('Need To Be String').required('Required'),
    // ConfirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords Dont Match').required('Required')
  })

  let [isActive, setIsActive] = useState(false)
  return (
    <Styles>
      <div className={"loginWrapper mt-1"}>
        <h3 className={'mb-5'}>რეგისტრაცია</h3>
        <Card className={"p-5"}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              personNumber: '',
              // password: '',
              // ConfirmPassword: ''

            }}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={(values) => {
              setIsActive(true)

              let newPostObject = {
                userId: 5,
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
                isActive: isActive,
              }
              console.log(newPostObject)
              props.newPost(newPostObject)
            }}
          >
            {({
                values, errors, isValid,
                handleSubmit, handleBlur, handleChange,
                touched, dirty
              }) => {
              return <Form >
                <FormGroup>
                  <FormInput
                    type='text'
                    id="#firstName"
                    placeholder="სახელი"
                    name='firstName'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                  />
                  {touched.firstName && errors.firstName &&
                  <p
                    style={{color: 'red'}}
                  >{errors.firstName}</p>}

                </FormGroup>
                <FormGroup>
                  <FormInput type="text"
                             id="#lastName"
                             placeholder="გვარი"
                             name='lastName'
                             onBlur={handleBlur}
                             onChange={handleChange}
                             value={values.lastName}

                  />
                  {touched.lastName && errors.lastName &&
                  <p
                    style={{color: 'red'}}
                  >{errors.lastName}</p>}

                </FormGroup>
                <FormGroup>
                  <FormInput type="email"
                             id="#email" placeholder="ე-მაილი"
                             name='email'
                             onBlur={handleBlur}
                             onChange={handleChange}
                             value={values.email}
                  />
                  {touched.email && errors.email && <p
                    style={{color: 'red'}}>მსგავსი ემაილი არ არსებობს !</p>}

                </FormGroup>
                <FormGroup>
                  <FormInput type="text"
                             id="#personNumber" placeholder="პირადი ნომერი"
                             name='personNumber'
                             onBlur={handleBlur}
                             onChange={handleChange}
                             value={values.personNumber}
                  />
                  {/*{touched.email && errors.email && <p*/}
                  {/*  style={{color: 'red'}}>{errors.email}</p>}*/}

                </FormGroup>
                <div className={"mt-5"}>
                  <Button theme={'success'}
                          onClick={handleSubmit}
                          type={'submit'}
                    disabled={!isValid || !dirty}
                  >
                    დარეგისტრირება
                  </Button>

                </div>

              </Form>
            }}


          </Formik>
        </Card>


      </div>

    </Styles>

  );
};

let MapStateToProps = () => ({})
let MapDispatchToProps = (dispatch) => {
  return {
    newPost: (user) => {
      dispatch(setNewUser(user))
    }
  }
}
let RegisterContainer = connect(MapStateToProps, MapDispatchToProps)(Register)
export default RegisterContainer;
