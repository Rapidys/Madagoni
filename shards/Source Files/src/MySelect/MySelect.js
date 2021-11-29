import React, {useState} from 'react';
import {Container, FormSelect} from "shards-react";
import {
  selectDocumentAC,
} from "../Reducers/addNewPost/selectDocReducer";
import {useDispatch} from "react-redux";

const MySelect = ({defaultValue, onChange, options, value, ...props}) => {

  let [docType, setDocType] = useState('')
  let dispatch = useDispatch()

  let onSortChange = (e) => {
    setDocType(e.target.value)
    dispatch(selectDocumentAC(e.target.selectedIndex))
  }


  return (
    <Container className={"p-0"} {...props}>
      <FormSelect
        value={docType}
        onChange={(e) => onSortChange(e)}
      >
        <option value="" disabled>{defaultValue}</option>
        {options && options.map((option) => {
          return <option value={option.value} key={option.referenceId}
          >
            {option.displayName}
          </option>

        })}

      </FormSelect>
    </Container>
  );
};

export default MySelect;
