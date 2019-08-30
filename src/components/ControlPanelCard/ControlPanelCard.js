import React, { Component } from 'react';
import unirest from 'unirest';
import { connect } from 'react-redux';
import Button from './Button';
import Timer from './Timer';
import CorrectWords from './CorrectWords';
import './controlPanel.css';
import { setCurrentGuess, setCorrectWords, setBoardArr } from '../../state/actions/wordsActions';
import { startTimer, stopTimer, resetTimer, decrementTimer } from '../../state/actions/timerActions';

const diceArr = ['AAEEGN', 'ELRTTY', 'AOOTTW', 'ABBJOO', 'EHRTVW', 'CIMOTU', 'DISTTY', 'EIOSST', 'DELRVY', 'ACHOPS', 'HIMNQU', 'EEINSU', 'EEGHNW', 'AFFKPS', 'HLNNRZ', 'DEILRX'];

let interval;
let key = 'SFDnA3CZHPmshcPp3Xahaj3lddh1p1WRUVVjsnyqNmEb5zEDyp'
// let allPossibleWords = [];


class ControlPanelCard extends Component {
    componentDidMount() {
        this.generateBoard();
    }

    componentDidUpdate() {
        const { timeLeft } = this.props;
        if (timeLeft < 1) {
            clearInterval(this.interval);
            this.gameOver();
        }
    }
    generateBoard() {
        const { setBoardArr } = this.props;
        this.startTimer();

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
        let newBoardString = shuffledArr.join('');
        console.log(newBoardString);

        //replaces Q with QU
        for (let i = 0; i < shuffledArr.length; i++) {
            let indexQ = shuffledArr.indexOf('Q');
            if (indexQ > -1) {
                shuffledArr.splice(indexQ, 1, 'QU');
            }
        }
        this.apiCall(newBoardString, shuffledArr);
    }

    apiCall = (letters, shuffledArr) => {
        const { setBoardArr } = this.props;
        unirest
            .get(`https://codebox-boggle-v1.p.rapidapi.com/${letters}`)
            .headers({ "x-rapidapi-host": "codebox-boggle-v1.p.rapidapi.com", "x-rapidapi-key": "SFDnA3CZHPmshcPp3Xahaj3lddh1p1WRUVVjsnyqNmEb5zEDyp", 'Accept': 'application/json', 'Content-Type': 'application/json' })
            .then((response) => {
                console.log(response.body);
                setBoardArr(shuffledArr, response.body);
            })

        // this works too

        // var req = unirest("GET", `https://codebox-boggle-v1.p.rapidapi.com/${letters}`);
        // req.headers({
        //     "x-rapidapi-host": "codebox-boggle-v1.p.rapidapi.com",
        //     "x-rapidapi-key": "SFDnA3CZHPmshcPp3Xahaj3lddh1p1WRUVVjsnyqNmEb5zEDyp"
        // });
        // req.then((response) => {
        //     console.log(response.body);
        //     this.setState({
        //         response: response.body
        //     });
        //     setBoardArr(shuffledArr, response.body)
        // })
        // return true
    }


    startTimer() {
        const { timeLeft, decrementTimer } = this.props;
        this.interval = setInterval(() => {
            decrementTimer();
        }, 1000);
    }

    resetGame = () => {
        const { setCorrectWords, resetTimer } = this.props;
        let correctWords = [];
        clearInterval(this.interval);
        setCorrectWords(correctWords);
        resetTimer();
    }

    gameOver() {
        console.log("game over");
        // this.calculateScore();
        alert("Thanks for playing! Your score is: " + this.calculateScore());
    }

    calculateScore = () => {
        console.log("calculateScore");
        const { correctWords } = this.props;
        console.log(correctWords);
        let totalScore = 0;
        let score = 0;
        for (let i = 0; i < correctWords.length; i++) {
            console.log("inside for loop");
            let length = correctWords[i].length;
            switch (length) {
                case 3:
                    score = 1;
                    break;
                case 4:
                    score = 1;
                    break;
                case 5:
                    score = 2;
                    break;
                case 6:
                    score = 3;
                    break;
                case 7:
                    score = 5;
                    break;
                case 8:
                    score = 11;
                    break
                default:
                    score = 11;
                    break;
            };
            totalScore = totalScore + score;
        }
        return totalScore;
    }

    restartClick = () => {
        this.resetGame();
        this.generateBoard();
    }

    newGameClick = () => {
        // this.resetGame();
        // this.calculateScore();
        console.log(this.calculateScore());
    }

    submitWordClick = () => {
        const { correctWords, currentGuess, setCorrectWords } = this.props;
        const { isValidWord, clearWordClick } = this;
        if (isValidWord()) {
            let correctWordsArr = correctWords.concat(currentGuess);
            setCorrectWords(correctWordsArr);
        }
    }

    isValidWord = () => {
        const { allPossibleWords, currentGuess } = this.props;
        if (currentGuess.length > 2 && allPossibleWords.includes(currentGuess)) {
            return true;
        }
    }

    convertTime = () => {
        const { timeLeft } = this.props;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft - minutes * 60;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return minutes + ":" + seconds;
    }

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
                    <Timer timeLeft={this.convertTime()} />
                </div>
                <div className='submitWord'>
                    <input value={this.props.currentGuess} />
                    {/* <Button
                        onClick={this.clearWordClick}
                        value='Clear'
                        type='ctrBtn'
                    /> */}
                    {/* <Button
                        onClick={this.submitWordClick}
                        value='Submit'
                        type='ctrBtn'
                    /> */}
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
        selectedLettersIndexArr: state.words.selectedLettersIndexArr,
        timeLeft: state.timer.timeLeft
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentGuess: (currentGuess, selectedLettersIndexArr) => dispatch(setCurrentGuess(currentGuess, selectedLettersIndexArr)),
    setCorrectWords: value => dispatch(setCorrectWords(value)),
    setBoardArr: (shuffledArr, allPossibleWords) => dispatch(setBoardArr(shuffledArr, allPossibleWords)),
    decrementTimer: () => dispatch(decrementTimer()),
    resetTimer: () => dispatch(resetTimer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanelCard);