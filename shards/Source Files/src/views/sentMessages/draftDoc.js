import React, {useEffect} from "react";
import DocumentPage from "../DraftMessages/Documents/DocumentPage";
import {getDraftDocs, getOnPageChange} from "../../API/sentDocumentService";
import {useDispatch, useSelector} from "react-redux";
import {
  rowsPerPageAc,
  setCurrentPageAC
} from "../../Reducers/PaginationReducer";


const DraftDocuments = (props) => {

  let currentPage = useSelector(state => state.PaginationData.currentPage)
  let rowsPerPage = useSelector(state => state.PaginationData.rowsPerPage)
  let totalCount = useSelector(state => state.PaginationData.totalPages)


  let dispatch = useDispatch()
  useEffect(() => {

    dispatch(getDraftDocs({
      MotionStatus: 1,
      PageNumber:currentPage ,
      RecordsPerPage: rowsPerPage,
    }))
  }, [currentPage,rowsPerPage])
  let drafts = useSelector(state => state.setDrafts.DraftDoc)

  const handleChangePage = (event, newPage) => {
    dispatch(setCurrentPageAC(newPage));
  };

  const handleChangeRowsPerPage = event => {
    dispatch(rowsPerPageAc(parseInt(event.target.value, 10)));
    dispatch(setCurrentPageAC(1));
  };


  return (
    <DocumentPage
      pageTitle={'დრაფტები'}
      pageName='/tables'
      Documents={drafts}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      totalCount={totalCount}
      rowsPerPage={rowsPerPage}
      currentPage={currentPage}
    />
  )
};

export default DraftDocuments;
