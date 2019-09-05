import React from 'react';
import Button from '../ControlPanelCard/Button';

export default function CurrentGuess(props) {
    return (
        <div className='currentGuess'>
            <input value={props.currentGuess} />
            <Button
                onClick={props.clearWordClick}
                value='x'
                type='clearBtn'
            />
        </div>
    )
}