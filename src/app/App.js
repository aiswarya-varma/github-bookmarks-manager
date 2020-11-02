import React from 'react';
import BookmarkedRepoContainer from '../components/BookmarkedRepoContainer';
import Header from '../components/Header';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="main">
            <Header />
            <BookmarkedRepoContainer />
        </div>
    );
}

export default App;