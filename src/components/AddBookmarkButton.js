import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import SearchRepos from './SearchRepos.js';

const AddBookmarkButton = (props) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button
                variant="dark"
                className={props.classname}
                style={props.style}
                onClick={handleShow}
            >
                {props.text}
            </Button>
            <SearchRepos show={show} handleClose={handleClose} />
        </>
    );
}

export default AddBookmarkButton;