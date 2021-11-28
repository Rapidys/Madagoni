import React, {useState} from 'react';
import {CardBody} from "shards-react";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import RightClickMenu from "../../../RightClick/RightClickMenu";
import {uniqueIdAC} from "../../../Reducers/chosenDocumentReducer";
import {useDispatch} from "react-redux";

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
    <CardBody className="p-0 pb-3">
      <RightClickMenu showMenu={showMenu} x={x} y={y}/>

      <table className="table mb-0">
        <thead className="bg-light">
        <tr>
          <th scope="col-1" className="border-0">
            დოკუმენტის ნომერი
          </th>
          <th scope="col-2" className="border-0">
            დოკუმენტის თარიღი
          </th>
          <th scope="col-2" className="border-0">
            დოკუმენტის თემა
          </th>
          <th scope="col-5" className="border-0">
            ავტორი
          </th>

        </tr>
        </thead>
        <tbody>


        {props.Documents.map((Mess, index) => {
          return (
            <>
              <tr className={"messWrapper"}
                  onClick={() => {
                    router.push(`${props.pageName}/${Mess.documentId}`)
                    setShowMenu(false)
                  }}
                  key={Mess.documentId}
                  onContextMenu={(e) => contextMenu(e, Mess.documentId)}
                  id={Mess.documentId}
              >

                <td>{Mess.documentId}</td>
                <td>{Mess.documentDate}</td>
                <td>{Mess.documentTitle}</td>
                <td>{Mess.documentType}</td>


              </tr>
            </>

          )
        })}
        </tbody>

      </table>

    </CardBody>
  );
};

export default DocumentBody;
