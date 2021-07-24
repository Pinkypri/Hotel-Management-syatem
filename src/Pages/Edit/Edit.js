import React,{useState, useEffect} from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import {useDispatch,useSelector} from 'react-redux'
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {addUser} from "../../Store/actions/user"
import { TextField,Button } from "@material-ui/core";
import styles from "./Edit.module.css";




const Edit = () => {

    const [date, setdate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: "selection",
        },
      ]);
      const users = useSelector((state)=>state.edit)

console.log(users);
    const [user, setuser] = useState({
        name: "",
        email: "",
        mobile: "",
        aadhar: "",
        address: "",
        date: "",
      });



const dispatch = useDispatch()

const handleAdd =(event)=>{
 alert("successfully Uploaded Your Details")
 event.preventDefault();
 const { startDate, endDate } = date[0];
    const days = new Date(endDate).getDate() - new Date(startDate).getDate()+1;

    const data = {
      user,
      startTime: new Date(startDate).toLocaleString(),
      endTime: new Date(endDate).toLocaleString(),
      days,
    };


    if (
      user.name === "" ||
      user.email === "" ||
      user.mobile === "" ||
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
      name: '',
      email: "",
      contact: "",
      aadhar: "",
      address: "",
      date: "",
    });
}

const handleChange = (event) => {
    const { name, value } = event.target;
    
   
    setuser((prevState) => {
   
      return {
        
        ...prevState,
        [name]: value,
      };
    });
  };
 
 

  
  
  useEffect(() =>{
    if(!users){
      return (
        <div>
            <Navbar></Navbar>
              <h1>Edit</h1>
        </div>
      )
    }
    
    setuser({
      name: users[0].user.name,
      email: users[0].user.email,
      mobile: users[0].user.mobile,
      aadhar: users[0].user.aadhar,
      address: users[0].user.address,
      date:{
        startDate:new Date(users[0].startTime),
        endDate:new Date(users[0].endTime)
      } 
    });


  
  },[])
  
  

  if(users){

    return (
        <div>
            <Navbar></Navbar>
            <h1 >Edit</h1>

        

            <form Validate autoComplete="on">
        <h3>Edit user info</h3>

        <TextField className={styles.title}
          required
          id="filled-required"
          label="Name"
          variant="filled"
          type="text"
          name="name"
          onChange={handleChange}
          value={user.name}
          variant="outlined"
          color="primary"
        />
        <br />
        <TextField className={styles.title}
          required
          id="filled-required"
          label="Email"
          variant="filled"
           type="email"
          name="email"
          onChange={handleChange}
          value={user.email}
          variant="outlined"
          color="primary"
        />
        <br />
        <TextField className={styles.title}
          required
          id="filled-required"
          label="Mobile"
          variant="filled"
          type="number"
          name="contact"
          onChange={handleChange}
          value={user.mobile}
          variant="outlined"
          color="primary"
        />
        <br />
        <TextField className={styles.title}
          required
          id="filled-required"
          label="Aadhar Card No."
          variant="filled"
          type="number"
          name="aadhar"
          onChange={handleChange}
          value={user.aadhar}
          variant="outlined"
          color="primary"
        />
        <br />
        <TextField className={styles.title}
          required
          id="filled-required"
          label="Address"
          variant="filled"
          type="address"
          name="address"
          onChange={handleChange}
          value={user.address}
          variant="outlined"
          color="primary"
        />
        <br />
        <p className={styles.para}>Number of Days you want to stay ? </p><br />
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setdate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className ={styles.date}
        />
        <br />
        <Button className={styles.btn} color="primary" onClick={handleAdd}>
          Upload
        </Button>
      
      </form>



        </div>
    )
}
else{
    return(
      <div className={styles.container}>
      <Navbar/> 
      <br/>
      <br/>
      <h1 className={styles.title1}>Hotel-Management</h1>
      </div>
   
    )
}
}

export default Edit
