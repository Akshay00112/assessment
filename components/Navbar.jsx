import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PROCOM
          </Typography>
          <Link style={{textDecoration:'none', color:'white'}} to={"/GridCard"}>HOME</Link>&nbsp;&nbsp;
          
          <Link style={{textDecoration:'none', color:'white'}} to={'/FormBasic'}>ADD</Link>&nbsp;&nbsp;

        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
