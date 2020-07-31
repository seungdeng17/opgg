import { combineReducers } from 'redux';
import summoner from './summoner';
import match from './match';

const rootReducer = combineReducers({
    summoner,
    match,
});

export default rootReducer;