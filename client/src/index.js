import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));