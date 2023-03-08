import React from 'react';
import PropTypes from 'prop-types';
import styles from './Fre.module.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Fre = () => {
    return (
        <React.Fragment>
            <Container className="container text-center">
                <Row style={{maxHeight: "25px"}}>
                    <Col className="border border-1" style={{maxHeight: "25px"}}>
                        <span className={styles.circle}><div style={{verticalAlign: "middle", display: "inline-block", height: "100%", lineHeight: '5px'}}>R</div></span>
                    </Col>
                    <Col className="border border-1"></Col>
                    <Col className="border border-1"></Col>
                    <Col className="border border-1">
                        <span className="circle"></span>
                    </Col>
                    <Col className="border border-1"></Col>
                    <Col className="border border-1"></Col>
                </Row>
                <Row style={{height: "25px"}}>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                </Row>
                <Row style={{height: "25px"}}>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                </Row>
                <Row style={{height: "25px"}}>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                </Row>
                <Row style={{height: "25px"}}>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                </Row>
                <Row style={{height: "25px"}}>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                    <Col className="border"></Col>
                </Row>

            </Container>


        </React.Fragment>
    );
}

export default Fre;
