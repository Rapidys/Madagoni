import React, {useEffect, useMemo, useState} from 'react';
import MySelect from "../../../../MySelect/MySelect";
import {useDispatch, useSelector} from "react-redux";
import {
  getType,
} from "../../../../Reducers/addNewPost/selectDocReducer";
import chosenDocumentReducer, {
  chosenDocPageAC,
  docDisableTypeAC
} from "../../../../Reducers/chosenDocumentReducer";

const SelectDocumentType = ({documentType}) => {

  let Options = useSelector((state => state.selectDocument.setOptions))
  let [defaultValue, setDefaultValue] = useState()
  useMemo(() => {
    setDefaultValue(documentType)

  }, [documentType])
  return (
    <div>
      <MySelect
        defaultValue={defaultValue}
        options={Options}
        className={"mt-4 mb-4"}
        disabled={defaultValue !== 'დოკუმენტის ტიპი' && true}

      />
    </div>

  );
};

export default SelectDocumentType;
