import React,{useState} from 'react'
import {Box} from '@mui/material';
import HeroBanner from './HeroBanner';
import SearchExercises from './SearchExercises';
import Exercises from './Exercises';

const Home = () => {
    //we can add search exercises in the state so that we can later on use these states
    const [bodyPart, setBodyPart] = useState('all');
    const [exercise, setExercises] = useState([]);
    
  return (
    <Box>
      <HeroBanner></HeroBanner>
      <SearchExercises setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}></SearchExercises>
      <Exercises></Exercises>
    </Box>
  )
}

export default Home