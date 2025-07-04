import React from 'react'
import { Box,Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => {
  return (
    //p stands for padding
    <Box sx={{
        mt:{lg:'190px', xs:'60px'},
        ml:{sm:'30px'}
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px" mb={3}>
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'40px'}}} mb={3}>
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="30px" mb={3}>
            Check out the most effective exercises
        </Typography>
        {/*varient and error are used as per material ui docs */}
        <Button variant='contained' color='error' href='#exercises'>Explore Exercises</Button>
        <Typography fontWeight={600} color='#ff2625'
        sx={{opacity:0.1,
            display:{lg:'block', xs:'none'}
        }}
        fontSize="200px">
            Exercises
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'></img>
    </Box>
  )
}

export default HeroBanner