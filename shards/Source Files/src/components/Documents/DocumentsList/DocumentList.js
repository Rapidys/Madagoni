import React from 'react';
import {Container, Row, Col} from "shards-react";
import {DocBody} from "../../../data/DocumentBody";

const DocumentList = () => {
  return (

    <Container>
      {DocBody.map(body => {
        return <Row className={" p-4 border text-center"} key={body.id} onClick = {()=>{alert('sss')}}>


          {/*<Col className={"border-right d-flex"} lg='3'>*/}
            <Col>
              {body.id} . {body.data}
            </Col>
            <Col>
               {body.docNumber}
            </Col>
            <Col>
              {body.Description}
            </Col>
            <Col>
              {body.id} . {body.data}
            </Col>
            <Col>
              {body.id} . {body.data}
            </Col>

          {/*</Col>*/}


        </Row>
      })}
    </Container>
  );
};

export default DocumentList;
