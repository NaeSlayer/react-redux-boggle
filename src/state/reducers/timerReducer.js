import { STOP_TIMER, START_TIMER, RESET_TIMER, DECREMENT_TIMER } from '../actions/timerActions';

const initialState = {
    timeLeft: 10,
}

const timer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:
            return Object.assign({}, state, {
                isLoggedIn: true,
            });

        case STOP_TIMER:
            return Object.assign({}, state, {
                isLoggedIn: true,
            });

        case RESET_TIMER:
            return Object.assign({}, state, {
                timeLeft: 10,
            });

        case DECREMENT_TIMER:
            return Object.assign({}, state, {
                timeLeft: state.timeLeft - 1,
            });

        default:
            return state
    }
}

export default timer;