import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'//stack component manages the layout of immediate childeren along with vertical and horizontal access 
import Logo from '../assets/images/Logo.png';


const Navabar = () => {
  return (
    //Stack compoent is best part of material ui that makes all its inside component in form of stack
    //it also provide responsive design to the webpage
    //where sm stands for for small devices and xs stands for extra small devices px stands for padding x-axis 
    <Stack direction="row" justifyContent="space-around" sx={{gap:{sm: '122px', xs:'40px'},mt:{sm:'32px', xs:'20px'},justifyContent:'none'}} px="15px">
      <Link to="/">
      <img src={Logo} alt='logo' style={{width:'48px', height:'48px', margin:'0 20px'}}/>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        {/*for external link we use Link tag */}
        <Link to="/" style={{textDecoration:'none',color:'#3A1212',borderBottom:'3px solid #FF2625'}}>Home</Link>
        {/*for internal link we use anchor tag */}
        <a href='#exercises' style={{textDecoration:'none', color:'#3A1212'}}>Exercise</a>
      </Stack>
    </Stack>

    )
}

export default Navabar