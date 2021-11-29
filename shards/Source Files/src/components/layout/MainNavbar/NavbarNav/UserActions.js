import React, {useState} from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import {connect, useSelector} from "react-redux";
import {Logout} from "../../../../Reducers/AuthReducer";
import {Link} from "react-router-dom";

let UserActions = (props) => {

  const [visible, setVisible] = useState(false)

  let toggleUserActions = () => {
    setVisible((c) => !c);
  }

  let userImg = useSelector(state => state.userInfo.img)
  return (
    <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
      <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
        <img
          className="user-avatar rounded-circle mr-2"
          src={userImg}
          alt="User Avatar"
        />{" "}
        <span className="d-none d-md-inline-block">{props.login}</span>
      </DropdownToggle>
      <Collapse tag={DropdownMenu} right small open={visible}>
        <NavLink >
          <DropdownItem to="/user-profile-lite">
            <i className="material-icons">&#xE7FD;</i>
            Profile
          </DropdownItem>
        </NavLink>


        <DropdownItem divider/>

        <NavLink>
          <DropdownItem to="/" className="text-danger" onClick={props.LogOut}>
            <i className="material-icons text-danger">&#xE879;</i>
            Logout
          </DropdownItem>
        </NavLink>


      </Collapse>
    </NavItem>
  );

}
let MapStateToProps = (state) => ({
  login: state.Auth.email
})
let MapDispatchToProps = (dispatch) => {
  return {
    LogOut: () => {
      dispatch(Logout())
    }
  }
}

let UserActionsContainer = connect(MapStateToProps, MapDispatchToProps)(UserActions)

export default UserActionsContainer
