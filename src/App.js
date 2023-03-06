import logo from './logo.svg';
import './App.module.css';
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Triads from "./components/Triads/Triads";
import Navigation from "./components/UI/Navigation/Navigation";
import styles from './App.module.css'
import WelcomeModal from "./components/UI/WelcomeModal/WelcomeModal";

function App() {

    const [firstVisit, setFirstVisit] = useState(true);

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
        <Triads className={styles.AppTriads}></Triads>
        {firstVisit && <WelcomeModal onClose={updateFirstVisit}></WelcomeModal>}
    </React.Fragment>
  );
}

export default App;
