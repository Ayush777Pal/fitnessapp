import React from 'react'
import {Route,Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExerciseDetails from './pages/ExerciseDetails';
import './App.css'

const App = () => {
  return (
 <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
  {/*to make website responsive for extra large devices, material ui allows us to do give margin auto*/}
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
      </Routes>
    <Footer/>
 </Box>
  )
}

export default App