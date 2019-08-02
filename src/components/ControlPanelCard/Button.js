import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick} className={`button ${this.props.type}`}>
                    {this.props.value}
                </button>
            </div>
        );
    }
}

export default Button;