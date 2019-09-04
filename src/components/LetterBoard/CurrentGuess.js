import React from 'react';

export default function CurrentGuess(props) {
    return (
        <div className='currentGuess'>
            <input value={props.currentGuess} />
        </div>
    )
}