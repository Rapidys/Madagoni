import React from 'react';
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import {ModalBody} from "shards-react";


const MyModal = ({open, onClose, maxWidth, children,title}) => {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth={maxWidth}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <ModalBody>
          {children}
        </ModalBody>
      </DialogContent>
    </Dialog>
  );
};

export default MyModal;
