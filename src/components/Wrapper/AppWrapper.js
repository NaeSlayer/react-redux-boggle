import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from './Header';
import Footer from './Footer';

const AppWrapper = props => {
    return (
        <div>
            <Header />
            <div className='container'>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default AppWrapper;