import React from "react";
import {Nav} from "shards-react";
import SidebarNavItem from "./SidebarNavItem";
import {Store} from "../../../../Redux/HeaderMenu";

class SidebarNavItems extends React.Component {

  constructor(props) {
    super(props)


    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
    });
  }

  render() {
    return (
      <div className="nav-wrapper d-flex">
        <Nav className="nav--no-borders flex-column">
          {this.props.navItems.map((item, idx) => (
            <div className={'d-flex'} key={idx}>
              <SidebarNavItem item={item}/>
              <Nav className={'nav--no-borders mt-3'}>
                {this.props.newDocs}
              </Nav>
            </div>

          ))}
        </Nav>


      </div>
    )
  }
}

export default SidebarNavItems;
