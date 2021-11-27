import React, {useMemo} from 'react';

const ChosenVisitors = (props) => {

  // userebis washla

  let deleteUsers = useMemo(() => {
    return (userId) => props.changeState && props.changeState(props.userState.filter(p => p.userId !== userId))
  }, [props.userState, props.changeState])

  // visitor Ids washla romelic iseteba serverze
  let deleteVisitorIds = useMemo(() => {
    return (userId) => props.changevisitorIds && props.changevisitorIds(props.uservisitorIds.filter(p => p !== userId))
  }, [props.uservisitorIds, props.changevisitorIds])

// archeuli useris washla romelic gare obieqtzea

  let outSideUsers = useMemo(() => {
    return (userId) => props.setChosenUser && props.setChosenUser(props.chosenUser.filter(p => p.userId !== userId))
  }, [props.chosenUser, props.setChosenUser])


  let deleteChosen = (userId) => {
    deleteUsers(userId)
    outSideUsers(userId)
    deleteVisitorIds(userId)
  }

  if (props.userState.length === 0) {
    return <div>არჩეულები არ არიან</div>
  }
  return (
    <div>
      {props.userState.length > 0 && props.userState.map(user => {
        return (

          <div key={user.userId}
          >
            <div className={"d-flex justify-content-between border p-2 mt-1"}>
              <div>{user.firstName} {user.lastName} </div>
              <div style={{cursor: "pointer"}}
                   onClick={(e) => {
                     e.stopPropagation()
                     deleteChosen(user.userId)
                   }}
              >
                <i className="fa fa-times"/>

              </div>
            </div>

          </div>
        )
      })}

    </div>
  );
};

export default ChosenVisitors;
