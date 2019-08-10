import { SET_CORRECT_WORDS, SET_CURRENT_GUESS, SET_BOARD_ARR } from '../actions/wordsActions';

const initialState = {
    allPossibleWords: [],
    correctWords: [],
    currentGuess: '',
    boardArr: [],
    selectedLettersIndexArr: [],
}

const words = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOARD_ARR:
            return Object.assign({}, state, {
                boardArr: action.value.newBoardArr,
                allPossibleWords: action.value.allPossibleWords,
            });

        case SET_CORRECT_WORDS:
            return Object.assign({}, state, {
                correctWords: action.value,
                currentGuess: '',
                selectedLettersIndexArr: [],
            });

        case SET_CURRENT_GUESS:
            return {
                ...state,
                currentGuess: action.value.currentGuess,
                selectedLettersIndexArr: action.value.selectedLettersIndexArr,
            }

        default:
            return state
    }
}

export default words;