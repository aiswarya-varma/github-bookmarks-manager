import React from 'react';
import DefaultView from './DefaultView.js';

const BookmarkedRepos = ({ repositories }) => {
    return (
        <div className="space-around rounded-border repo-body">
            <h1 className="repo-heading"> Your Repositories </h1>
            {
                repositories ? <div></div> : <DefaultView />
            }
        </div>
    );
}

export default BookmarkedRepos;