import React, {useState} from 'react';
import {
  Button, Card, Col, Row,
} from "shards-react";
import Accordeons from "./acordeons/acordeons";
import SideBarDestinations from "./sideBarModalInfo/sideBarDestinations";
import SideBarVisitors from "./sideBarModalInfo/sideBarVisitors";
import Comments from "./Comments/Comments";

const SideBarComponents = (props) => {


  let [chosenDestination, setChosenDestination] = useState([])

  const [open, setOpen] = useState(false);
  const [openVisitors, setOpenVisitors] = useState(false);
  const [comments, setComments] = useState(false)


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
  const handleOpenComments = () => {
    setComments(true);
  };

  return (


    <div className={"acordWrapper"}>


      <div className={"mb-1"}>
        <Accordeons
          documentType={props.documentType}
        />
        <div className={props.setVisible}>
          <div className={"mb-1"}>
            <Button onClick={handleOpenComments}
                    className={"w-100"}>კომენტარები</Button>
            <Comments
              setComments={setComments}
              comments={comments}
            />
          </div>
        </div>


        {/*visitors*/}
        <div className={"mb-1"}>
          <Button onClick={handleOpenVisitors}
                  className={"w-100"}>ვიზირებები</Button>
          <Card>
            <Col>
              {props.chosenVisitor && props.chosenVisitor.map(u => {
                return <Col className={"d-flex justify-content-between mt-2"}
                            key={u.userId}>
                  <Row className={"p-2"}>
                    <i className="mr-2 mt-1 fas fa-user"/>
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
      </div>


      {/*addresants */}

      <div className={"mb-1"}>
        <Button onClick={handleClickOpen}
                className={"w-100"}>ადრესატი</Button>
        <Card>
          <Col>
            {chosenDestination.length > 0 && chosenDestination.map(u => {
              return <Col className={"d-flex justify-content-between mt-2"}
                          key={u.userId}>
                {u.firstName
                  ? <Row className={"p-2"}><i
                    className="mr-2 mt-1 fas fa-user"/>{u.firstName} {u.lastName}
                  </Row>
                  : <Row className={"p-2"} key={u.departmentId}><i
                    className="mr-2 mt-1 fas fa-university"/> {u.displayName}
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
          chosenUser={chosenDestination}
          setChosenUser={setChosenDestination}
        />
      </div>
    </div>

  );
};

export default SideBarComponents;
