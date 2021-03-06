import React from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

const Image = (props) => {
    const source = require('../images/' + props.source);

    const pictureStyle = {
        width: '70%',
        margin: '0px 15% 0px 15%'
    };

    const buttonStyle = {
      margin: '0 5% 1% 5%',
      width: '90%',
      fontSize: '1em',
      fontAlign: 'center'
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
      fontSize: '1.5em'
    }

    const cardStyle = {
      borderRadius: "px"
    }

    const values = [
      
    ]

      switch (props.auth)
      {
        case false:
            return (
              <Col sm="3" md="3">
              <Card className="rounded">
                <CardImg top width="100%" style={pictureStyle} src={source} alt="Card image cap"/>
                <CardBody>
                  <CardTitle style={titleStyle}>{props.title}</CardTitle>
                  <Button style={buttonStyle}><a style={linkStyle} href="/auth/google">Login For Cart</a></Button>
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
                    <CardText style={titleStyle}>${props.price}</CardText>
                    <Button style={buttonStyle} onClick={() => this.props.submitCartBag(values, history)}>Add to Cart <i className="small material-icons">add_shopping_cart</i></Button>
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

export default connect(mapStateToProps, actions)(withRouter(Image));
