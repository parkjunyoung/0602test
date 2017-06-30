import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginView from '../components/Account/LoginView'
import {loginRequest} from '../actions/authentication';
import ProgressBar from '../components/ProgressBar'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(id, pw) {
        return this.props.loginRequest(id, pw)
            .then(() => {
                if (this.props.loggedIn) {
                    this.props.history.push("/");
                    return true;
                } else {
                    return false;
                }
            });
    }

    render() {
        let progress = this.props.currentlySending ? 100 : 0;

        return (
            <div>
                <ProgressBar progress={progress}/>
                <LoginView onLogin={this.handleLogin}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        loggedIn: state.authentication.loggedIn, 
        currentlySending: state.authentication.currentlySending 
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id, pw));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);