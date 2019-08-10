// action types

export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const DECREMENT_TIMER = 'DECREMENT_TIMER';


// action creators

export function startTimer() {
    return { type: START_TIMER }
}

export function stopTimer() {
    return { type: STOP_TIMER }
}

export function resetTimer() {
    return { type: RESET_TIMER }
}

export function decrementTimer() {
    return { type: DECREMENT_TIMER }
}