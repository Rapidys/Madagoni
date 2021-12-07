import React from 'react';
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import {ModalBody} from "shards-react";

const DocCreateModal = ({getDocumentDate, getDocumentId, open, close}) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      fullWidth={true}
      maxWidth={"sm"}
    >
      <DialogTitle>დოკუმენტის ნომერი : {getDocumentId}</DialogTitle>
      <DialogContent>
        <ModalBody className={"d-flex align-items-center"}>
          <i className="fas fa-check-circle"
             style={{color: 'green', fontSize: '30px'}}/>


          <span
            className={"ml-2"}>დოკუმენტის შექმნის თარიღი : {getDocumentDate && getDocumentDate.slice(0, 10)}</span>

        </ModalBody>
      </DialogContent>

    </Dialog>
  );
};

export default DocCreateModal;
