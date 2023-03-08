import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink, useLocation} from "react-router-dom";


const Navigation = () => {

    return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={`pl-3 pr-3`}>
                <Navbar.Brand style={{color: "green"}}>TEST</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#features">Test2</Nav.Link>*/}

                        <Nav.Link><NavLink className={"nav-link"} to="/triads">Triads</NavLink></Nav.Link>

                        <Nav.Link><NavLink className={"nav-link"} to="/pent">Pent</NavLink></Nav.Link>

                        {/*<Nav.Link><NavLink className={"nav-link"} to="/eTest">eTEST</NavLink></Nav.Link>*/}
                    </Nav>
                    <Nav>
                        <Nav.Link><NavLink className={"nav-link"} to="/about">About</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
