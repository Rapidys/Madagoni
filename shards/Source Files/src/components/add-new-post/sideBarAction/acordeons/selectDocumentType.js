import React, {useMemo, useState} from 'react';
import MySelect from "../../../../MySelect/MySelect";
import {useSelector} from "react-redux";


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
