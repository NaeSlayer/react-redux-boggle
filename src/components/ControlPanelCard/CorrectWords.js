import React, { Component } from 'react';

import { connect } from 'react-redux';
import ListItem from './ListItem'
// import CustomScroll from 'react-custom-scroll';

class CorrectWords extends Component {
    correctWordsDisplay = () => {
        const { correctWords, allPossibleWords, isGameOver } = this.props;
        if (isGameOver) {
            return allPossibleWords
        }
        else {
            return correctWords
        }
    }

    isHighlighted = (word) => {
        const { correctWords, isGameOver } = this.props;
        if (isGameOver && correctWords.includes(word)) {
            return { backgroundColor: '#FFAEAA', width: '120px' }
        }

    }

    render() {
        return (
            <div className='wordBox'>
                {/* <h6>Correct Words</h6> */}
                {/* <CustomScroll> */}
                <ul style={{ listStyleType: 'none' }}>
                    {this.correctWordsDisplay().map((word, index) => {
                        return <ListItem key={index} word={word} style={this.isHighlighted(word)} />
                    })}
                </ul>
                {/* </CustomScroll> */}

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        allPossibleWords: state.words.allPossibleWords,
        correctWords: state.words.correctWords,
        isGameOver: state.timer.isGameOver,
    }
}
export default connect(mapStateToProps)(CorrectWords);