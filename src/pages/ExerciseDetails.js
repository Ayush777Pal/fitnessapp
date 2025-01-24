import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercise from '../components/SimilarExercise'

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id }=useParams();
  //useeffect to populate it
  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl= 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`,youtubeOptions)
      setExerciseVideos(exerciseVideoData);
    }
    fetchExercisesData();
  },[id]);

  return (
    <Box>
      <Details ExerciseDetail={exerciseDetail}/>
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
        <SimilarExercise/>
    </Box>
  )
}

export default ExerciseDetails