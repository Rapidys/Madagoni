import React, {useEffect} from "react";
import DocumentPage from "../DraftMessages/Documents/DocumentPage";
import {
  getSignatureDocs
} from "../../API/sentDocumentService";
import {useDispatch, useSelector} from "react-redux";
import {
  rowsPerPageAc,
  setCurrentPageAC
} from "../../Reducers/PaginationReducer";
import {Button} from "shards-react";
import {motionStatusAC} from "../../Reducers/MotionStatusReducer";


const SignatureDocuments = (props) => {

  let currentPage = useSelector(state => state.PaginationData.currentPage)
  let rowsPerPage = useSelector(state => state.PaginationData.rowsPerPage)
  let totalCount = useSelector(state => state.PaginationData.totalPages)


  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(motionStatusAC(3))
    dispatch(getSignatureDocs({
      MotionStatus: 3,
      PageNumber: currentPage,
      RecordsPerPage: rowsPerPage,
    }))
  }, [currentPage, rowsPerPage])

  let visirable = useSelector(state => state.signatureDocument.signatureDoc)

  const handleChangePage = (event, newPage) => {
    dispatch(setCurrentPageAC(newPage));
  };

  const handleChangeRowsPerPage = event => {
    dispatch(rowsPerPageAc(parseInt(event.target.value, 10)));
    dispatch(setCurrentPageAC(1));
  };


  return (
    <DocumentPage
      pageTitle={'დასადასტურებელი დოკუმენტები'}
      pageName='/tables'
      Documents={visirable}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      totalCount={totalCount}
      rowsPerPage={rowsPerPage}
      currentPage={currentPage}
    />
  )
};

export default SignatureDocuments;
