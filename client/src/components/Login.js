import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleButton from 'react-google-button';
import { withRouter } from 'react-router';
import Cart from './Cart.js';
import { Button, Col, Container} from 'reactstrap';
class Login extends Component {
    componentDidMount() {
        this.props.fetchCartBags();
    }

    renderCart() {
        return this.props.cartBags.map(cartBag => {
            return (
                <div>
                    <h2>{cartBag.title}</h2>
                </div>
            )
        })
    }
    
    render() {
        switch (this.props.auth)
        {
          case false:
              return (
                    <div>
                    <Container>
                    <h2 style={nameStyle}>Login Here</h2>
                    <Button style={loginButtonStyle} href="/auth/google">Login to Google</Button>
                    </Container>
                    </div>
              )
          default:
                return (
                    <div>
                    <Container>
                    <h2 style={nameStyle}>{this.props.auth.name}</h2>
                    <h2 style={emailStyle}>{this.props.auth.email}</h2>
                    <Cart></Cart>
                    <Button style={loginButtonStyle} href="/api/logout">Logout</Button>
                    </Container>
                    </div>
                )
        }
    }
}

const nameStyle = {
    color: 'white',
    fontSize: '2em',
    textAlign: 'center',
    margin: '0 5% 2% 5%'
}

const emailStyle = {
    color: 'white',
    fontSize: '1.2em',
    textAlign: 'center',
    margin: '0 0% 2% 0%'
}

const divStyle = {
    marginLeft: '10px'
}

const loginButtonStyle = {
    margin: '30% 5% 1% 5%',
    width: '90%',
    fontSize: '1em',
    fontAlign: 'center'
}




function mapStateToProps({ auth, cartBags }) {
    return {
        auth,
        cartBags
    };
}

export default connect(mapStateToProps, { fetchCartBags })(Login);