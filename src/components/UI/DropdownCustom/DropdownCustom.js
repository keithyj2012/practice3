import React from 'react';
import PropTypes from 'prop-types';
import styles from './DropdownCustom.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DropdownCustom = (props) => {

    const dropdownChangeHandler = (event) => {
        //console.log(event);
        props.update(event)
    }

    return (
        <Dropdown onSelect={dropdownChangeHandler}>
            <Dropdown.Toggle>
                {props.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {props.items.map(item => <Dropdown.Item eventKey={item.name}>{item.name}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    );
}

Dropdown.propTypes = {};

Dropdown.defaultProps = {};

export default DropdownCustom;
