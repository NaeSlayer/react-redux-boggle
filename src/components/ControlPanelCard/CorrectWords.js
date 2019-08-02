import React, { Component } from 'react';

class CorrectWords extends Component {

    render() {
        return (
            <div className='wordBox'>
                <h6>Correct Words</h6>
                {this.props.correctWords ? <ol>
                    {this.props.correctWords.map((word, index) => {
                        return <li key={index}>{word}</li>
                    })}
                </ol> : <div />}

            </div>
        )
    }
}

export default CorrectWords;