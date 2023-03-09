import React from 'react';
import PropTypes from 'prop-types';
import styles from './NodeFre.module.css';
import Col from 'react-bootstrap/Col'
import CircleFre from "../CircleFre/CircleFre";

const NodeFre = (props) => {
    return(
        <Col className={ `${styles.NodeFre} ${props.borderStyle}`}>
            {props.circle && <CircleFre name={props.circle.name} />}
        </Col>
    );
}



export default NodeFre;
