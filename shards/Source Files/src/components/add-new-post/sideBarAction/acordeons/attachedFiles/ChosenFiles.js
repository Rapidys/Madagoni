import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
  delActiveAC,
} from "../../../../../Reducers/addNewPost/UploadFileReducer";

const ChosenFiles = ({fileNames}) => {

  let dispatch = useDispatch()
  let fileId = useSelector(state => state.uploadFile.fileId)

  let filterAttachment = useMemo(() => {
    return (nameId) => dispatch(delActiveAC(fileId[nameId].isActive = false))
  }, [fileId])

  let handlefilterAttachments = (nameId) => {
    filterAttachment(nameId)
  }

  return (
    <div>
      <label
        className={"mt-2"}>


        {fileNames && fileNames.map((name, i) => {

          return <div
            className={"fileNamesWrapper"}
            key={i}>
            <div>
              <b>{i + 1}.</b><span
              className={fileId[i].isActive === false ? 'deleteAttachment' : ''}>{name}</span>
            </div>
            <div>
              <i className="fa fa-times ml-5"
                 onClick={() => {
                   handlefilterAttachments(i)
                 }}
              />
            </div>
          </div>
        })
        }


      </label>
    </div>
  );
};

export default ChosenFiles;
