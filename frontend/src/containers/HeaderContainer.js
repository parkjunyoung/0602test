import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


class HeaderContainer extends React.Component {

    render() {
        const AuthButton = () => {
            const isLoggedIn = this.props.loggedIn;
            
            if (isLoggedIn) {
                return (<LinkContainer to="/logout">
                            <NavItem>LOGOUT</NavItem>
                        </LinkContainer>)
            }
            return (<LinkContainer to="/login">
                            <NavItem>LOGIN</NavItem>
                        </LinkContainer>)
        }

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">MyStore</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/admin/product">
                            <NavItem>ADMIN</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/join">
                            <NavItem>JOIN</NavItem>
                        </LinkContainer>
                        <AuthButton/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {loggedIn: state.login.loggedIn};
};

export default connect(mapStateToProps)(HeaderContainer);