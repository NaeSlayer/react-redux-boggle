import React from 'react';

export default function Button(props) {
    return (
        <div>
            <button onClick={props.onClick} className={`button ${props.type}`}>
                {props.value}
            </button>
        </div>
    )
}