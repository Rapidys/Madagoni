import React from 'react';
import {Dialog, DialogContent} from "@material-ui/core";
import {ModalBody} from "shards-react";

const SignDocumentModal = ({openSign, closeSign}) => {
  return (
    <Dialog
      open={openSign}
      onClose={closeSign}
      fullWidth={true}
      maxWidth={"sm"}
    >

      <DialogContent>
        <ModalBody>
          <i className="fas fa-check-circle"
             style={{color: 'green', fontSize: '30px'}}/>
          <span
            className={"ml-2"}>დოკუმენტი წარმატებით დავიზირდა</span>
        </ModalBody>
      </DialogContent>

    </Dialog>
  );
};

export default SignDocumentModal;
