import React from 'react';
import PropTypes from 'prop-types';
import styles from './StrFre.module.css';
import Row from 'react-bootstrap/Row';
import NodeFre from "../NodeFre/NodeFre";


const StrFre = (props) => {
    // Building nodes

    let node = [];
    for(let i=0; i<6; ++i){
        if(props.info && props.info[i]){
            // with circle
            node.push(<NodeFre circle={{name: props.info[i]}} borderStyle={props.borderStyle}/>)
        } else {
            node.push(<NodeFre circle={null} borderStyle={props.borderStyle}/>)
        }
    }





    return (
        <Row className={styles.StrFre}>
            {node}
        </Row>

    );
}


export default StrFre;
