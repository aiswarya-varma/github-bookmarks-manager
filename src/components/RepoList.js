import React, { useContext } from 'react';
import { Button, Col, Container, Figure, ListGroup, Row } from 'react-bootstrap';
import Icofont from 'react-icofont';
import { AddRepoContext } from './utils.js';

const RepoList = props => {
    const addRepo = useContext(AddRepoContext);
    const isFromMain = props.from === "main";

    return (
        <ListGroup variant="flush">
            {
                props.content.map((item, i) =>
                    <ListGroup.Item key={i}>
                        <Row className="align-items-center">
                            {
                                isFromMain ?
                                    <>
                                        <Col md={2}>
                                            <Figure>
                                                <Figure.Image
                                                    width={171}
                                                    height={180}
                                                    alt="171x180"
                                                    src={item.owner.avatar_url}
                                                />
                                                <Figure.Caption>
                                                    <a className="repo-list-owner" href={item.owner.html_url} target="_blank">
                                                        {item.owner.login}
                                                    </a>
                                                </Figure.Caption>
                                            </Figure>
                                        </Col>
                                        <Col md={4}>
                                            <p className="repo-list-heading">{item.name}</p>
                                            <p>{item.description}</p>
                                        </Col>
                                    </>
                                    :
                                    <Col md={6}> {item.name} </Col>
                            }
                            <Col md={4}>
                                <Button variant="dark" onClick={() => window.open(item.html_url, "_blank")}>Go to Repo</Button>
                            </Col>
                            {
                                isFromMain ?
                                    <Col md={2} onClick={() => props.removeRepo(item.id)}><Icofont icon="ui-delete" size={2} /></Col> :
                                    <Col md={2} onClick={() => addRepo(item)}><Icofont icon="book-mark" /></Col>
                            }
                        </Row>
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    );
}

export default RepoList;