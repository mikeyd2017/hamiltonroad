import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleButton from 'react-google-button';
import { withRouter } from 'react-router';
import { Button, Col, Container} from 'reactstrap';
class Login extends Component {
    render() {
        switch (this.props.auth)
        {
          case false:
              return (
                    <div>
                    <Container>
                    <h2 style={spanStyle}>Login Here</h2>
                    <Button style={buttonStyle} href="/auth/google">Login to Google</Button>
                    </Container>
                    </div>
              )
          default:
                return (
                    <div>
                    <Container>
                    <h2 style={spanStyle}>{this.props.auth.name}</h2>
                    <Button style={buttonStyle} href="/api/logout">Logout</Button>
                    </Container>
                    </div>
                )
        }
    }
}

const spanStyle = {
    color: 'white',
    fontSize: '2em',
    textAlign: 'center',
    margin: '0 5% 2% 5%'
}

const divStyle = {
    marginLeft: '10px'
}

const buttonStyle = {
    margin: '0 5% 1% 5%',
    width: '90%',
    fontSize: '1em',
    fontAlign: 'center'
  }

function mapStateToProps({ auth }) {
    return {
        auth
    };
}

export default withRouter(connect(mapStateToProps)(Login))