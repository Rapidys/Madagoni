import React from 'react';
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import {Button, ModalBody} from "shards-react";
import MySelect from "../../../../MySelect/MySelect";
import {useDispatch, useSelector} from "react-redux";
import {setIsFinishedAC} from "../../../../Reducers/getDocReducer";

const FinishMessage = () => {
  let isFinished = useSelector(state => state.GetDoc.isFinished)
  let dispatch = useDispatch()

  let onClose = () => {
    dispatch(setIsFinishedAC(false))
  }
  return (
    <Dialog
      open={isFinished}
      onClose={onClose}
      fullWidth={true}
      maxWidth={"sm"}
    >
      <DialogTitle>დასრულება</DialogTitle>
      <DialogContent>
        <ModalBody>
          <i className="fas fa-check-circle"
             style={{color: 'green', fontSize: '30px'}}/>
          <span
            className={"ml-2"}>  წარმატებით დასრულდა </span>

        </ModalBody>
      </DialogContent>

    </Dialog>
  );
};

export default FinishMessage;
