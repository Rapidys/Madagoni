import React, {useState} from 'react';
import {Button, Form, FormGroup, FormInput} from "shards-react";
import styled from "styled-components";
import {Formik} from "formik";
import * as yup from 'yup';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setNewUser} from "../../Reducers/registerReducer";

let Styles = styled.div`
  .loginWrapper {
    max-width: 600px;
    margin: auto;
  }
`

const Register = (props) => {

  const validationSchema = yup.object().shape({
    firstName: yup.string().typeError('Need To Be String').required('Required'),
    lastName: yup.string().typeError('Need To Be String').required('Required'),
    email: yup.string().email(),
    // password: yup.string().typeError('Need To Be String').required('Required'),
    // ConfirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords Dont Match').required('Required')
  })

  let [isActive, setIsActive] = useState(false)
  return (
    <Styles>
      <div className={"loginWrapper mt-5"}>
        <h3>Register</h3>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
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
            return <Form>
              <FormGroup>
                <label htmlFor="#text">firstName</label>
                <FormInput
                  type='text'
                  id="#firstName"
                  placeholder="firstName"
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
                <label htmlFor="#text">LastName</label>
                <FormInput type="text"
                           id="#lastName"
                           placeholder="lastName"
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
                <label htmlFor="#email">Email</label>
                <FormInput type="email"
                           id="#email" placeholder="email"
                           name='email'
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={values.email}
                />
                {touched.email && errors.email && <p
                  style={{color: 'red'}}>{errors.email}</p>}

              </FormGroup>
              {/*<FormGroup>*/}
              {/*  <label htmlFor="#password">Password</label>*/}
              {/*  <FormInput type="password"*/}
              {/*             id="#password"*/}
              {/*             placeholder="Password"*/}
              {/*             name='password'*/}
              {/*             onBlur={handleBlur}*/}
              {/*             onChange={handleChange}*/}
              {/*             value={values.password}*/}
              {/*             isValid={touched.password && !errors.password}*/}
              {/*  />*/}
              {/*  {touched.password && errors.password &&*/}
              {/*  <p*/}
              {/*    style={{color: 'red'}}*/}
              {/*  >{errors.password}</p>}*/}

              {/*</FormGroup>*/}
              {/*<FormGroup>*/}
              {/*  <label htmlFor="#password">ConfirmPassword</label>*/}
              {/*  <FormInput type="password"*/}
              {/*             id="#ConfirmPassowrd"*/}
              {/*             placeholder="ConfirmPassword"*/}
              {/*             name='ConfirmPassword'*/}
              {/*             onBlur={handleBlur}*/}
              {/*             onChange={handleChange}*/}
              {/*             value={values.ConfirmPassword}*/}
              {/*             isValid={touched.ConfirmPassword && !errors.ConfirmPassword}*/}
              {/*  />*/}
              {/*  {touched.ConfirmPassword && errors.ConfirmPassword &&*/}
              {/*  <p style={{color: 'red'}}>*/}
              {/*    {errors.ConfirmPassword}</p>}*/}

              {/*</FormGroup>*/}
              <div className={"mt-5"}>
                <Button theme={'success'}
                        onClick={handleSubmit}
                        type={'submit'}
                  // disabled={!isValid && !dirty}
                >
                  Register
                </Button>
                <Link to='/login'>
                  <Button className={"ml-3"}

                  >Sign In</Button>
                </Link>
              </div>

            </Form>
          }}


        </Formik>

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
