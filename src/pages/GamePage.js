import React, { Component } from 'react';

import LetterBoard from '../components/LetterBoard/LetterBoard';
import ControlPanelCard from '../components/ControlPanelCard/ControlPanelCard';
import '../App.css';

class GamePage extends Component {
    render() {
        return (
            <div className='gameArea'>
                <LetterBoard />
                <ControlPanelCard />
            </div>
        );
    }
}

export default GamePage;