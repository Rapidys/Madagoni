import React, {useState} from 'react';
import {CardBody} from "shards-react";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import RightClickMenu from "../../../RightClick/RightClickMenu";
import {uniqueIdAC} from "../../../Reducers/chosenDocumentReducer";
import {useDispatch} from "react-redux";
import styled from "styled-components";

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
              #
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
              <tr className={"messWrapper"}
                  onClick={() => {
                    router.push(`${props.pageName}/${Mess.documentId}`)
                    setShowMenu(false)
                  }}
                  key={Mess.documentId}
                  onContextMenu={(e) => contextMenu(e, Mess.documentId)}
                  id={Mess.documentId}
              >
                <th scope="row" className={"resTtd"}>{Mess.documentId}</th>
                <td className={"resTtd"}>{Mess.documentDate}</td>
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
