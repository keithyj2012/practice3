import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navigation = () => {

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">TEST</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#features">Test2</Nav.Link>*/}
                        <Nav.Link href="#triads">Triads</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
