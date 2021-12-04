import React, {useEffect, useMemo} from "react";
import DocumentPage from "../DraftMessages/Documents/DocumentPage";
import {
  getIncomingDocs,
} from "../../API/sentDocumentService";
import {useDispatch, useSelector} from "react-redux";
import {
  rowsPerPageAc,
  setCurrentPageAC
} from "../../Reducers/PaginationReducer";
import {motionStatusAC} from "../../Reducers/MotionStatusReducer";
import {newDocs} from "../../Reducers/chosenDocumentReducer";
import Preloader from "../../Preloader/Preloader";
import {setVisibleBtnAC} from "../../Reducers/Comments/CommentsReducer";
import {setFinishDocAC} from "../../Reducers/IncomingDocumentsReducer";


const IncomingDocuments = (props) => {

  let currentPage = useSelector(state => state.PaginationData.currentPage)
  let rowsPerPage = useSelector(state => state.PaginationData.rowsPerPage)
  let totalCount = useSelector(state => state.PaginationData.totalPages)


  let dispatch = useDispatch()


  useEffect(() => {
    dispatch(motionStatusAC(5))
    dispatch(getIncomingDocs({
      MotionStatus: 5,
      PageNumber: currentPage,
      RecordsPerPage: rowsPerPage,
    }))
  }, [currentPage, rowsPerPage])


  let incomings = useSelector(state => state.IncomingDocument.incomingDoc)

  useEffect(() => {
    dispatch(setCurrentPageAC(1));
    dispatch(setVisibleBtnAC(true))
    dispatch(setFinishDocAC(true))
  }, [])


  return (
    <DocumentPage
      pageTitle={'მიღებულები'}
      pageName='/tables'
      Documents={incomings}
      totalCount={totalCount}
      rowsPerPage={rowsPerPage}
      currentPage={currentPage - 1}

    />
  )
};

export default IncomingDocuments;
