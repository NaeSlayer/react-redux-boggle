import React from 'react';

export const Header = () => (
    <div className='header'>
        <h1>Boggle</h1>
        <p>To play:</p>
        <ul>
            <li>Click on letters to select and add to current guess.</li>
            <li>When at least three letters have been selected, the word will automatically be submitted.</li>
            <li>If the word is correct, it will be added to the list of correct words.</li>
            <li>Letters must be diagonal or touching, and each letter can only be used once per word.</li>
            <li>Click on New Game to restart with a new board or Replay to restart the same board.</li>
            <li>Have Fun!</li>
        </ul>
    </div>
)