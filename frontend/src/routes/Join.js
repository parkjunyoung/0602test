import React, { Component } from 'react';

class Join extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">회원가입</h3>
                        </div>
                        <div className="panel-body">
                            <form action="" id="join_form" method="post" onSubmit={this.handleSubmit}>
                                <fieldset>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="ID" name="username" ref="usernameRef" required="" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password" name="password" ref="passwordRef"  required="" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password 확인" name="password2" type="password" required="" />
                                    </div>

                                    <div className="form-group">
                                        <input className="form-control" placeholder="이름" name="displayname" type="text" ref="displaynameRef" />
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
export default Join;