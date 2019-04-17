import React from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const Image = (props) => {
    const source = require('../images/' + props.source);

    const pictureStyle = {
        width: '70%',
        margin: '0px 15% 0px 15%'
    };

    const buttonStyle = {
      margin: '0 % 0% 0% 0',
      width: '100%',
      fontSize: '1em',
      textAlign: 'center',
    }

    const linkStyle = {
      color: 'white',
      textDecoration: 'none'
    }

    const titleStyle = {
      margin: '2% 15% 2% 15%',
      width: '70%',
      height: '20%',
      textAlign: 'center',
      fontSize: '1.5vw'
    }

    const textStyle = {
      textAlign: 'center',
      fontSize: '1vw'

    }

    const cardStyle = {
      borderRadius: "px"
    }

      switch (props.auth)
      {
        case false:
            return (
              <Col sm="3" md="3">
              <Card>
                <CardImg top width="100%" style={pictureStyle} src={source} alt="Card image cap"/>
                <CardBody>
                  <CardTitle style={titleStyle}>{props.title}</CardTitle>
                  <Button style={buttonStyle}><span style={textStyle}><a style={linkStyle} href="/auth/google">Login For Cart</a></span></Button>
                </CardBody>
              </Card>
            </Col>
            )
        default:
              return (
                <Col sm="3" md="3">
                <Card>
                  <CardImg top width="100%" style={pictureStyle} src={source} alt="Card image cap" />
                  <CardBody>
                    <CardTitle style={titleStyle}>{props.title}</CardTitle>
                    <Button style={buttonStyle}><span style={textStyle}>Add to Cart<i className="small material-icons">add_shopping_cart</i></span></Button>
                  </CardBody>
                </Card>
              </Col>
              )
      }
/*            <div className="col s12 m4">
          <div className="card card medium">
            <div className="card-image">
                <img src={source} style={pictureStyle} alt="" />
                </div>
              <span className="card-title">{props.title}</span>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#!">Add to Cart</a>
            </div>
          </div>
          </div>*/
  }
  function mapStateToProps({ auth }) {
    return {
        auth
    };
}

export default connect(mapStateToProps)(Image);
