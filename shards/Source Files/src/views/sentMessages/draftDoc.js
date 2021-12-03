import React, {useEffect} from "react";
import DocumentPage from "../DraftMessages/Documents/DocumentPage";
import {getDraftDocs, getOnPageChange} from "../../API/sentDocumentService";
import {useDispatch, useSelector} from "react-redux";
import {
  rowsPerPageAc,
  setCurrentPageAC
} from "../../Reducers/PaginationReducer";
import {motionStatusAC} from "../../Reducers/MotionStatusReducer";
import {setVisibleBtnAC} from "../../Reducers/Comments/CommentsReducer";


const DraftDocuments = (props) => {

  let currentPage = useSelector(state => state.PaginationData.currentPage)
  let rowsPerPage = useSelector(state => state.PaginationData.rowsPerPage)
  let totalCount = useSelector(state => state.PaginationData.totalPages)


  let dispatch = useDispatch()
  useEffect(() => {

    dispatch(motionStatusAC(1))
    dispatch(getDraftDocs({
      MotionStatus: 1,
      PageNumber: currentPage,
      RecordsPerPage: rowsPerPage,
    }))
  }, [currentPage, rowsPerPage])
  useEffect(() => {
    dispatch(setCurrentPageAC(1));
    dispatch(setVisibleBtnAC(true))

  }, [])

  let drafts = useSelector(state => state.setDrafts.DraftDoc)



  return (
    <DocumentPage
      pageTitle={'დრაფტები'}
      pageName='/tables'
      Documents={drafts}

      totalCount={totalCount}
      rowsPerPage={rowsPerPage}
      currentPage={currentPage - 1}
    />
  )
};

export default DraftDocuments;
