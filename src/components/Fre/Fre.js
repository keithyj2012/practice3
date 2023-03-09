import React from 'react';
import PropTypes from 'prop-types';
import styles from './Fre.module.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import NodeFre from "./NodeFre/NodeFre";
import StrFre from "./StrFre/StrFre";

const Fre = (props) => {

    let stringsHtml = [];
    let strings = ["E_h", "B", "G", "D", "A", "E_l" ];

    strings.forEach(string => {

        if(string == "E_h"){
            if(props.info && props.info[string]){
                // with string information
                stringsHtml.push(<StrFre info={props.info[string]} />)
            } else {
                stringsHtml.push(<StrFre />)
            }
        } else {
            if(props.info && props.info[string]){
                // with string information
                stringsHtml.push(<StrFre info={props.info[string]} borderStyle="border border-1"/>)
            } else {
                stringsHtml.push(<StrFre borderStyle="border border-1"/>)
            }
        }

    })


    return (
        <React.Fragment>
            <Container className="container text-center" style={{maxWidth: "300px"}}>
                {/*<StrFre info={{1: {name: "R", color: "yellow"}, 2: {name: "2", color: "yellow"}}}/>*/}
                {stringsHtml}
            </Container>
        </React.Fragment>
    );
}

export default Fre;
