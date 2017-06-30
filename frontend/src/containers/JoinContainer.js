import React, { Component } from "react";
import JoinView from "../components/Account/JoinView";
import { connect } from "react-redux";
import { registerRequest, loginRequest } from "../actions/authentication";
import ProgressBar from '../components/ProgressBar'

class JoinContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(email, password, name) {
        return this.props.registerRequest(email, password, name).then(() => {
            if(this.props.error){
                alert(this.props.error);
                return false;
            }else{
                this.props.history.push("/");
                return true;
            }
        })
    }

    render() {
        let progress = this.props.currentlySending ? 100 : 0;

        return (
            <div>
                <ProgressBar progress={progress}/>
                <JoinView handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.authentication.errorMessage,
        currentlySending: state.authentication.currentlySending
    };
};

const mapDispatchToProps = dispatch => {
    return {
        registerRequest: (email, password, name) => {
            return dispatch(registerRequest(email, password, name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinContainer);
