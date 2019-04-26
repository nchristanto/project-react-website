import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input } from 'reactstrap';
import logo from "./images/logomrt.png"


const style = {
  navBar: {
    backgroundColor: "#EEEEEE"
  },

  menuBar: {
    marginRight: "450px"
  },

  menuToggle: {
    color: "#2d3039"
  },

  inputBar: {
    width: "200px" 
  }
}


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
      <Navbar style={style.navBar} expand="md">
        <NavbarBrand>
        <img src={logo} alt=""/></NavbarBrand>
        <NavbarToggler style={style.menuToggle} onClick={this.toggle} />
        <Collapse style={style.menuBar} isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Plan a journey</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Fare</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Maps
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Lebak Bulus Route
                </DropdownItem>
                <DropdownItem>
                  Bundaran HI Route
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <Input style={style.inputBar} placeholder="Search"type="text" />
      </Navbar>
    </div>
    );
  }
}

export default NavigationBar
