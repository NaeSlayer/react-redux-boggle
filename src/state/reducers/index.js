import { combineReducers } from 'redux';
import words from './wordsReducer';
import timer from './timerReducer';

export default combineReducers({
    words,
    timer,
})