import React from 'react';
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import {Button, ModalBody} from "shards-react";
import MySelect from "../../../../MySelect/MySelect";

const FinishButtonModal = ({finishCategories, finishModal}) => {
  return (
    <Dialog
      open={finishCategories}
      onClose={finishModal}
      fullWidth={true}
      maxWidth={"sm"}
    >
      <DialogTitle>დასრულება</DialogTitle>
      <DialogContent>
        <ModalBody>
          <MySelect
            defaultValue={'დასრულების ტიპი'}
            options={[
              {referenceId: 1, displayName: 'დავასრულე'},
              {referenceId: 2, displayName: 'გავეცანი'},
            ]}
          />

          <Button className={"mt-5"}
                  onClick={finishModal}
          >
            დასრულება
          </Button>
        </ModalBody>
      </DialogContent>

    </Dialog>
  );
};

export default FinishButtonModal;
