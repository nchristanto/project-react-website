import React from 'react';
import { 
  Button, 
  Nav, 
  NavItem,
  Input,  
  NavLink, 
  Card, 
  CardBody, 
  CardHeader, 
  CardTitle, 
  CardText, 
  CardImg } from 'reactstrap';
// import { ListGroup, ListGroupItem } from 'reactstrap';

const style = {
  cardContainer: {
  display: "flex", 
  justifyContent: "space-around",
  padding: "40px 40px"
  },

  formContainer: {
    width: "300px",
  },

  // inputForm: {
  //   justifyContent: "center" 
  // },

  inputContainer: {
    justifyContent: "center"
  },

  inputButton: {
    width: "258px"
  },

  navContainer: {
    justifyContent: "center"
  }
}

const MainCard = (props) => {
  return (
  <div style={style.cardContainer}>
    <div>
      <Card style={style.formContainer}>
        <CardHeader><center><h5>Plan a journey</h5></center></CardHeader>
        <Nav tabs style={style.navContainer}>
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
          <Input style={style.inputForm} placeholder="From" Type="text"></Input>
          <br></br>
          <Input style={style.inputForm} placeholder="To" Type="text"></Input>
          <br></br>
          <CardText>Search for train leaving now</CardText>
          <Button style={style.inputButton} color="primary">Plan my journey</Button>
        </CardBody>
      </Card>
    </div>
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