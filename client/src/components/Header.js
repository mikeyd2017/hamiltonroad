import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

class Header extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225, hover: true});
    }

    render() {
        return (
        <div>
            <ul id="dropdown1" className="dropdown-content teal darken-2">
                <li><a href="#!">one</a></li>
                <li className="divider"></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>

            <nav className="teal darken-2">
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="bridges.html">Components</a></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">settings</i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return {
        auth
    };
}

export default connect(mapStateToProps)(Header);