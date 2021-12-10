import React, {useState} from 'react';
import {Button, CardBody} from "shards-react";
import styled from "styled-components";

let Styles = styled.div`
  .Btns {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    text-align: center;
    //position: absolute;
  }
`

const MakeFiles = () => {


  let [ColCount, setColCount] = useState([
    {id: 1,}
  ])
  let [rowCount, setRowCount] = useState([])
  let addCol = () => {
    let newCol = {
      id: Date.now()
    }
    setColCount([...ColCount, newCol])
  }
  let addRow = () => {

    setRowCount([...rowCount, ...ColCount])
  }

  let deleteInputs = () => {
    let newCol = {
      id: Date.now(),
      col: true
    }
    setColCount([newCol])
  }
  return (
    <Styles>
      <CardBody>
        <table className="bg-light">
          <tbody className={'d-flex'}>
          {ColCount.map(() => {
            return (
              <tr>
                <td className={'border'}>
                  <input type="text"/>
                </td>
              </tr>
            )
          })}
          </tbody>
          <tbody className={'d-flex'}>
          {rowCount.map(() => {
            return (
              <tr>
                <td className={'border'}>
                  <input type="text"/>
                </td>
              </tr>
          )
          })}
          </tbody>
        </table>

        <Button
          onClick={addCol}
        >სვეტი</Button>
        <Button
          onClick={addRow}
        >rigi</Button>

        <Button
          onClick={deleteInputs}
        >წაშლა</Button>
      </CardBody>

    </Styles>

  )
    ;
};

export default MakeFiles;
