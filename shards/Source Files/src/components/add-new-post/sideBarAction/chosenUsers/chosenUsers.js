import React, {useState} from 'react';
import {Button, Card, Col, Row} from "shards-react";
import SideBarVisitors from "../sideBarModalInfo/sideBarVisitors";
import SideBarDestinations from "../sideBarModalInfo/sideBarDestinations";
import {useSelector} from "react-redux";

const ChosenUsers = (props) => {


  const [open, setOpen] = useState(false);
  const [openVisitors, setOpenVisitors] = useState(false);
  let chosen = useSelector(state => state.chosenDocument.currentMessagePage)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenVisitors = () => {
    setOpenVisitors(true);
  };
  const handleCloseVisitors = () => {
    setOpenVisitors(false);
  };
  return (
    <div>
      <div className={"mb-1"}>
        <Button onClick={handleOpenVisitors}
                className={"w-100"}
                disabled={props.isDisabledVisitor}
        >ვიზირებები</Button>
        <Card>
          <Col>
            {props.chosenVisitor && props.chosenVisitor.map((u, index) => {
              return <Col className={"d-flex justify-content-between mt-2"}
                          key={index}>
                <Row className={"p-2"}>
                  <i className="mr-2 mt-1 fas fa-user"
                     style={{color: u.motionColor}}/>
                  {u.firstName} {u.lastName} {u.targetName}</Row>
                <Row className={"p-2 align-items-center"}>

                </Row>
              </Col>
            })}


          </Col>
        </Card>
        <SideBarVisitors
          handleCloseVisitors={handleCloseVisitors}
          openVisitors={openVisitors}
          setChosenVisitor={props.setChosenVisitor}
          chosenVisitor={props.chosenVisitor}
        />
      </div>

      {/*addresants */}

      <div className={"mb-1"}>
        <Button onClick={handleClickOpen}
                className={"w-100"}
                disabled={props.isDisabledDestinate}
        >ადრესატი</Button>
        <Card>
          <Col>
            {props.chosenDestination && props.chosenDestination.map((u, index) => {
              return <Col className={"d-flex justify-content-between mt-2"}
                          key={index}>
                {u.firstName || u.targetName
                  ? <Row className={"p-2"}><i
                    className="mr-2 mt-1 fas fa-user"
                    style={{color: u.motionColor}}/>


                    {u.firstName} {u.lastName} {u.targetName}
                  </Row>
                  : <Row className={"p-2"} key={u.departmentId}><i
                    className="mr-2 mt-1 fas fa-university"/>
                    {u.displayName}
                  </Row>
                }
                <Row className={"p-2 align-items-center"}>

                </Row>
              </Col>
            })}


          </Col>
        </Card>


        <SideBarDestinations
          handleClose={handleClose}
          open={open}
          chosenDestination={props.chosenDestination}
          setChosenDestination={props.setChosenDestination}
        />
      </div>


    </div>
  );
};

export default ChosenUsers;
