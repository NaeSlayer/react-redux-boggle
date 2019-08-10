import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

// import { Header } from '../components/Wrapper/Header';
import GamePage from '../pages/GamePage';
import { InfoPage } from '../pages/InfoPage';
import { HighScoresPage } from '../pages/HighScoresPage';
import '../components/Wrapper/wrapper.css';
import Row from 'react-bootstrap/Row';

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Row>
                <nav className='menu'>
                    <ul className='footlist'>
                        <li><NavLink to='/' activeClassName='menu selected' exact={true}>Play</NavLink></li>
                        <li><NavLink to='/info' activeClassName='menu selected' exact={true}>Info</NavLink></li>
                        <li><NavLink to='/scores' activeClassName='menu selected' exact={true}>Scores</NavLink></li>
                    </ul>
                </nav>
            </Row>
            <Row>
                <Switch>
                    <Route path='/' component={GamePage} exact={true} />
                    <Route path='/info' component={InfoPage} />
                    <Route path='/scores' component={HighScoresPage} />
                </Switch>
            </Row>
        </Fragment>
    </BrowserRouter>
);
