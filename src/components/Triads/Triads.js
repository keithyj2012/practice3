import React, {useState, useReducer} from 'react';
import PropTypes from 'prop-types';
import styles from './Triads.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownCustom from "../UI/DropdownCustom/DropdownCustom";

import Triad from "./Triad";

const triads = [{value: 1, mkey: "Maj"}, {value: 2, mkey: "Maj"}, {value: 2, mkey: "Min"}, {value: 2, mkey: "Maj"}, {value: 2, mkey: "Maj"}, {value: 3, mkey: "Maj"}, {value: 3, mkey: "Min"}, {value: 3, mkey: "Maj"}]
const items =[{name: 1}, {name: 2}, {name: 3}]
const mkeys =[{name: "Maj"}, {name: "Min"}]

const reducer = (state, action) =>{

    if(action.type == 'items-update'){
        let updatedState = {...state};
        updatedState.value = action.value;
        return updatedState;
    } else if (action.type == 'mkey-update'){
        let updatedState = {...state};
        updatedState.mkey = action.value;
        return updatedState;
    } else {
        return state;
    }

}


const Triads = (props) => {


    const [triadState, dispatch] = useReducer(reducer, {value: '1', mkey: "Maj"})

    // const [stringSelector, setStringSelector] = useState(1);
    //
    const updateStringSelector = (newValue) => {

        // event key given is a string value, so ensuring conversion to number
        // setStringSelector(+newValue);
        dispatch({type: 'items-update', value: newValue});
    }

    const updateMkeysSelector = (newValue) => {

        // event key given is a string value, so ensuring conversion to number
        // setStringSelector(+newValue);
        dispatch({type: 'mkey-update', value: newValue});
    }

    return (
        <Container fluid className={`${props.className} ps-3 pe-3 pt-3`}>
            <Row className={`mb-3`}>
                <Col style={{flex: "0"}}>
                    <DropdownCustom name="Maj" items={mkeys} update={updateMkeysSelector} defaultName="Maj"></DropdownCustom>
                </Col>
                <Col style={{flex: "0"}}>
                    <DropdownCustom name="Loc" items={items} update={updateStringSelector} defaultName="1"></DropdownCustom>
                </Col>
            </Row>
            <Row className={`flex-nowrap`}>
                {/*triads={triads.filter(triad => triad.value === stringSelector)}*/}
                <Triad triads={triads.filter(triad => ((triad.value == triadState.value) && (triad.mkey == triadState.mkey)))}></Triad>
            </Row>
        </Container>
    );
}

Triads.propTypes = {};

Triads.defaultProps = {};

export default Triads;
