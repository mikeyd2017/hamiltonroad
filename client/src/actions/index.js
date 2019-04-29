import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_CART_BAGS } from './types';
import { read } from 'fs';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')

    dispatch({ type: FETCH_USER, payload: res.data});
};

export const submitCartBag = (values, history) => async dispatch => {
    const res = await axios.post('/api/cartBags', values);

    history.push('/bags');
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const fetchCartBags = () => async dispatch => {
    const res = await axios.get('/api/cartBags');

    dispatch({ type: FETCH_CART_BAGS, payload: res.data });
}