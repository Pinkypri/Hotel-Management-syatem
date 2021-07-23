import React from 'react'
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (

       <nav>
           <span className={styles.heading}>Hotel-Management</span>
           <ul>
               <Link to="/">Home</Link>
               <Link to="/customers">Customer</Link>
               <Link to="/about">About</Link>
               <Link to="/edit">Edit</Link>
           </ul>
       </nav>
    )
}

export default Navbar
