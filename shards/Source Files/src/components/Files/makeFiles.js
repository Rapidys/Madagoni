import React, {useState} from 'react';
import {Button, CardBody} from "shards-react";

const MakeFiles = () => {


  let [ColCount, setColCount] = useState([
    {id: 1,}
  ])
  let [rowCount, setRowCount] = useState([])
  let addCol = () => {
    let newCol = {
      id: Date.now(),
      col: true
    }
    setColCount([...ColCount, newCol])
  }
  let addRow = () => {
    let newRow = {
      id: Date.now(),
    }
    setRowCount([...ColCount])
  }
  return (

    <CardBody>
      <table>
        <thead className="thead bg-light">
        <tr>
          <th scope="col" className="border-0">
            1
          </th>
        </tr>
        </thead>

        <tbody className={'d-flex'}>
        {ColCount.map(() => {
          return <tr>
            <td className={'border'}>
              <input type="text"/>
            </td>
          </tr>
        })}
        {rowCount.map(() => {
          return <tr>
            <td className={'border'}>
              <input type="text"/>
            </td>
          </tr>

        })}
        </tbody>


      </table>
      <Button
        onClick={addCol}
      >სვეტის დამატება</Button>

      <Button
        className={'ml-2'}
        onClick={addRow}
      >
        რიგის დამატება
      </Button>

    </CardBody>

  )
    ;
};

export default MakeFiles;
