import React, {useState} from "react";


import AddNewPost from "./addNewPost";

const NewPostSection = () => {

  const [documentTitle, setDocumentTitle] = useState('')
  const [documentBody, setDocumentBody] = useState('')
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
      documentType={'დოკუმენტის ტიპი'}
      approve={'d-none'}
      setVisible={'d-none'}
    />

  )
};

export default NewPostSection;
