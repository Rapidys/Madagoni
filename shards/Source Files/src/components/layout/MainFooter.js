import React from "react";
import {Link, NavLink} from "react-router-dom";
import {Container, Nav, NavItem, Row} from "shards-react";


const MainFooter = ({contained, menuItems, copyright}) => (
  <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
    <Container fluid={contained}>
      <Row>
        <Nav>
          {menuItems.map((item, idx) => (
            <NavItem key={idx}>
              <NavLink tag={Link} to={item.to} className={"mr-3"}>
                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
      </Row>
    </Container>
  </footer>
);

MainFooter.defaultProps = {
  contained: false,
  copyright: "Copyright © 2021 CyberDocs",
  menuItems: [
    {
      title: "დიაგრამები",
      to: "/blog-overview"
    },
    {
      title: "პოსტები",
      to: "/blog-posts"
    },
    {
      title: "ახალი დოკუმენტი",
      to: "/add-new-post"
    },
    {
      title: "მიღებული",
      to: "/incomingDocuments"
    },
    {
      title: "გაგზავნილი",
      to: "/sentDocuments"
    }
  ]
};

export default MainFooter;
