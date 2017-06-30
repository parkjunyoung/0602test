import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {logoutRequest} from '../actions/authentication';
import {withRouter} from 'react-router-dom';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        return this.props.logoutRequest()
            .then(() => {
                if (!this.props.loggedIn) {
                    this.props.history.push("/");
                    return true;
                } else {
                    return false;
                }
            })
    }

    render() {
        const AuthButton = () => {
            const isLoggedIn = this.props.loggedIn;
            
            if (isLoggedIn) {
                return (<NavItem onClick={ this.handleLogout }>LOGOUT</NavItem>)
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
                        {!this.props.loggedIn && 
                            <LinkContainer to="/join">
                                <NavItem>JOIN</NavItem>
                            </LinkContainer>}
                        <AuthButton/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    return { loggedIn: state.authentication.loggedIn };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutRequest: () => {
            return dispatch(logoutRequest());
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));