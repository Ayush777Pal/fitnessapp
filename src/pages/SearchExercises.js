import React from 'react'
import { useEffect, useState } from 'react'
import {Box, Button , Stack , TextField, Typography} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from '../components/HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  //when the user typed the input the the data of search and set search will be save inside the search and set search state
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  //useeffect is use to load the bodyPartList from the api
  useEffect(()=>{
    const fetchExerciseData = async ()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=1000&offset=100',exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
      console.log(bodyPartsData);
    }
    fetchExerciseData();
    },[])
  //handle search will handle the submission of the search exercise box
  const handleSearch =async ()=>{
    if(search){
      //data fetched by api is stored in the exerciseData 
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000&offset=100',exerciseOptions);
      const searchedExercises = exercisesData.filter(
       (item) => item.name.toLowerCase().includes(search)
       || item.target.toLowerCase().includes(search)
       || item.equipment.toLowerCase().includes(search)
       || item.bodyPart.toLowerCase().includes(search),
      );
      setSearch('');
      console.log(searchedExercises)
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'30px'}}}
      mb="50px" textAlign="center">
        Awesome Exercises You<br/>
        should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
        sx={{
          input:{fontWeight:'700', border:'none', borderRadius:'4px'},
          width:{lg:'800px',xs:'350px'},
          backgroundColor:'#fff',
          borderRadius:'40px'
        }}
        height="76px"
        //it will take the value written inside the searchbox and put it into the search and setSearch state
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercises'
        type='text'>

        </TextField>
        <Button className='search-btn'
        sx={{
          bgcolor:'#FF2625',
          color:'#fff',
          textTransform:'none',
          width:{lg:'175px',xs:'80px'},
          fontSize:{lg:'20px', xs:'14px'},
          height:'56px',
          position:"absolute",
          right:'0'
        }}
        onClick={handleSearch}
        >Search
        </Button>
      </Box>
      <Box sx={{position:"relative", width:'100%', p:'20px'}}>
        <HorizontalScrollbar data={bodyParts}
        bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  )
}

export default SearchExercises