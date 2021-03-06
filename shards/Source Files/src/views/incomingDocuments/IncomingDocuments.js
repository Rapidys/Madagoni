import React, {useCallback, useEffect, useMemo} from "react";
import DocumentPage from "../DraftMessages/Documents/DocumentPage";
import {
  getDocs,
} from "../../API/sentDocumentService";
import {useDispatch, useSelector} from "react-redux";
import {
  setCurrentPageAC
} from "../../Reducers/PaginationReducer";
import {motionStatusAC} from "../../Reducers/MotionStatusReducer";
import {setVisibleBtnAC} from "../../Reducers/Comments/CommentsReducer";
import {approveBtnAC} from "../../Reducers/getDocReducer";
import DocCreateModal
  from "../../components/add-new-post/editor/BtnModals/docCreateModal";


const IncomingDocuments = () => {

  let currentPage = useSelector(state => state.PaginationData.currentPage)
  let rowsPerPage = useSelector(state => state.PaginationData.rowsPerPage)
  let totalCount = useSelector(state => state.PaginationData.totalPages)


  let dispatch = useDispatch()


  useEffect(() => {
    dispatch(motionStatusAC(5))
    dispatch(getDocs({
      MotionStatus: 5,
      PageNumber: currentPage,
      RecordsPerPage: rowsPerPage,
    }))
  }, [currentPage, rowsPerPage])

  let incomings = useSelector(state => state.GetDoc.documents)


  useEffect(() => {
    dispatch(setCurrentPageAC(1));
    dispatch(setVisibleBtnAC(true))
    dispatch(approveBtnAC(false))
  }, [])

  return (



  <DocumentPage
    pageTitle={'მიღებულები'}
    pageName='/incomingDocument'
    Documents={incomings}
    totalCount={totalCount}
    rowsPerPage={rowsPerPage}
    currentPage={currentPage - 1}
  />




  )
};

export default IncomingDocuments;
