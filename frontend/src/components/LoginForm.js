import React, {Component} from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleSubmit(e) {
        e.preventDefault();
        let email = this.state.email;
        let password = this.state.password;

        this.props.onLogin(email, password)
            .then((success) => {
                if (!success) {
                    this.setState({password: ''});
                }
            });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">로그인</h3>
                        </div>
                        <div className="panel-body">
                            <form action="/" onSubmit={this.handleSubmit} id="join_form">
                                <fieldset>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            placeholder="ID"
                                            name="email"
                                            onChange={this.handleChange}
                                            value={this.state.email}/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            placeholder="Password"
                                            name="password"
                                            type="password"
                                            required=""
                                            onChange={this.handleChange}
                                            value={this.state.password}/>
                                    </div>
                                    <input type="submit" className="btn btn-lg btn-success btn-block" value="로그인"/>
                                    <div style={{ marginTop: "10px" }}>
                                        <a href="/auth/facebook" className="btn btn-lg btn-primary btn-block">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                            페이스북으로 로그인
                                        </a>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;