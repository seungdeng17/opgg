import { combineReducers } from 'redux';
import summoner from './summoner';
import match from './match';
import gameDescription from './gameDescription';

const rootReducer = combineReducers({
    summoner,
    match,
    gameDescription,
});

export default rootReducer;