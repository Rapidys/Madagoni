import React, {useRef, useState} from 'react';
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
      id: Date.now(),
      col: true
    }
    setColCount([...ColCount, newCol])


  }
  let ref = useRef()

  let addRow = () => {
    let html = ''

    for (let i = 0; i < ColCount.length; i++) {
      html += `
      <tr>
        <td className={'border'}>
          <input type="text"/>
        </td>
      </tr>
      `

    }
    ref.current.innerHTML += `${html} <br />`
    setRowCount([html])
    console.log(html)
  }

  return (
    <Styles>
      <CardBody>
        <table>
          <thead className="thead bg-light">
          {/*<tr>*/}
          {/*  <th scope="col" className="border-0">*/}
          {/*    1*/}
          {/*  </th>*/}
          {/*  <th scope="col" className="border-0">*/}
          {/*    2*/}
          {/*  </th>*/}
          {/*  <th scope="col" className="border-0">*/}
          {/*    3*/}
          {/*  </th>*/}
          {/*  <th scope="col" className="border-0">*/}
          {/*    4*/}
          {/*  </th>*/}
          {/*</tr>*/}
          </thead>
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
          <div ref={ref}>
          </div>
        </table>
        <Button
          onClick={addCol}
        >სვეტი</Button>
        <Button
          onClick={addRow}
        >რიგი</Button>
      </CardBody>

    </Styles>

  )
    ;
};

export default MakeFiles;
