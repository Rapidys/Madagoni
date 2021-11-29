import React, {useState} from "react";
import {
  NavItem,
  DropdownToggle,
  Collapse,
  DropdownMenu,
  Dropdown,
  DropdownItem,
} from "shards-react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


let Styles = styled.div`
  .items {
    cursor: pointer;
    color: black;
  }

  .items:hover {
    color: #007bff;
  }

  .moreBtn {
    font-size: 20px;
  }



`

export default () => {


  const [visible, setVisible] = useState(false)

  let dotesToggle = () => {
    setVisible((c) => !c);
  }

  return (
    <Styles className={"align-items-center"}>

      <NavItem tag={Dropdown} caret toggle={dotesToggle}>
        <DropdownToggle className={"bg-light border-0"}>
          <i className="material-icons moreBtn">more_vert</i>

        </DropdownToggle>
        <Collapse tag={DropdownMenu} left={"true"} small open={visible}>
          <NavLink to="/blog-overview" className={"text-decoration-none"}>
            <DropdownItem className={"items"}>
              <i
                className="material-icons cursor-pointer hov">assessment</i>
              <span className={"ml-2"}>დიაგრამები</span>
            </DropdownItem>
          </NavLink>

          <DropdownItem divider/>
          <NavLink to="/documentFiles" className={"text-decoration-none"}>
            <DropdownItem className={"items"}>
              <i
                className="material-icons cursor-pointer hov">description</i>

              <span className={"ml-2"}>დოკუმენტები</span>
            </DropdownItem>
          </NavLink>

        </Collapse>
      </NavItem>

    </Styles>

  )
};
