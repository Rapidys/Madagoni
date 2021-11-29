import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOnPageChange} from "../../API/sentDocumentService";
import DocumentPage from "./Documents/DocumentPage";
import {
  rowsPerPageAc,
  setCurrentPageAC
} from "../../Reducers/PaginationReducer";
import {motionStatusAC} from "../../Reducers/MotionStatusReducer";
import RightClick from "../../RightClick/RightClick";

const SentDocuments = (props) => {
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
