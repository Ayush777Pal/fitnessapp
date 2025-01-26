import React,{useEffect, useState} from 'react'
import Pagination  from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';
import Loader from '../components/Loader';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const[currentPage, setCurrentPage]=useState(1);
  const [exercisePerPage] = useState(9);
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise= indexOfLastExercise - exercisePerPage;
  const currentExercises= exercises.slice(
    indexOfFirstExercise,indexOfLastExercise
  );

  const paginate = (e, value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1800, behavior:'smooth'})
  }
  //change state according to scroll bar
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=100', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100&offset=100`, exerciseOptions);
      }

      setExercises(exercisesData);
    };
    fetchExercisesData();
  },[bodyPart]);
    if(!exercises.length) return <Loader/>;
  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt="50px"
    p="20px">
      <Typography sx={{fontSize:{lg:'3rem',xs:'2rem'},ml:{lg:"auto", xs:'50px'}}} mb="46px">
        Showing Result
      </Typography>
      <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index)=>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length>9 && (
          <Pagination
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length/9)}
          page={currentPage}
          onChange={paginate}
          size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises