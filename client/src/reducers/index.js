import { combineReducers } from 'redux';
import apps from './apps';
import cart from './cart';

const rootReducer = combineReducers({
  apps,
  cart
});

export default rootReducer;
