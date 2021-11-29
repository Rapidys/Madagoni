import React from "react";
import {
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
} from "shards-react";

import SideBarComponents from "./SideBarComponents";


const SidebarActions = (props) => {


  return (
    <Card small className="mb-3">

      <CardBody className="p-0">
        <ListGroup flush>
          <ListGroupItem className="p-3">

            <SideBarComponents
              chosenVisitor={props.chosenVisitor}
              setChosenVisitor={props.setChosenVisitor}
              documentType={props.documentType}
              setVisible={props.setVisible}
            />
          </ListGroupItem>

        </ListGroup>
      </CardBody>

    </Card>
  )
};


export default SidebarActions;
