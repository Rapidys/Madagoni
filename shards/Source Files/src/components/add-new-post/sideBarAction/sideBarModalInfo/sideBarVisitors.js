import React, {useEffect, useState} from 'react';
import {
  Button,
  Col,
  Row
} from "shards-react";
import TreeList from "../../../CompaignTree/TreeList";
import {useDispatch, useSelector} from "react-redux";
import {
  Dialog, DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, FormControl, MenuItem
} from "@material-ui/core";
import ChosenVisitors from "./chosenPersons/ChosenVisitors";
import {setMotion} from "../../../../Reducers/addNewPost/DocumentMotionsReducer";


const SideBarVisitors = (props) => {


  let [confirmation, setConfirmation] = useState([])
  let [confirmationuserId, setConfirmationuserId] = useState([])
  let [visitorFromTree, setVisitorFromTree] = useState([])

  let handleSetNodeVisitor = (value) => {
    setVisitorFromTree(value)
  }

  let dispatch = useDispatch()

  useEffect(() => {
    let chosens = {
      firstName: visitorFromTree.firstName,
      lastName: visitorFromTree.lastName,
      userId: visitorFromTree.userId,
      departmentId: visitorFromTree.departmentId,
      documentMotionId: 0,
      MotionTypeId: 2,
      TargetId: visitorFromTree.userId,
      TargetTypeId: 0,
      MotionStatusId: 1,
    }

    let some = 0

    if (visitorFromTree.firstName && visitorFromTree.userId) {

      for (let i = 0; i < confirmation.length; i++) {
        if (confirmation[i].userId === chosens.userId)
          some = 1

      }
      if (some === 0) {

        setConfirmation([...confirmation, chosens])

      }

    }
  }, [visitorFromTree, setVisitorFromTree])


  let Save = () => {
    props.setChosenVisitor(confirmation)
    dispatch(setMotion(confirmation))
    props.handleCloseVisitors()
  }

  let treeData = useSelector(state => state.Tree.Structure)


  return (


    <div>
      <Dialog
        open={props.openVisitors}
        onClose={props.handleCloseVisitors}
        fullWidth={true}
        maxWidth={"lg"}
      >
        <DialogTitle>დეპარტამენტები</DialogTitle>
        <DialogContent>
          <DialogContentText>
            აირჩიეთ სასურველი ვიზიტორები
          </DialogContentText>

          <FormControl sx={{mt: 2, minWidth: 120}} className={"w-100"}>

            <MenuItem value="xl" style={{minHeight: 400, padding: 0}}>
              <Row className={"w-100"}>

                <Col lg="8">


                  <TreeList
                    handleSetNodeValue={handleSetNodeVisitor}
                    treeData={treeData}


                  />

                </Col>
                <Col lg="4" className={"border-left"}>

                  <div>
                    <b>ვადა</b>

                  </div>
                  <br/>

                  <div>
                    <b>ვიზიტორები</b>
                    <ChosenVisitors
                      userState={confirmation}
                      changeState={setConfirmation}

                    />
                  </div>

                </Col>

              </Row>


            </MenuItem>
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleCloseVisitors}>გამოსვლა</Button>
          <Button onClick={Save}>შენახვა</Button>

        </DialogActions>
      </Dialog>
    </div>
  );
};


export default SideBarVisitors;
