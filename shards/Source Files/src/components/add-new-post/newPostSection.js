import React, {useEffect, useState} from "react";


import AddNewPost from "./addNewPost";
import {useDispatch} from "react-redux";
import {getType} from "../../Reducers/addNewPost/selectDocReducer";

const NewPostSection = () => {
  let dispatch = useDispatch()
  const [documentTitle, setDocumentTitle] = useState('')
  const [documentBody, setDocumentBody] = useState('')
  useEffect(() => {
    dispatch(getType())
  }, [])
  let [chosenDestination, setChosenDestination] = useState([])
  let [chosenVisitor, setChosenVisitor] = useState([])
  return (

    <AddNewPost
      title={'დოკუმენტის შექმნა'}
      setDocumentTitle={setDocumentTitle}
      documentTitle={documentTitle}
      setDocumentBody={setDocumentBody}
      documentBody={documentBody}
      chosenVisitor={chosenVisitor}
      setChosenVisitor={setChosenVisitor}
      chosenDestination={chosenDestination}
      setChosenDestination={setChosenDestination}
      documentType={'დოკუმენტის ტიპი'}
      approve={'d-none'}
      draftBtn={'border - 1'}
      addBtn={'border - 1'}
      isDisabledVisitor={false}
      isDisabledDestinate={false}
      setVisible={'d-none'}
    />

  )
};

export default NewPostSection;
