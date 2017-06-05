import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import Admin from './routes/Admin';
import Login from './routes/Login';
import Join from './routes/Join';
import NotMatch from './routes/NotMatch';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/admin" component={Admin} />
                        <Route path="/login" component={Login} />
                        <Route path="/join" component={Join} />
                        <Route component={NotMatch} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;