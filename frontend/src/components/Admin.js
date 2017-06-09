import React, { Component } from 'react';
import Sidebar from '../components/Admin/Sidebar';
import ProductList from '../components/Admin/ProductList';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Admin extends Component {
    render() {
        return (
            <Router>
                <div className="row">
                    <Sidebar/>
                    <div className="col-sm-9">
                        <Route path="/admin/product" component={ProductList} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Admin;