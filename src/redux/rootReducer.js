import { combineReducers } from 'redux';
import { CountReducer } from './reducers/counter';

export const rootReducer = combineReducers({
  counter: CountReducer
});
