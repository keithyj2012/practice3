import logo from './logo.svg';
import './App.module.css';
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Triads from "./components/Triads/Triads";
import Pent from "./components/Pent/Pent";
import Navigation from "./components/UI/Navigation/Navigation";
import Fre from "./components/Fre/Fre";
import styles from './App.module.css'
import WelcomeModal from "./components/UI/WelcomeModal/WelcomeModal";
import {Route, Routes} from "react-router-dom";

function App() {


    const [firstVisit, setFirstVisit] = useState(true);

    // A welcome message is displayed for first time users
    useEffect(() => {

        const storedUserHasVisited = localStorage.getItem("hasVisited");

        if(storedUserHasVisited == "true"){
            setFirstVisit(false);
        }

    }, [])

    const updateFirstVisit = () =>{
        localStorage.setItem("hasVisited", "true");
        setFirstVisit(false);
    }



  return (
    <React.Fragment>
        <Navigation></Navigation>
        <Routes>
            <Route path="/triads" element={<Triads />} />
            <Route path="/pent" element ={<Pent />} />
            {/*<Route path="/eTest" element ={<div>TEST</div>} />*/}
            <Route path="/about" element ={<div>TEST</div>} />
        </Routes>
        {firstVisit && <WelcomeModal onClose={updateFirstVisit}></WelcomeModal>}
    <Container style={{width: "300px"}}>
        <Fre></Fre>
    </Container>

    </React.Fragment>
  );
}

export default App;
