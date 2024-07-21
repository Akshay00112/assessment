import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

const FormBasic = () => {
    var [inputs,setInpuuts] = useState({name:"",price:"",category:""});
    const inputHandler = (e)=>{
        console.log(e.target.value);
        setInpuuts({...inputs,[e.target.name]:e.target.value});
        console.log(inputs);
    };
  return (
    <div style={{marginTop:"10",marginLeft:"45%"}}>
      <TextField variant="outlined" label="Name" onChange={inputHandler} name="name"
        value={inputs.username}/>
        <br /><br />
        <TextField variant="outlined" label="Price" onChange={inputHandler} name="price" value={inputs.price}/>
        <br /><br />
        <TextField variant="outlined" label="Category" onChange={inputHandler} name="category" value={inputs.category}/>
        <br /><br />
        <Button variant="contained" color='error'>submit</Button>
    </div>
  )
}

export default FormBasic
