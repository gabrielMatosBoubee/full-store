import { combineReducers } from 'redux';
import cart from './cart'
import menuHamburguer from './menuHamburguer';

const reducers = combineReducers({ cart, menuHamburguer });

export default reducers;