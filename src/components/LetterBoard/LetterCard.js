import React, { Component } from 'react';
import './letterBoard.css';

class LetterCard extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick} key={this.props.index} className={`ltrBtn ${this.props.active}`}>{this.props.value}</button>
            </div>
        );
    }
}

export default LetterCard;