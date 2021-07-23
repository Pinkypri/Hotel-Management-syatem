import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import Navbar from "../Components/Navbar"
import { deleteUser,editUser } from '../Store/actions/user';
import style from "./Customer.module.css";
import {TableCell,TableHead,Paper,TableContainer,Table,TableBody,TableRow} from "@material-ui/core";
import {Edit,Delete}from "@material-ui/icons"


const Customer = () => {
    
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    
    return (
      <div>
         <Navbar/>
         <br/> 
         <h1 className={style.title}>Customer Information</h1>


<TableContainer component={Paper}>
        <Table  aria-label="customized table">
          <TableHead className={style.tableHeading}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Mobile</TableCell>
              <TableCell align="center">Aadhar no.</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Date of Check in</TableCell>
              <TableCell align="center">Date of Check Out</TableCell>
              <TableCell align="center">Total Days to stay</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>

{users.map((user,index)=>{
    
    return(
<TableBody>
          
              <TableRow key={index}>
                <TableCell  scope="row">{user.user.name}</TableCell>
                <TableCell align="right">{user.user.email}</TableCell>
                <TableCell align="right">{user.user.mobile}</TableCell>
                <TableCell align="right">{user.user.aadhar}</TableCell>
                <TableCell align="right">{user.user.address}</TableCell>
                <TableCell align="right">{user.startTime}</TableCell>
                <TableCell align="right">{user.endTime}</TableCell>
                <TableCell align="right">{user.days}</TableCell>
               <TableCell><Edit onClick={()=>dispatch(editUser(index))}></Edit></TableCell> 
              <TableCell><Delete onClick={()=>dispatch(deleteUser(index))}></Delete></TableCell>  
              </TableRow>
             
          </TableBody>
           )
        })}
        </Table>
      </TableContainer>

   
</div>
                      
    )
}

export default Customer

