import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import CorrectWords from './CorrectWords';
import './controlPanel.css';
// import { setCurrentGuess, setCorrectWords, setBoardArr } from 

const diceArr = ['AAEEGN', 'ELRTTY', 'AOOTTW', 'ABBJOO', 'EHRTVW', 'CIMOTU', 'DISTTY', 'EIOSST', 'DELRVY', 'ACHOPS', 'HIMNQU', 'EEINSU', 'EEGHNW', 'AFFKPS', 'HLNNRZ', 'DEILRX'];

class ControlPanelCard extends Component {
    componentDidMount() {
        this.generateBoard();
    }
    generateBoard() {
        const { setBoardArr } = this.props;

        // reset LetterBoard variables
        let newLetterArr = [];
        let newBoarsString = '';

        // randomly select one letter from each die
        diceArr.map(dieString => {
            let dieArr = dieString.split('');
            let randomIndex = Math.floor(Math.random() * 6);
            let dieLetter = dieArr[randomIndex];
            newLetterArr.push(dieLetter);
            return newLetterArr;
        })
        console.log(newLetterArr);

        //randomize order of newLetterArr
        const shuffledArr = newLetterArr.slice();
        for (let i = shuffledArr.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [shuffledArr[i], shuffledArr[rand]] = [shuffledArr[rand], shuffledArr[i]];
        }
        console.log(shuffledArr);

        //replaces Q with QU
        for (let i = 0; i < shuffledArr.length; i++) {
            let indexQ = shuffledArr.indexOf('Q');
            if (indexQ > -1) {
                shuffledArr.splice(indexQ, 1, 'QU');
            }
        }

        //convert shuffledArr to string to send to API
        newBoardString = shuffledArr.join('');
        console.log(newBoarsString);
        //this will be replaced with response from API call
        let allPossibleWords = ['DOG', 'CAT', 'RAT'];

        return setBoardArr(shuffledArr, allPossibleWords);
    }

    resetGame = () => {
        let correctWords = [];
        this.props.setCorrectWords(correctWords);
    }

    restartClick = () => {
        this.resetGame();
        this.generateBoard();
    }

    newGameClick = () => {
        this.resetGame();
    }

    // submitWordClick = () => {
    //     const { correctWords, currentGuess, setCorrectWords } = this.props;
    //     const { isValidWord, clearWordClick } = this;
    //     if (isValidWord()) {
    //         let correctWordsArr = correctWords.concat(currentGuess);
    //         setCorrectWords(correctWordsArr);
    //     }
    // }

    // isValidWord = () => {
    //     const { allPossibleWords, currentGuess } = this.props;

    // }

    render() {
        return (
            <div className='controlPanel' xs={7}>
                <div className='newGameBtns'>
                    <Button
                        onClick={this.restartClick}
                        value='Restart'
                        type='ctrBtn'
                    />
                    <Button
                        onClick={this.newGameClick}
                        value='New Game'
                        type='ctrBtn'
                    />
                </div>
                <div className='submitWord'>
                    <input value={this.props.currentGuess} />
                    <Button
                        onClick={this.clearWordClick}
                        value='Clear'
                        type='ctrBtn'
                    />
                    <Button
                        onClick={this.submitWordClick}
                        value='Submit'
                        type='ctrBtns'
                    />
                </div>
                <div>
                    <CorrectWords correctWords={this.props.correctWords} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allPossibleWords: state.words.allPossibleWords,
        correctWords: state.words.correctWords,
        currentGuess: state.words.currentGuess,
        selectedLettersIndexArr: state.words.selectedLettersIndexArr
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentGuess: (currentGuess, selectedLettersIndexArr) => dispatch(setCurrentGuess(currentGuess, selectedLettersIndexArr)),
    setCorrectWords: value => dispatch(setCorrectWords(value)),
    setBoardArr: (shuffledArr, allPossibleWords) => dispatch(setBoardArr(shuffledArr, allPossibleWords)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanelCard);