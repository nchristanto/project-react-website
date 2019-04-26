import React from 'react';
import { Button, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem , Card, CardBody, CardHeader, CardTitle, CardText, CardImg } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

const style = {
  cardContainer: {
  display: "flex", 
  justifyContent: "space-around",
  padding: "20px 20px",
  }
}

const MainCard = (props) => {
  return (
    <div style={style.cardContainer}>
    <div style={style.coverImage}>
      <Card style={style.formContainer} className="DropDownContainer">
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
        </Card>
      </div>
      {/* <h6>Lebak Bulus Route to Bundaran HI </h6>
      <h6>Bundaran HI to Lebak Bulus</h6>
        <ListGroup>
          <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
          <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
          <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>
        </ListGroup> */}
      <Card>
        <CardImg bottom width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg bottom width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default MainCard;