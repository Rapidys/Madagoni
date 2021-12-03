import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOnPageChange} from "../../API/sentDocumentService";
import DocumentPage from "./Documents/DocumentPage";
import {
  setCurrentPageAC
} from "../../Reducers/PaginationReducer";
import {motionStatusAC} from "../../Reducers/MotionStatusReducer";
import {setVisibleBtnAC} from "../../Reducers/Comments/CommentsReducer";


const SentDocuments = () => {
  let dispatch = useDispatch()

  let currentPage = useSelector(state => state.PaginationData.currentPage)
  let rowsPerPage = useSelector(state => state.PaginationData.rowsPerPage)
  let totalCount = useSelector(state => state.PaginationData.totalPages)

  useEffect(() => {
    dispatch(motionStatusAC(2))
    dispatch(getOnPageChange({
      MotionStatus: 2,
      PageNumber: currentPage,
      RecordsPerPage: rowsPerPage,
    }))
  }, [rowsPerPage, currentPage])
  useEffect(() => {
    dispatch(setCurrentPageAC(1));
    dispatch(setVisibleBtnAC(true))
  }, [])

  let sentDocs = useSelector(state => state.sentDocuments.sentDoc)


  return (
    <>
      <DocumentPage
        pageTitle={'გაგზავნილები'}
        pageName='/tables'
        Documents={sentDocs}
        totalCount={totalCount}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage - 1}

      />
    </>

  )
};

export default SentDocuments;
