import React, { useRef, useState } from 'react';
import { Col, Row, Modal, Form, InputGroup, Button, FormControl } from 'react-bootstrap';
import RepoList from './RepoList.js';
import Icofont from 'react-icofont';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchRepos = props => {
    const [content, setContent] = useState([]);
    const [searchBy, setSearchBy] = useState("user");
    const input = useRef(null);
    const radios = ["user", "repository"];

    function handleSearch() {
        const isUser = searchBy === "user";
        const url = isUser ? `https://api.github.com/users/${input.current.value}/repos`
            : `https://api.github.com/search/repositories?q=${input.current.value}`;

        fetch(url)
            .then(res => res.json())
            .then(json => isUser ? json : json.items)
            .then(repos => repos.length ? setContent(repos) : toast.dark("No search results", { position: "top-center" }));
    }

    function handleClear() {
        input.current.value = "";
        setContent([]);
        input.current.focus();
    }

    function closeHandler() {
        setContent([]);
        props.handleClose();
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>Search for Repositories to bookmark</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ padding: "30px" }}>
                <Form>
                    <Row>
                        <Col md={4}>Search by:</Col>
                        {
                            radios.map((radio, i) => {
                                return <Col md={4} key={i}>
                                    <Form.Check
                                        type="radio"
                                        id={radio}
                                        label={radio}
                                        checked={radio === searchBy ? true : false}
                                        onChange={e => setSearchBy(e.currentTarget.id)} />
                                </Col>
                            })
                        }
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Search" ref={input} />
                            <InputGroup.Append>
                                <InputGroup.Text onClick={handleSearch}><Icofont icon="search-2" /></InputGroup.Text>
                                <InputGroup.Text onClick={handleClear}><Icofont icon="undo" /></InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Row>
                    <Row>
                        {content.length ? <RepoList content={content} from="modal" /> : <ToastContainer />}
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={() => closeHandler()}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SearchRepos;