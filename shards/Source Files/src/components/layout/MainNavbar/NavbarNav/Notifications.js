import React, {useEffect, useState} from "react";
import {NavItem, NavLink, Badge, Collapse, DropdownItem} from "shards-react";
import {getNotification} from "../../../../API/notificationService";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

let Styles = styled.div`
  .icon-bell {
    cursor: pointer;
  }

  .scrollBar {
    max-height: 400px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 8px;
      background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: #cfd2ce;
    }
  }

  .scrollBar-primary {
  }


`

let Notifications = () => {
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNotification())
  }, [])

  const [visible, setVisible] = useState(false)
  let toggleNotifications = () => {
    setVisible(e => !e)
  }

  let notification = useSelector(state => state.getNotifications.notification)
  return (
    <Styles>
      <NavItem className="border-right dropdown notifications">
        <NavLink
          className="nav-link-icon text-center "
          onClick={toggleNotifications}
        >
          <div className="nav-link-icon__wrapper">
            <i className="material-icons icon-bell">&#xE7F4;</i>
            <Badge pill theme="danger">
              {notification.length}
            </Badge>
          </div>
        </NavLink>
        <Collapse
          open={visible}
          className="dropdown-menu dropdown-menu-small scrollBar scrollBar-primary"

        >
          {notification && notification.map(item => {
            return <DropdownItem key={item.notificationId}>
              <div className="notification__icon-wrapper">
                <div className="notification__icon">
                  <i className="material-icons">&#xE6E1;</i>
                </div>
              </div>
              <div className="notification__content">
              <span
                className="notification__category">{item.notificationTitle}</span>
                <p>
                  {item.notificationContent}
                </p>
              </div>
            </DropdownItem>
          })}

          <DropdownItem className="notification__all text-center">
            View all Notifications
          </DropdownItem>
        </Collapse>
      </NavItem>
    </Styles>

  );
}

export default Notifications
