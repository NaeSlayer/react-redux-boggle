import React, { Component } from 'react';
import './letterBoard.css';

export default function LetterCard(props) {
    return (
        <div>
            <button disabled={props.disabled} onClick={props.onClick} key={props.index} className={`ltrBtn ${props.active}`}>{props.value}</button>
        </div>
    )
}