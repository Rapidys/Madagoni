import React, {useState} from 'react';
import {CardBody} from "shards-react";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import RightClickMenu from "../../../RightClick/RightClickMenu";
import {uniqueIdAC} from "../../../Reducers/chosenDocumentReducer";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {setCounter} from "../../../Reducers/folderCountersReducer";

let Styles = styled.div`
  @media screen and (max-width: 500px) {
    .resTtd {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 470px) {
    .resTtd {
      font-size: 8px;
    }

    @media screen and (max-width: 337px) {
      .resTtd {
        font-size: 6px;
      }
    }

`

const DocumentBody = (props) => {

  let router = useHistory()


  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [showMenu, setShowMenu] = useState(false)


  let dispatch = useDispatch()

  let contextMenu = (e, id) => {
    e.preventDefault()
    setX(e.pageX - 250)
    setY(e.pageY - 60)

    setShowMenu(true)
    dispatch(uniqueIdAC(id))
  }
  window.addEventListener('click', () => {
    setShowMenu(false)
  })


  return (
    <Styles>
      <CardBody className="p-0 pb-3">
        <RightClickMenu showMenu={showMenu} x={x} y={y}/>

        <table className="table mb-0">
          <thead className="thead bg-light">
          <tr>
            <th scope="col" className="resTtd border-0">
              დოკ. <br/> ნომერი
            </th>
            <th scope="col" className="resTtd border-0">
              დოკუმენტის თარიღი
            </th>
            <th scope="col" className="resTtd border-0">
              დოკუმენტის თემა
            </th>
            <th scope="col" className="resTtd border-0">
              ავტორი
            </th>

          </tr>
          </thead>
          <tbody>


          {props.Documents.map((Mess, index) => {
            return (
              <tr
                className={Mess.isNew === true ? 'font-weight-bold  messWrapper' : 'messWrapper'}
                onClick={() => {
                  router.push(`${props.pageName}/${Mess.documentId}`)
                  setShowMenu(false)
                }}
                key={index}
                onContextMenu={(e) => contextMenu(e, Mess.documentId)}
                id={Mess.documentId}
                style={{
                  backgroundColor: Mess.documentColorId === 1 && '#ffcccc' ||
                    Mess.documentColorId === 2 && '#fff2cc' || Mess.documentColorId === 3 && '#ccffcc'
                }}

              >
                <td className={"resTtd"}>{Mess.documentId}</td>
                <td className={"resTtd"}>{Mess.documentDate.slice(0, 10)}</td>
                <td className={"resTtd"}>{Mess.documentTitle}</td>
                <td className={"resTtd"}>{Mess.documentType}</td>


              </tr>


            )
          })}
          </tbody>

        </table>

      </CardBody>
    </Styles>

  );
};

export default DocumentBody;
