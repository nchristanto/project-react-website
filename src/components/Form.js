import React from 'react';
import { Card, Button, CardHeader, CardBody, CardText } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Nav, NavItem, NavLink } from 'reactstrap';
// import { url } from 'inspector';
import cover from "./images/trainspeed.jpg"

const style = {
  coverImage: {
    backgroundImage: `url(${cover})`,
    justifyContent: "left",
    width: "auto",
    height: "500px",
    paddingLeft: "20px",
    paddingRight: "300px",
    paddingTop: "50px",
  },

  formContainer: {
    width: "275px",
  },

  inputContainer: {
    width: "290px",
    paddingLeft: "40px",
    
  },

  inputButton: {
    width: "180px",
  }

}

const CardDropDown = (props) => {
  return (
    <div style={style.coverImage}>
      {/* <Card style={style.formContainer} className="DropDownContainer">
        <CardHeader><center><h5>Plan a journey</h5></center></CardHeader>
        <Nav tabs>
          <NavItem>
            <NavLink href="#">New</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>My Journey</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Recent</NavLink>
          </NavItem>
        </Nav>
        <CardBody style={style.inputContainer}>
          <UncontrolledDropdown>
            <DropdownToggle style={style.inputButton} caret>
              Origin 
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Lebak Bulus</DropdownItem>
                <DropdownItem>Fatmawati</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <br></br>
          <UncontrolledDropdown>
            <DropdownToggle style={style.inputButton} caret>
              Destination 
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Bundaran Hotel Indonesia</DropdownItem>
                <DropdownItem>Dukuh Atas</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <br></br>
          <CardText>Search for train leaving now</CardText>
          <Button style={style.inputButton} color="primary">Plan my journey</Button>
        </CardBody>
      </Card> */}
    </div>
  );
};

export default CardDropDown;