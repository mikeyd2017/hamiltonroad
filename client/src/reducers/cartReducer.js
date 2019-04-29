import { FETCH_CART_BAGS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CART_BAGS:
            return action.payload || false;
        default:
            return state;
    }
}