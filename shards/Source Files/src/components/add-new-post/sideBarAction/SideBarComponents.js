import React, {useState} from 'react';
import {
  Button, Card, Col, Row,
} from "shards-react";
import Accordeons from "./acordeons/acordeons";
import SideBarDestinations from "./sideBarModalInfo/sideBarDestinations";
import SideBarVisitors from "./sideBarModalInfo/sideBarVisitors";
import Comments from "./Comments/Comments";
import ChosenUsers from "./chosenUsers/chosenUsers";

const SideBarComponents = (props) => {


  const [comments, setComments] = useState(false)


  const handleOpenComments = () => {
    setComments(true);
  };


  return (


    <div className={"acordWrapper"}>


      <div className={"mb-1"}>
        <Accordeons
          documentType={props.documentType}
          docId={props.docId}
          Date={props.Date}
        />
        <div className={props.setVisible}>
          <div className={"mb-1"}>
            <Button onClick={handleOpenComments}
                    className={"w-100"}

            >კომენტარები</Button>
            <Comments
              setComments={setComments}
              comments={comments}
            />
          </div>
        </div>


        {/*visitors*/}

      </div>


      <ChosenUsers
        setChosenVisitor={props.setChosenVisitor}
        chosenVisitor={props.chosenVisitor}
        chosenDestination={props.chosenDestination}
        setChosenDestination={props.setChosenDestination}
        isDisabledVisitor={props.isDisabledVisitor}
        isDisabledDestinate={props.isDisabledDestinate}
      />
    </div>

  );
};

export default SideBarComponents;
