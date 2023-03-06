import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import styles from './WelcomeModal.module.css';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

const WelcomeModal = (props) => {
    return(
        <React.Fragment>
            {ReactDom.createPortal(

                <Modal show={true}>
                    <Modal.Header closeButton onClick={props.onClose}>
                        <Modal.Title>Welcome</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Operation Flavius was a military operation in which three members of the Provisional Irish Republican Army (IRA) were killed by the British Special Air Service (SAS) in Gibraltar on 6 March 1988. The three were believed to be mounting a car bomb attack on British military personnel, but they proved to be unarmed and no bomb was discovered. This event started a violent spree in which mourners were killed at the funeral of the IRA members, then two British soldiers were killed after they accidentally drove into a funeral procession for one of the mourners. A documentary, "Death on the Rock", was televised on 24 April 1988 and presented the possibility that the three IRA members had been unlawfully killed. An inquest ruled that the SAS had acted lawfully, but the European Court of Human Rights held that the planning and control of the operation was so flawed as to make the use of lethal force almost inevitable, a breach of Article 2 of the European Convention on Human Rights. (Full article...)

                            Recently featured: Simonie MichaelHooded pitohuiWaddesdon Bequest
                            ArchiveBy emailMore featured articlesAbout</p>
                    </Modal.Body>
                </Modal>

                , document.getElementById('welcome'))}
        </React.Fragment>
    );
}

WelcomeModal.propTypes = {};

WelcomeModal.defaultProps = {};

export default WelcomeModal;
