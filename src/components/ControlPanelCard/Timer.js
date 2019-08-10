import React from 'react';

export default function Timer(props) {
    return (
        <div className='timer'>
            <div>{props.timeLeft}</div>
        </div>
    )
}