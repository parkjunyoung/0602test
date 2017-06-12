import React, { Component } from "react";
import JoinForm from "../components/JoinForm";
import { connect } from "react-redux";
import { registerRequest } from "../actions/authentication";
import { withRouter } from "react-router-dom";

class JoinContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(email, password) {
        return this.props.registerRequest(email, password).then(() => {
                this.props.history.push("/");
            return true;
        });
    }

    render() {
        return (
            <div>
                <JoinForm handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.authentication.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        registerRequest: (email, password) => {
            return dispatch(registerRequest(email, password));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JoinContainer));
