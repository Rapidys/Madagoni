import React, {useEffect} from 'react';
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMessagePage} from "../../../API/sentDocumentService";

const ChosenDocument = (props) => {


  let params = useParams()
  let pageId = params.id

  let dispatch = useDispatch()
  let chosen = useSelector(state => state.chosenDocument.currentMessagePage)

  useEffect(() => {
    debugger
    dispatch(getMessagePage(params.id))
  }, [pageId])

  return (
    <div>
      <h1>{chosen.documentId}:{chosen.documentTitle}</h1>
      <span>{chosen.documentBody}</span>
    </div>
  );
};


export default ChosenDocument;
