import React from 'react';
import { Button } from 'react-bootstrap';

const AddBookmarkButton = (props) => {
    return (
        <Button variant="dark">{props.text}</Button>
    );
}

export default AddBookmarkButton;