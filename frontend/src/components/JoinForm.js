import React, { Component } from 'react';

class JoinForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            name: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
   }

    handleSubmit(e){
        e.preventDefault();
        let id = this.state.email;
        let pw = this.state.password;

        this.props.handleSubmit(id, pw).then((success) => {
                if(!success) {
                    this.setState({
                        password: ''
                    });
                }
            }
        );
    }

    handleChange(e){
        let obj = {};
        
        obj[e.target.name] = e.target.value;
        this.setState(obj);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">회원가입</h3>
                        </div>
                        <div className="panel-body">
                            <form id="join_form" method="post" onSubmit={ this.handleSubmit }>
                                <fieldset>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="email" name="email"
                                         required="" onChange={ this.handleChange } value={ this.state.email }/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password" name="password" type="password"
                                         required="" onChange={ this.handleChange } value={ this.state.password }/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password 확인" name="password_re" type="password"
                                         required="" onChange={ this.handleChange } value={ this.state.password_re }/>
                                    </div>

                                    <div className="form-group">
                                        <input className="form-control" placeholder="이름" name="name" type="text" 
                                         required="" onChange={ this.handleChange } value={ this.state.name }/>
                                    </div>
                                    
                                    <input type="submit" className="btn btn-lg btn-success btn-block" value="가입하기" />
                                    <div style={{ marginTop: "10px" }}>
                                        <a href="/auth/facebook" className="btn btn-lg btn-primary btn-block">
                                            <i className="fa fa-facebook" aria-hidden="true"></i> 페이스북으로 회원가입
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
export default JoinForm;