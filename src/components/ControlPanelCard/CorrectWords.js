import React, { Component } from 'react';
// import CustomScroll from 'react-custom-scroll';

class CorrectWords extends Component {

    render() {
        return (
            <div className='wordBox'>
                {/* <h6>Correct Words</h6> */}
                {/* <CustomScroll> */}
                {this.props.correctWords ? <ol>
                    {this.props.correctWords.map((word, index) => {
                        return <li key={index}>{word}</li>
                    })}
                </ol> : <div />}
                {/* </CustomScroll> */}

            </div>
        )
    }
}

export default CorrectWords;
