import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from './Image';
import cards from '../data.js';
//import { Link } from 'react-router-dom';

class Dashboard extends Component {

    createImage(cards) {
    return <Image source={cards.image} key={cards.image} title={cards.name}/>;
    }

    createImages(cards) {
        return cards.map(this.createImage);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        {this.createImages(cards)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;