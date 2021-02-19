import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage(props) {
    return (
        <div className='LandingPage'>
            <h2>Welcome to Petful!</h2>
            <h3>Here's the process:</h3>
            <ol>
                <li>Click "See Pets"</li>
                <li>The next cat and the next dog will be shown</li>
                <li>If interested, join the queue</li>
                <li>When it is your turn, you will be able to select the next pet</li>
            </ol>
            <h3>Interested?</h3>
            <Link to='/adopt'>
                <button>Adopt!</button>
            </Link>
        </div>
    )
}