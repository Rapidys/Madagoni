import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMessagePage} from "../../../API/sentDocumentService";
import AddNewPost from "../../../components/add-new-post/addNewPost";


const ChosenDocument = () => {


  let params = useParams()
  let pageId = params.id

  let dispatch = useDispatch()
  let chosen = useSelector(state => state.chosenDocument.currentMessagePage)


  useEffect(() => {
    dispatch(getMessagePage(pageId))
  }, [])

  const [documentTitle, setDocumentTitle] = useState('')
  const [documentBody, setDocumentBody] = useState('')

  let [chosenVisitor, setChosenVisitor] = useState([])
  let [chosenDestination, setChosenDestination] = useState([])

  let [documentType, setDocumentType] = useState()
  useMemo(() => {
    setDocumentTitle(chosen.documentTitle)
    setDocumentBody(chosen.documentBody)
  }, [chosen.documentTitle, chosen.documentBody])

  useMemo(() => {
    setDocumentType(chosen.documentType)
  }, [chosen])

  useMemo(() => {
    {
      chosen.documentMotions && chosen.documentMotions.forEach((item, i) => {
        if (item.motionTypeId === 2) return setChosenVisitor([...chosenVisitor, ...[item]]);
      })
    }
    {
      chosen.documentMotions && chosen.documentMotions.forEach((item, i) => {
        if (item.motionTypeId === 3) return setChosenDestination([...chosenDestination, ...[item]]);
      })
    }
  }, [chosen.documentMotions, pageId])

  let MotionStatus = useSelector(state => state.MotionStatus.motionStatus)

  return (
    <AddNewPost
      title={``}
      documentTitle={documentTitle}
      documentBody={documentBody}
      chosenVisitor={chosenVisitor}
      documentType={documentType}
      approve={MotionStatus === 3 ? 'lg-ml-3 xs-ml-0 border - 1' : 'd-none'}
      draftBtn={MotionStatus === 0 ? 'lg-ml-3 xs-ml-0 border - 1' : 'd-none'}
      addBtn={MotionStatus !== 3 ? 'lg-ml-3 xs-ml-0 border - 1' : 'd-none'}
      chosenDestination={chosenDestination}
      docId={`დოკუმენტის ნომერი :${chosen.documentId} `}
      Date={`${chosen.documentDate && chosen.documentDate.slice(0, 10)}`}
      isDisabledVisitor={true}
      isDisabledDestinate={true}
    />
  );
};


export default ChosenDocument;
