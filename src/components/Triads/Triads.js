import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Triads.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownCustom from "../UI/DropdownCustom/DropdownCustom";

import Triad from "./Triad";

const triads = [{value: 1}, {value: 2}, {value: 2}, {value: 3}, {value: 3}, {value: 3}]
const items =[{name: 1}, {name: 2}, {name: 3}]


const Triads = (props) => {

    const [stringSelector, setStringSelector] = useState(1);

    const updateStringSelector = (newValue) => {

        // event key given is a string value, so ensuring conversion to number
        setStringSelector(+newValue);
    }

    return (
        <Container fluid className={`${props.className} pr-4`}>
            <Row className={`flex-nowrap`}>
                <Col style={{flex: "0"}}>
                    <DropdownCustom name="Test" items={items} update={updateStringSelector}></DropdownCustom>
                </Col>
                <Triad triads={triads.filter(triad => triad.value === stringSelector)}></Triad>
            </Row>
        </Container>
    );
}

Triads.propTypes = {};

Triads.defaultProps = {};

export default Triads;
