import React, {useState} from 'react';
import MakeFiles from "./makeFiles";
import {Button, CardHeader, Col, Container, Row} from "shards-react";
import {Card} from "@material-ui/core";
import Column from "./Column";

const Files = () => {


  return (
    <Container fluid className="main-content-container px-4">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              ფაილები
            </CardHeader>
            <MakeFiles/>


          </Card>
        </Col>
      </Row>
    </Container>

  );
};

export default Files;
