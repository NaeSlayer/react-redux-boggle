import React from 'react';
import './wrapper.css';

export default function Footer() {
    return (
        <div className='foot'>
            <p className='footlist'>&copy; 2019 Lanae Foard</p>
            <ul className='footlist'>
                <li><a href='lanaefoard.com'>Portfolio</a></li>
                <li><a href='github.com'>Github Repo</a></li>
            </ul>
        </div>
    );
}