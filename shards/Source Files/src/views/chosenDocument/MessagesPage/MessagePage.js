import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMessagePage} from "../../../API/sentDocumentService";
import AddNewPost from "../../../components/add-new-post/addNewPost";
import MotionTypeFiltering from "../../motionTypeFiltering/motionTypeFiltering";
import {setVisibleBtnAC} from "../../../Reducers/Comments/CommentsReducer";
import {setCounter} from "../../../Reducers/folderCountersReducer";


const ChosenDocument = () => {
  let params = useParams()
  let pageId = params.id

  let dispatch = useDispatch()
  let chosen = useSelector(state => state.chosenDocument.currentMessagePage)

  useEffect(() => {
    dispatch(getMessagePage(pageId))
    dispatch(setVisibleBtnAC(true))
    dispatch(setCounter())
  }, [pageId])


  const [documentTitle, setDocumentTitle] = useState('')
  const [documentBody, setDocumentBody] = useState('')
  const [chosenDestination, setchosenDestination] = useState([])
  const [chosenVisitor, setchosenVisitor] = useState([])


  useMemo(() => {
    setchosenDestination([])
    setchosenVisitor([])
  }, [pageId])

  let [documentType, setDocumentType] = useState()
  useMemo(() => {
    setDocumentTitle(chosen.documentTitle || '')
    setDocumentBody(chosen.documentBody)
    setDocumentType(chosen.documentType)
    MotionTypeFiltering(chosen, chosenDestination, chosenVisitor)
  }, [chosen])


  let MotionStatus = useSelector(state => state.MotionStatus.motionStatus)

  return (
    <AddNewPost
      title={``}
      chosenVisitor={chosenVisitor}
      chosenDestination={chosenDestination}
      documentTitle={documentTitle}
      documentBody={documentBody}
      documentType={documentType}
      approve={MotionStatus === 3 ? 'lg-ml-3 xs-ml-0 border - 1' : 'd-none'}
      draftBtn={MotionStatus === 0 ? 'lg-ml-3 xs-ml-0 border - 1' : 'd-none'}
      addBtn={MotionStatus !== 3 ? 'lg-ml-3 xs-ml-0 border - 1' : 'd-none'}
      docId={`დოკუმენტის ნომერი :${chosen.documentId} `}
      Date={`${chosen.documentDate && chosen.documentDate.slice(0, 10)}`}
      isDisabledVisitor={true}
      isDisabledDestinate={true}
      readOnly={true}
      titleReadOnly={true}
    />
  );
};


export default ChosenDocument;
