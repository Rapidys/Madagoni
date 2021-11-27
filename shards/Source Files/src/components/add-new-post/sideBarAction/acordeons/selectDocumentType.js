import React, {useEffect} from 'react';
import MySelect from "../../../../MySelect/MySelect";
import {useDispatch, useSelector} from "react-redux";
import {
  getType,
} from "../../../../Reducers/addNewPost/selectDocReducer";

const SelectDocumentType = ({documentType}) => {


  let dispatch = useDispatch()
  let Options = useSelector((state => state.selectDocument.setOptions))

  useEffect(() => {
    dispatch(getType())
  }, [])


  return (
    <div>
      <MySelect
        defaultValue={documentType}
        options={Options}
        className={"mt-4 mb-4"}
      />
    </div>

  );
};

export default SelectDocumentType;
