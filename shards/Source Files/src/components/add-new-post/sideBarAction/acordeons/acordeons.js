import React, {useState} from 'react';
import {
  Button,
  Collapse,
} from "shards-react";
import SelectDocumentType from "./selectDocumentType";

import AttachedFiles from "./attachedFiles/attachedFiles";


const Accordeons = (props) => {


  let [mainInfo, setMainInfo] = useState(true)
  let [attachedFiles, setAttachedFiles] = useState(false)


  let attachedFilesToggle = () => {
    setAttachedFiles((c) => !c);

  }


  return (

    <div className={"acordWrapper"}>

      <div className={"mb-1"}>
        <Button
          className={"w-100"}>ძირითადი ინფორმაცია</Button>
        <Collapse open={mainInfo}>
          <div className="p-1 mt-3 border rounded">
            <div>
              <SelectDocumentType/>
            </div>
          </div>
        </Collapse>


      </div>

      <div className={"mb-1"}>
        <Button onClick={attachedFilesToggle}
                className={"w-100"}>მიბმული ფაილები</Button>
        <AttachedFiles
          attachedFiles={attachedFiles}
        />
      </div>


    </div>

  );
};

export default Accordeons;
