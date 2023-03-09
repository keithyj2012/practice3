import React from 'react';
import PropTypes from 'prop-types';
import styles from './CircleFre.module.css';
import Col from "react-bootstrap/Col";

const CircleFre = (props) => {

    let color = "";
   if(props.name){
       switch(props.name){
           case "R":
               color = "green"
               break;
           case "1":
               color = "blue";
               break;
           case "2":
               color = "yellow";
               break;
           default:
               color = "grey";
               break;

       }
   }


    return (
        <span className={styles.circle} style={{backgroundColor: color}}>
            <div className={styles.name}>{props.name}</div>
        </span>
    );
}


export default CircleFre;
