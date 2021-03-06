import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import cartReducer from './cartReducer';

export default combineReducers({
   auth: authReducer,
   form: reduxForm,
   cartBags: cartReducer
});