/**
 * Fallback view to be displayed when there are no bookmarked repositories
 */

import React from 'react';
import { Row } from 'react-bootstrap';
import AddBookmarkButton from './AddBookmarkButton';

const DefaultView = () => {
    return (
        <div className="default-view">
            <Row className="justify-content-md-center font-medium">Oops! No Bookmarked Repositories</Row>
            <Row className="justify-content-md-center">
                <AddBookmarkButton text="Add Repositories to Bookmarks" />
            </Row>
        </div>
    );
}

export default DefaultView;