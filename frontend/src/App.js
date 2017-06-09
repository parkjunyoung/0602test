import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

import JoinContainer from './containers/JoinContainer';
import LoginContainer from './containers/LoginContainer';
import HeaderContainer from './containers/HeaderContainer';
import Home from './containers/HomeContainer';
import Admin from './containers/AdminContainer';
import NotMatch from './containers/NotMatch';

import reducer from './reducers'

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <HeaderContainer/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/admin" component={Admin}/>
                            <Route path="/login" component={LoginContainer}/>
                            <Route path="/join" component={JoinContainer}/>
                            <Route component={NotMatch}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;