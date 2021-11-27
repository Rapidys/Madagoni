import React from "react";
import { Nav } from "shards-react";
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
      // navItems: Store.getSidebarItems()
    });
  }
  render() {
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {this.props.navItems.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </Nav>

      </div>
    )
  }
}

export default SidebarNavItems;
