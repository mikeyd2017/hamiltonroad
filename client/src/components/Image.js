import React from 'react';

const Image = (props) => {
    const source = require('../images/' + props.source);

    const pictureStyle = {
        width: '250px',
        margin: '0px 0px 0px 40px'
    };

    return (
            <div className="col s12 m4">
          <div className="card card medium">
            <div className="card-image">
                <img src={source} style={pictureStyle} alt="" />
                </div>
              <span className="card-title">Card Title</span>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#!">Add to Cart</a>
            </div>
          </div>
          </div>
    );
};
export default Image;