import {combineReducers} from 'redux';
import newsReducers from './newsReducer';
import weatherReducer from './weatherReducer';

const rootReducers = combineReducers({
  news: newsReducers,
  weather: weatherReducer,
});

export default rootReducers;
