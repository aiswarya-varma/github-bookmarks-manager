import React from 'react';
import DefaultView from './DefaultView.js';
import AddBookmarkButton from './AddBookmarkButton.js';
import { Col, Row } from 'react-bootstrap';
import { AddRepoContext } from './utils.js';
import RepoList from './RepoList.js';

const BookmarkedRepos = ({ repositories, addRepoToView, removeRepoFromView }) => {
    return (
        <AddRepoContext.Provider value={addRepoToView}>
            <div className="space-around rounded-border repo-view-body">
                <Row>
                    <Col md={6}>
                        <h1 className="repo-view-heading"> Your Repositories </h1>
                    </Col>
                    <Col md={6}>
                        <AddBookmarkButton text="+" classname="float-right" />
                    </Col>
                </Row>
                {
                    repositories.length ?
                        <RepoList content={repositories} from="main" removeRepo={removeRepoFromView} />
                        : <DefaultView />
                }
            </div>
        </AddRepoContext.Provider>
    );
}

export default BookmarkedRepos;