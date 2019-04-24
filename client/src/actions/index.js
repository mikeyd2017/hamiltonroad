import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_CART } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')

    dispatch({ type: FETCH_USER, payload: res.data});
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/cart', values);

    history.push('/bags');
    dispatch({ type: FETCH_CART, payload: res.data});
};