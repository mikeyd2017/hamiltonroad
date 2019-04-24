import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Header from './Header';
import sideHamilton from '../images/Side Hamilton Road.png';
import { Image, Container, Col, Row } from 'react-bootstrap';
import Login from './Login';

const containerStyleMain = {
    backgroundColor: "#C0C5C4",
    borderBottom: '2px solid',
    borderLeft: '1px solid',
    borderRight: '1px solid',
    borderColor: '#2AA499',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    height: "100%",
    borderRadius: "10px",
    marginTop: "10px",
}

const containerStyleSide = {
    backgroundColor: "#C0C5C4",
    borderBottom: '2px solid',
    borderLeft: '1px solid',
    borderRight: '1px solid',
    borderColor: '#2AA499',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    width: "100%",
    borderRadius: "10px",
    marginTop: "10px",

}

const backgroundStyle = {
    backgroundColor: "#C0C5C4",
    height: "100%",
}

/*const sideStyle = {
    width: '250px',
    position: 'relative',
    marginLeft: '-250%'

    <Image style={sideStyle} src={sideHamilton}></Image>
}*/

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
            <div style={backgroundStyle}>
            <Row>

            <Col md="3" sm="10">
            <Container  style={containerStyleSide}>
            <Login></Login>
            </Container>
            </Col>

            <Col md="9" sm="2">
            <Container style={containerStyleMain}>
                    <Header />
                    <Route exact path="/" component={Dashboard}></Route>
                    <Route exact path="/bags" component={Dashboard}></Route>
            </Container>
            </Col>

            </Row>
            </div>
            </BrowserRouter>
        )
    }
}

export default connect(null, actions)(App);