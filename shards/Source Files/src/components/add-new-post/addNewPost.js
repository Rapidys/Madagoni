import React from 'react';
import {Col, Container, Row} from "shards-react";
import SidebarActions from "./sideBarAction/SidebarActions";
import Editor from "./editor/Editor";
import PageTitle from "../common/PageTitle";

const AddNewPost = ({
                      title,
                      setDocumentTitle,
                      documentTitle,
                      setDocumentBody,
                      documentBody,
                      chosenVisitor,
                      setChosenVisitor,
                      documentType,
                      approve,
                      setVisible,
                      chosenDestination,
                      setChosenDestination,
                      draftBtn,
                      addBtn,
                      docId,
                      Date,
                      isDisabledVisitor,
                      isDisabledDestinate
                    }) => {

  debugger
  return (
    <Container fluid className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header">
        <PageTitle sm="12" title={title}
                   className="text-sm-left p-1"/>
        {/*subtitle="Blog Posts"*/}
      </Row>
      <Row>

        {/* Editor */}
        <Col lg="9" md="12">
          <Editor
            setDocumentTitle={setDocumentTitle}
            documentTitle={documentTitle}
            setDocumentBody={setDocumentBody}
            documentBody={documentBody}
            approve={approve}
            draftBtn={draftBtn}
            addBtn={addBtn}
          />
        </Col>


        {/* Sidebar Widgets */}
        <Col lg="3" md="12">

          <SidebarActions
            chosenVisitor={chosenVisitor}
            setChosenVisitor={setChosenVisitor}
            documentType={documentType}
            setVisible={setVisible}
            chosenDestination={chosenDestination}
            setChosenDestination={setChosenDestination}
            docId={docId}
            Date={Date}
            isDisabledVisitor={isDisabledVisitor}
            isDisabledDestinate={isDisabledDestinate}
          />
          {/*<SidebarCategories />*/}
        </Col>
      </Row>
    </Container>

  );
};

export default AddNewPost;
