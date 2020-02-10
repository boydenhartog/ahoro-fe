import { combineReducers } from 'redux';
import expenses from './expenses';
import ui from './ui';

export default combineReducers({
  expenses,
  ui
});