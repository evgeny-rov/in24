import { combineReducers } from 'redux';
import todo from './todo';
import progress from './progress';

export default combineReducers({ todo, progress });