import React from 'react';
import { Row } from 'react-bootstrap';
import icon from '../img/logo.png';

const Header = () => {
    return (
        <div className="bg-img padding white-text" style={{ "height": "450px" }}>
            <Row className="icon">
                <img src={icon} alt="icon"></img>
            </Row>
            <Row style={{ "paddingTop": "50px" }} className="header justify-content-md-center">Github Repositories Manager</Row>
            <Row className="desc justify-content-md-center">Bookmark all the github repositories you need</Row>
        </div>
    );
};

export default Header;