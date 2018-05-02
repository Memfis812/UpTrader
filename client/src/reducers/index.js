import { combineReducers } from 'redux';
import tradeReducer from './tradeReducer';
import tradeMobileReducer from './tradeMobileReducer';
import animElemReducer from './animElemReducer';

const rootReducer = combineReducers({
  tradeReducer,
  tradeMobileReducer,
  animElemReducer
});

export default rootReducer;