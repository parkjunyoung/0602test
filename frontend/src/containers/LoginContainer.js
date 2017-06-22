import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm'
import {loginRequest} from '../actions/authentication';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(id, pw) {
        return this.props.loginRequest(id, pw)
            .then(() => {
                if (this.props.loggedIn) {
                    return true;
                } else {
                    return false;
                }
            });
    }

    render() {
        return (
            <div>
                <LoginForm onLogin={this.handleLogin}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { loggedIn: state.authentication.loggedIn };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id, pw));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);