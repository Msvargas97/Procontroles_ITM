import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as networkReducer } from 'react-native-offline';
import accountReducer from "./accountReducer";
import navReducer from './navReducer';

const allReducers = combineReducers({
    form: formReducer,
    network: networkReducer,
    account: accountReducer,
    nav: navReducer
});

export default allReducers;