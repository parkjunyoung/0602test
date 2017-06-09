import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar , Nav , NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
 
class HeaderContainer extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
         login: ""
     };
   }

    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">MyStore</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/admin">
                            <NavItem>ADMIN</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/join">
                            <NavItem>JOIN</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <NavItem>LOGIN</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );  
    }
}
 
export default HeaderContainer;