import {combineReducers} from 'redux';
import newsReducers from './newsReducer';

const rootReducers = combineReducers({
  news: newsReducers,
});

export default rootReducers;
