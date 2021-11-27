import React from 'react';
import {Card, CardHeader, Col, Container, Row} from "shards-react";
import DocumentBody
  from "./DocumentBody";
import Pagination from "../../../Pagination/Pagination";
import styled from "styled-components";

const DocumentPage = ({pageTitle, pageName, Documents, ...props}) => {
  let Styles = styled.div`
    .messWrapper:hover {
      background: #00a2bf;
    }
  `
  return (
    <Styles>
      <Container fluid className="main-content-container px-4">
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0 text-black">{pageTitle}</h6>
              </CardHeader>
              <DocumentBody pageName={pageName}
                            Documents={Documents}

              />
              <Pagination
                handleChangePage={props.handleChangePage}
                handleChangeRowsPerPage={props.handleChangeRowsPerPage}
                totalCount={props.totalCount}
                rowsPerPage={props.rowsPerPage}
                currentPage={props.currentPage}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default DocumentPage;
