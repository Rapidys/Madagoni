import React, {useEffect, useState} from 'react';
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import {Button, ModalBody} from "shards-react";
import MySelect from "../../../../MySelect/MySelect";
import API from "../../../../API/ApiBase";
import {useDispatch, useSelector} from "react-redux";
import {
  GetFinishDocument,
  setFinishOptionsAC,
  setSelectedDocIdAC
} from "../../../../Reducers/getDocReducer";
import {useParams} from "react-router-dom";

const FinishButtonModal = ({
                             finishCategories,
                             finishModal,
                             setFinishCategories
                           }) => {

  let params = useParams()
  let dispatch = useDispatch()
  let Options = useSelector((state => state.GetDoc.Options))


  let selectedDocId = useSelector(state => state.GetDoc.selectedDocId)
  let [finishDocType, setFinishDocType] = useState()
  useEffect(() => {
    API.FinishDocumentSelectTypes().then((response) => {
      dispatch(setFinishOptionsAC(response.data))
    })
  }, [])

  let onFinishChange = (e) => {
    setFinishDocType(e.target.value)
    dispatch(setSelectedDocIdAC(e.target.selectedIndex))
  }

  let finishDocument = () => {
    dispatch(GetFinishDocument(params.id, selectedDocId))
    setFinishCategories(false)
  }
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
            options={Options}
            onChange={onFinishChange}
            value={finishDocType}
          />

          <Button className={"mt-5"}
                  onClick={finishDocument}
          >
            დასრულება
          </Button>
        </ModalBody>
      </DialogContent>
    </Dialog>
  );
};

export default FinishButtonModal;
