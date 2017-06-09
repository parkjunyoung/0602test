import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JoinContainer from './containers/JoinContainer';
import LoginContainer from './containers/LoginContainer';
import HeaderContainer from './containers/HeaderContainer';
import Home from './containers/HomeContainer';
import Admin from './containers/AdminContainer';
import NotMatch from './containers/NotMatch'

class App extends Component {
    render() {
        return (
            <Router>    
                <div>
                    <HeaderContainer/>
                    <Switch>
                        <Route path="/admin" component={ Admin }/>
                        <Route path="/login" component={ LoginContainer }/>
                        <Route path="/join" component={ JoinContainer }/>
                        <Route component={ NotMatch }/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;