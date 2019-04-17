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
                    <span style={spanStyle}>Logout Here</span>
                    <Button style={buttonStyle} href="/api/logout">Logout</Button>
                    </Container>
                    </div>
                )
        }
    }
}

const spanStyle = {
    color: 'white',
    fontSize: '2vw',
    textAlign: 'center',
    margin: '0 10% 0 10%'
}

const divStyle = {
    marginLeft: '10px'
}

const buttonStyle = {
    margin: '0 15% 2% 15%',
    fontSize: '1vw',
    width: '70%'
  }

function mapStateToProps({ auth }) {
    return {
        auth
    };
}

export default withRouter(connect(mapStateToProps)(Login))