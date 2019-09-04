import React, { Component } from 'react';

import LetterBoardPanel from '../components/LetterBoard/LetterBoardPanel';
import ControlPanelCard from '../components/ControlPanelCard/ControlPanelCard';
import '../App.css';

class GamePage extends Component {
    render() {
        return (
            <div className='gameArea'>
                <ControlPanelCard />
                <LetterBoardPanel />
            </div>
        );
    }
}

export default GamePage;