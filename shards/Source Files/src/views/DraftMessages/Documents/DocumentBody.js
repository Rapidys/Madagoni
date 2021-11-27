import React from 'react';
import {Card, CardBody, Col, Row} from "shards-react";
import {useHistory, useParams} from "react-router-dom/cjs/react-router-dom";
import {useSelector} from "react-redux";

const DocumentBody = (props) => {

  let router = useHistory()


  return (
    <CardBody className="p-0 pb-3">
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


        {props.Documents.map(Mess => {
          return (
            <tr className={"messWrapper"}
                onClick={() => router.push(`${props.pageName}/${Mess.documentId}`)}
                key={Mess.documentId}
            >
              <td>{Mess.documentId}</td>
              <td>{Mess.documentDate}</td>
              <td>{Mess.documentTitle}</td>
              <td>{Mess.documentType}</td>


            </tr>
          )
        })}
        </tbody>

      </table>

    </CardBody>
  );
};

export default DocumentBody;
