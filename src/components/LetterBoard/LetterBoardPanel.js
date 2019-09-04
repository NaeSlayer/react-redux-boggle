import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateTotalScore } from '../GamePage/util';
import Timer from './Timer';
import LetterBoard from './LetterBoard';
import CurrentGuess from './CurrentGuess';
import './letterBoard.css';

class LetterBoardPanel extends Component {

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
            <div className='letterBoardPanel' xs={7}>
                <Timer timeLeft={this.props.isGameOver ? calculateTotalScore(this.props.correctWords) : this.convertTime()} />
                <LetterBoard />
                <CurrentGuess currentGuess={this.props.currentGuess} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        correctWords: state.words.correctWords,
        currentGuess: state.words.currentGuess,
        timeLeft: state.timer.timeLeft,
        isGameOver: state.timer.isGameOver,
    }
}


export default connect(mapStateToProps)(LetterBoardPanel);