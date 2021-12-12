import React, {useState} from 'react';
import RegisterDepartment from "./RegisterDepartment";
import MySelect from "../../MySelect/MySelect";
import {Card, Container} from "shards-react";
import styled from "styled-components";


let Styles = styled.div`
  .loginWrapper {
    max-width: 600px;
    margin: 60px auto;
    padding: 20px;
    box-sizing: border-box;

  }
`

const Register = () => {

  let [registerType, setRegisterType] = useState([
    {id: 1, displayName: 'დეპარტამენტი'},
    {id: 2, displayName: 'იუზერი'}
  ])
  let [registerValue, setRegisterValue] = useState('')

  let onRegisterChange = (e) => {
    setRegisterValue(e.target.value)
  }

  return (
    <Styles>
      <Container className={'loginWrapper'}>
        <Card>
          <h3 className={'p-3'}>რეგისტრაცია</h3>

          <div>
            <MySelect
              defaultValue={'აირჩიეთ'}
              options={registerType}
              value={registerValue}
              onChange={onRegisterChange}
            />
            {registerValue === 'დეპარტამენტი'
              ? <RegisterDepartment/>
              : <div>123</div>
            }
          </div>
        </Card>
      </Container>
    </Styles>

  );
};

export default Register;
