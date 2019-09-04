import { STOP_TIMER, RESET_TIMER, DECREMENT_TIMER } from '../actions/timerActions';

const initialState = {
    timeLeft: 180,
    isGameOver: false
}

const timer = (state = initialState, action) => {
    switch (action.type) {
        case STOP_TIMER:
            return Object.assign({}, state, {
                isGameOver: true,
            });

        case RESET_TIMER:
            return Object.assign({}, state, {
                timeLeft: 180,
                isGameOver: false,
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