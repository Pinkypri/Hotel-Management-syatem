import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch } from 'react-redux';
import { addUser } from '../Store/actions/user';
import { DateRangePicker } from "react-date-range"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import styles from "./Home.module.css";
import {Button,TextField} from "@material-ui/core"


const Home = () => {
    const [user, setuser] = useState({
        name: "",
        email: "",
        mobile: "",
        aadhar: "",
        address: "",
        date:"",

    });

    const [date, setdate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "Selection",
        }
    ]);
    
    const dispatch = useDispatch();

    const handAdd = (event) => {
        event.preventDefault();
        const {startDate,endDate}=date[0];
        const days=new Date(endDate).getDate()-new Date(startDate).getDate();
        const data={
            user,
            startTime:new Date(startDate).toLocaleString(),
            endTime:new Date(endDate).toLocaleString(),
            days,
        };
        if (
            user.name === "" ||
            user.email === "" ||
            user.mobile=== "" ||
            user.address === "" ||
            user.aadhar === "" ||
            data.days === "" ||
            endDate === null ||
            data.startTime === ""
          ) {
            return alert("Please fill all the details");
          }
      
      
      
        dispatch(addUser(data));
        setuser({
            name: "",
            email: "",
            mobile: "",
            aadhar: "",
            address: "",
            days:"",
        });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setuser((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        })
    }

    return (
        <div>
            <Navbar />
            <br />
            <br />
            <h2 className={styles.heading}>Please Fill This Form</h2>
            <br />
            <form>
              
                <TextField className={styles.title} 
                id="filled-required" 
                label="Name" 
                placeholder ="Enter your Name"
                variant="filled" 
                color="primary"
                 type="text" 
                 required
                 name="name" 
                 value={user.name} 
                 onChange={handleChange} /><br /><br />
            
                <TextField className={styles.title}
                id="filled-required" 
                label="Email" 
                placeholder ="entet your Email"
                variant="filled" 
                color="primary"
                 type="email" 
                 required     
                 name="email" 
                 value={user.email} 
                 onChange={handleChange} /><br /><br />

                <TextField className={styles.title}
                id="filled-required" 
                label="Mobile" 
                placeholder ="entet your Mobile Number"
                variant="filled" 
                color="primary"
                 type="Number" 
                required
                name="mobile" 
                value={user.mobile} 
                onChange={handleChange} /><br /><br />

                <TextField className={styles.title}
                id="filled-required" 
                label="Aadhar" 
                placeholder ="entet your Aadhar Number"
                variant="filled" 
                color="primary"
                type="Number"
                name="aadhar"
                required 
                value={user.aadhar} 
                onChange={handleChange} /><br /><br />
           
                <TextField className={styles.title}
                id="filled-required" 
                label="Address" 
                placeholder ="entet your Address"
                variant="filled" 
                color="primary"
                type="text" 
                required 
                name="address" 
                value={user.address} 
                onChange={handleChange} /><br />
                <p className={styles.para}>Number of Days you want to stay ? </p><br />
                <DateRangePicker editableDateInputs={true}
                className ={styles.date}
                onChange={(item) =>setdate([item.Selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}  value={user.date}/>
                <br/><br/>
                <Button color="secondary" className={styles.btn}type="submit" onClick={handAdd}>Submit</Button>

            </form>
        </div>
    )
}

export default Home
