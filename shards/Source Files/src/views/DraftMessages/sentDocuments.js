import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOnPageChange} from "../../API/sentDocumentService";
import DocumentPage from "./Documents/DocumentPage";
import {
  rowsPerPageAc,
  setCurrentPageAC
} from "../../Reducers/PaginationReducer";

const SentDocuments = (props) => {
  let dispatch = useDispatch()

  let currentPage = useSelector(state => state.PaginationData.currentPage)
  let rowsPerPage = useSelector(state => state.PaginationData.rowsPerPage)
  let totalCount = useSelector(state => state.PaginationData.totalPages)

  useEffect(() => {
    dispatch(getOnPageChange({
      MotionStatus: 2,
      PageNumber: currentPage,
      RecordsPerPage: rowsPerPage,
    }))
  }, [rowsPerPage, currentPage])
  let sentDocs = useSelector(state => state.sentDocuments.sentDoc)


  const handleChangePage = (event, newPage) => {
    dispatch(setCurrentPageAC(newPage));
  };

  const handleChangeRowsPerPage = event => {
    dispatch(rowsPerPageAc(parseInt(event.target.value, 10)));
    dispatch(setCurrentPageAC(1));
  };


  return (
    <DocumentPage
      pageTitle={'გაგზავნილები'}
      pageName='/tables'
      Documents={sentDocs}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      totalCount={totalCount}
      rowsPerPage={rowsPerPage}
      currentPage={currentPage}
    />
  )
};

export default SentDocuments;
