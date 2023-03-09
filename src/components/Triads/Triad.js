import React from 'react';
import styles from './Triad.module.css';
import Col from "react-bootstrap/Col";
import Fre from "../Fre/Fre";

const Triad = (props) => {
    return (
        <React.Fragment>
            {props.triads.map(triad =>
            <Col className={styles.triad}>
                {triad.value}
                <div style={{height: '50px', border: 'solid black 1px'}}>
                   <p>{triad.mkey}</p>
                </div>
                <Fre></Fre>
            </Col>)}
        </React.Fragment>
    );
}

Triad.propTypes = {};

Triad.defaultProps = {};

export default Triad;
