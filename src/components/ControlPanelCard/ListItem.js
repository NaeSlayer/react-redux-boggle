import React from 'react';
import { calculateWordScore } from '../GamePage/util';

export default function ListItem(props) {
    return (
        <div className='listItem'>
            <li key={props.index} style={props.style}>{`${calculateWordScore(props.word)} ${props.word}`}</li>
        </div>
    )
}