import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Header from './Header';

const backgroundStyle = {
    backgroundColor: "#C0C5C4",
    borderBottom: '2px solid',
    borderLeft: '1px solid',
    borderRight: '1px solid',
    borderColor: '#2AA499',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    height: "100%",
    borderRadius: "10px",
    marginTop: "10px"
}

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                <div className="container" style={backgroundStyle}>
                    <Header />
                    <Route exact path="/" component={Dashboard}></Route>
                    <Route exact path="/bags" component={Dashboard}></Route>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);