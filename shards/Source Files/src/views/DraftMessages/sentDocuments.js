import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DocumentPage from "./Documents/DocumentPage";
import {
  setCurrentPageAC
} from "../../Reducers/PaginationReducer";
import {motionStatusAC} from "../../Reducers/MotionStatusReducer";
import {setVisibleBtnAC} from "../../Reducers/Comments/CommentsReducer";
import {getDocs} from "../../API/sentDocumentService";
import {approveBtnAC, setFinishDocAC} from "../../Reducers/getDocReducer";
import Preloader from "../../Preloader/Preloader";
import {isSendedAC} from "../../Reducers/addNewPost/addNewPostReducer";
import DocCreateModal
  from "../../components/add-new-post/editor/BtnModals/docCreateModal";


const SentDocuments = () => {
  let dispatch = useDispatch()

  let currentPage = useSelector(state => state.PaginationData.currentPage)
  let rowsPerPage = useSelector(state => state.PaginationData.rowsPerPage)
  let totalCount = useSelector(state => state.PaginationData.totalPages)

  useEffect(() => {
    dispatch(motionStatusAC(2))
    dispatch(getDocs({
      MotionStatus: 2,
      PageNumber: currentPage,
      RecordsPerPage: rowsPerPage,
    }))
  }, [rowsPerPage, currentPage])
  useEffect(() => {
    dispatch(setCurrentPageAC(1));
    dispatch(setVisibleBtnAC(true))
    dispatch(setFinishDocAC(false))
    dispatch(approveBtnAC(false))
    dispatch(isSendedAC(false)) // doc gagzavnis shemdeg redirectis gauqmeba
    if (isSended === true) {
      setOpen(true)
    }
  }, [])

  let sentDocs = useSelector(state => state.GetDoc.documents)
  let isSended = useSelector(state => state.addNewPost.isSended)


  let getDocumentId = useSelector(state => state.addNewPost.documentId)
  let getDocumentDate = useSelector(state => state.addNewPost.documentDate)


  const [open, setOpen] = useState(false)
  let close = () => {
    setOpen((e) => !e)
  }

  return (

    open === true
      ? <DocCreateModal getDocumentDate={getDocumentDate}
                        getDocumentId={getDocumentId}
                        open={open}
                        close={close}
      />
      : <DocumentPage
        pageTitle={'????????????????????????????????????'}
        pageName='/sentDocument'
        Documents={sentDocs}
        totalCount={totalCount}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage - 1}

      />


  )
};

export default SentDocuments;
