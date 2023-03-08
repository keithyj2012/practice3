import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './DropdownCustom.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const DropdownCustom = (props) => {

    const [dropdownName, setDropdownName]=useState(props.defaultName);


    const dropdownChangeHandler = (event) => {
        setDropdownName(event);
        props.update(event)
    }

    return (
        <Dropdown onSelect={dropdownChangeHandler}>
            <Dropdown.Toggle>
                {dropdownName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {props.items.map(item => <Dropdown.Item eventKey={item.name}>{item.name}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownCustom;
