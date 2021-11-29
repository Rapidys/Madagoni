import React, {useState} from 'react';
import {Button, Card, CardBody, Form, FormGroup, FormInput} from "shards-react";
import styled from "styled-components";
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LoadingAC, login} from "../../Reducers/AuthReducer";


let Styles = styled.div`
  .loginWrapper {
    max-width: 400px;
    margin: auto;
  }
`

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let dispatch = useDispatch()
  let SignIn = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }


  return (
    <Styles>
      <Card className="loginWrapper mt-5">
        <CardBody>
          <h3>Login</h3>
          <Form className="m-auto">
            <FormGroup>
              <label htmlFor="#username">Username</label>
              <FormInput id="#username" placeholder="Username"
                         value={email}
                         onChange={(e) => {
                           setEmail(e.target.value)
                         }}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#password">Password</label>
              <FormInput type="password" id="#password" placeholder="Password"

                         value={password}
                         onChange={(e) => {
                           setPassword(e.target.value)
                         }}
              />
            </FormGroup>
            <Button theme="secondary"
                    onClick={SignIn}
            >
              Sign In
            </Button>
            <Link to='/register'>
              <Button className={"ml-3"}>Register</Button>
            </Link>
          </Form>
        </CardBody>

      </Card>
    </Styles>

  );
};

export default Login;
