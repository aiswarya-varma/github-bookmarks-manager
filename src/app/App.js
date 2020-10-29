import React from 'react';
import './app.css';

const App = props => {
    return (
        <div className="main">
            <div className="bg-img padding">
                <div className="header text-center">Github Repositories Manager</div>
                <div className="desc text-center">Bookmark all the github repositories you need</div>
            </div>
            <h1> Your Repositories </h1>

        </div>
    );
}

export default App;