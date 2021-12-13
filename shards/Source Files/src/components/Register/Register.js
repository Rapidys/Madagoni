import React, {useState} from 'react';
import {Button, Card, CardBody, CardHeader, Container} from "shards-react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import TreeList from "./RgisterTree/RTreeList";
import MyModal from "../MyModal/MyModal";
import {setNewUser} from "../../Reducers/registerReducer";
import {TreeDataAC} from "../../Reducers/TreeDataReducer";


let Styles = styled.div`
  .loginWrapper {
    max-width: 1000px;
    margin: 60px auto;
    padding: 20px;
    box-sizing: border-box;

  }
`
const Register = () => {
  let [values, setValues] = useState({name: '', lastName: '', email: '',})
  let [valueFromTree, setValueFromTree] = useState([])
  let [open, SetOpen] = useState(false)
  let onClose = (e) => SetOpen(e => !e)
  let treeData = useSelector((state => state.Tree.Structure))

  let getValueFromTree = (value) => {
    setValueFromTree(value)
  }
  let dispatch = useDispatch()
  let addUser = () => {
    let newUser = {
      userId: 0,
      firstName: values.name,
      lastName: values.lastName,
      email: values.email,
      isActive: true,
      departmentId: valueFromTree.departmentId,
      department: null,
      positionid: 1,
      position: null
    }


    console.log([...valueFromTree.employes, newUser])

    // dispatch(setNewUser([treeData]))

  }


  return (
    <Styles>
      <Container className={'loginWrapper'}>
        <Card>
          <CardHeader>
            <Button>
              დეპარტამენტის დამატება
            </Button>

          </CardHeader>
          <CardBody>
            <TreeList treeData={treeData}
                      SetOpen={SetOpen}
                      getValueFromTree={getValueFromTree}
            />

            <MyModal
              open={open}
              onClose={onClose}
            >
              <input
                type="text"
                placeholder={'სახელი'}
                value={values.name}
                onChange={(e) => {
                  setValues({...values, name: e.target.value})
                }}
              />
              <input
                type="text" placeholder={'გვარი'}
                className={'ml-2'}
                value={values.lastName}
                onChange={(e) => {
                  setValues({...values, lastName: e.target.value})
                }}
              />
              <input
                type="text" placeholder={'ელ-ფოსტა'}
                className={'mt-2'}
                value={values.email}
                onChange={(e) => {
                  setValues({...values, email: e.target.value})
                }}
              />
              <br/>
              <Button className={'mt-3'}

                      onClick={addUser}
              >
                დამატება
              </Button>
            </MyModal>
          </CardBody>
        </Card>
      </Container>
    </Styles>

  );
};

export default Register;
