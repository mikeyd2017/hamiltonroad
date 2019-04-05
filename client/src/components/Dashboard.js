import React, { Component } from 'react';
import Image from './Image';
import data from '../data.json';
//import { Link } from 'react-router-dom';

class Dashboard extends Component {
    createImage(image) {
        return <Image source={image} key={image}/>;
    }

    createImages(images) {
        return images.map(this.createImage);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        {this.createImages(data.images)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;