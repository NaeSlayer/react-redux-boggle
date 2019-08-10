//action types

export const SET_CORRECT_WORDS = 'SET_CORRECT_WORDS';
export const SET_CURRENT_GUESS = 'SET_CURRENT_GUESS';
export const SET_BOARD_ARR = 'SET_BOARD_ARR';


//action creators
export function setCorrectWords(correctWords) {
    return { type: SET_CORRECT_WORDS, value: correctWords }
}

export function setCurrentGuess(currentGuess, selectedLettersIndexArr) {
    return { type: SET_CURRENT_GUESS, value: { currentGuess: currentGuess, selectedLettersIndexArr } }
}

export function setBoardArr(shuffledArr, allPossibleWords) {
    console.log(allPossibleWords);
    return { type: SET_BOARD_ARR, value: { newBoardArr: shuffledArr, allPossibleWords: allPossibleWords } }
}