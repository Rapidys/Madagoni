import React from 'react';
import {Col, Container, Row} from "shards-react";
import {DocTitles} from "../../../data/Document-Titles";

const DocHeaderTitles = () => {
  return (
    <Container>
      <Row className={"p-5 mt-4"}>
        {DocTitles.map(titles => {
          return <Col className={"border p-3 text-center"} key={titles.id}>
            {titles.value}
          </Col>
        })}
      </Row>

    </Container>
  );
};

export default DocHeaderTitles;
