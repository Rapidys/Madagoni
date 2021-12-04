import React, {useMemo} from 'react';
import RangeDatePicker from "../../../../common/RangeDatePicker";
import {useDispatch, useSelector} from "react-redux";
import {setMotion} from "../../../../../Reducers/addNewPost/DocumentMotionsReducer";

const ChosenDestinations = (props) => {


  let Motions = useSelector(state => state.docMotion.Motion)
  let dispatch = useDispatch()

  let deleteUsers = useMemo(() => {
    return (userId, displayName) => props.setDestination && props.setDestination(props.destination.filter(p => {
      if (p.displayName && p.departmentId) {
        return p.displayName !== displayName
      } else {
        return p.userId !== userId
      }
    }))
  }, [props.destination, props.setDestination])


  let deleteMotions = useMemo(() => {
    return (userId) => dispatch(setMotion((Motions.filter(p => p.userId !== userId))))
  }, [Motions, setMotion])


  let deleteChosen = (userId, displayName) => {
    deleteUsers(userId, displayName)
    deleteMotions(userId)
  }

  if (props.destination.length === 0) {
    return <div>არჩეულები არ არიან</div>
  }
  return (
    <div>
      {props.destination.length > 0 && props.destination.map((user, index) => {
        return (
          <div key={index}
          >
            <div className={"d-flex justify-content-between p-2 mt-1"}>
              <div>
                {user.firstName && user.firstName} {user.lastName && user.lastName}
                {user.displayName && user.displayName}
              </div>
              <div style={{cursor: "pointer"}}
                   onClick={(e) => {
                     e.stopPropagation()
                     deleteChosen(user.userId, user.displayName)
                   }}
              >
                <i className="fa fa-times"/>
              </div>

            </div>
            <div>
              <RangeDatePicker
                save={props.save}
                index={index}
                handleSetDate={props.handleSetDate}
                destination={props.destination}
              />
            </div>
          </div>
        )
      })}

    </div>
  );
};

export default ChosenDestinations;
