import React from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./About.module.css"

const About = () => {
    return (
         <div className={styles.container}>
         <Navbar/> 
         <br/>
         <br/>
         <h1 className={styles.title}>Hotel-Management</h1>
         </div>
      
    )
}

export default About
