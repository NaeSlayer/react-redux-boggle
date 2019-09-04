import React, { Component } from 'react';
import { connect } from 'react-redux';
import LetterCard from './LetterCard';
import { setCurrentGuess, setCorrectWords } from '../../state/actions/wordsActions';
import { validTransition } from './util';

let newCurrentGuess = '';
let currentGuessArr = [];
let selectedLettersIndexArr = [];

class LetterBoard extends Component {
    constructor(props) {
        super(props);
        this.handleLetterClick = this.handleLetterClick.bind(this);
    }

    handleLetterClick(letter, key) {
        const { allPossibleWords, setCorrectWords, correctWords } = this.props;

        //assign value from redux to newCurrentGuess and convert to array
        newCurrentGuess = this.props.currentGuess;
        currentGuessArr = newCurrentGuess.split('');

        //if current guess is empty then clear selectedLettersIndexArr
        if (currentGuessArr.length === 0) {
            selectedLettersIndexArr = [];
        }

        //check if letter index has already been selected and remove it if it is last in array
        if (selectedLettersIndexArr.includes(key)) {
            if (selectedLettersIndexArr.indexOf(key) === selectedLettersIndexArr.length - 1) {
                currentGuessArr = currentGuessArr.splice(0, currentGuessArr.length - 1);
                selectedLettersIndexArr = selectedLettersIndexArr.splice(0, selectedLettersIndexArr.length - 1);
                //if Q is last letter in currentGuess remove it
                if (currentGuessArr.indexOf('Q') === currentGuessArr.length - 1) {
                    currentGuessArr = currentGuessArr.splice(0, currentGuessArr.length - 1)
                }
            }
        } else if (this.isValidTransition(key)) {
            let newGuessArr = currentGuessArr.push(letter);
            let newSelectedLettersIndex = selectedLettersIndexArr.push(key);
        }
        //convert guess array back to string and call redux action
        newCurrentGuess = currentGuessArr.join('');
        this.props.setCurrentGuess();

        //check for correctWord and not duplicate when at least 3 letters have been selected
        let correct = allPossibleWords.includes(newCurrentGuess);
        let duplicate = correctWords.includes(newCurrentGuess);
        if (newCurrentGuess.length > 2 && correct && !duplicate) {
            let correctWordsArr = correctWords.concat(newCurrentGuess);
            correctWordsArr.sort(function (a, b) {
                return b.length - a.length || a.localeCompare(b)
            })
            setCorrectWords(correctWordsArr);
        }
    }

    isValidTransition = key => {
        const { selectedLettersIndexArr } = this.props;
        console.log(selectedLettersIndexArr);
        let prevKey = selectedLettersIndexArr[selectedLettersIndexArr.length - 1];
        if (prevKey != null) {
            let validIndexArr = validTransition[prevKey];
            console.log(validIndexArr);
            console.log(key);
            if (validIndexArr.includes(key)) {
                return true;
            } else return false;
        } else return true;
    }

    render() {
        return (
            <div className='letterBoard'>
                <table>
                    <tbody>
                        {this.props.boardArr.reduce((result, letter, index) => {
                            result[index / 4 | 0].push(
                                <td>
                                    <LetterCard
                                        index={index}
                                        value={letter}
                                        disabled={this.props.isGameOver}
                                        onClick={() => this.handleLetterClick(letter, index)}
                                        active={this.props.selectedLettersIndexArr.includes(index) ? "activeLetter" : "inactive"}
                                    />

                                </td>)
                            return result
                        }, [[], [], [], []]).map(row => {
                            return <tr>{row}</tr>
                        })}
                    </tbody>
                </table>
            </div>
        );

    }
}
const mapStateToProps = state => {
    return {
        allPossibleWords: state.words.allPossibleWords,
        correctWords: state.words.correctWords,
        currentGuess: state.words.currentGuess,
        selectedLettersIndexArr: state.words.selectedLettersIndexArr,
        boardArr: state.words.boardArr,
        isGameOver: state.timer.isGameOver,
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentGuess: value => dispatch(setCurrentGuess(newCurrentGuess, selectedLettersIndexArr)),
    setCorrectWords: value => dispatch(setCorrectWords(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LetterBoard);