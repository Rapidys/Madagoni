import React from "react";
import {NavLink as RouteNavLink} from "react-router-dom";
import {NavItem, NavLink} from "shards-react";
import styled from "styled-components";

let Styles = styled.div`
  .title {
    max-width: 470px;
    overflow-wrap: break-word;
    white-space: pre-wrap;

  }

`


const SidebarNavItem = ({item}) => (
  <Styles>
    <NavItem>
      <NavLink tag={(props) => <RouteNavLink {...props} />} to={item.to}>
        {item.htmlBefore && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{__html: item.htmlBefore}}
          />
        )}
        {item.title && <span>{item.title}</span>}
        {item.htmlAfter && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{__html: item.htmlAfter}}
          />
        )}
      </NavLink>
    </NavItem>
  </Styles>

);


export default SidebarNavItem;
