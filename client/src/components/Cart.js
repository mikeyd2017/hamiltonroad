import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    render() {
        return (
            <div>Cart</div>
        );
    }
}

function mapStateToProps({ auth }) {
    return {
        auth
    };
}

export default connect(mapStateToProps)(Cart);