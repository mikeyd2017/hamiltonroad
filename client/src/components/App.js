import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                <div className="container">
                    <Route exact path="/" component={Landing}></Route>
                    <Route exact path="/bags" component={Dashboard}></Route>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);