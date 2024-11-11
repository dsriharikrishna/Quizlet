import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Cards from '../components/Cards';
import Grids from '../components/Grids';
import FlashCards from '../components/Students/FlashCards';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h4" gutterBottom sx={{ textTransform: 'capitalize' }}>
          How do you want to study?
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ textTransform: 'capitalize' }}>
          Master whatever you’re learning with Quizlet’s interactive flashcards, practice tests, and study activities.
        </Typography>
        <Button
          variant="contained"
          type="submit"
          component={Link}
          to='/login'
          sx={{
            padding: '10px 20px',
            width: '180px',
            borderRadius: '10px',
            marginTop: '15px',
            textTransform: 'none',
            
          }}
        >
          Sign up for free
        </Button>
      </Box>
      <Box sx={{ textAlign:'center', padding: '10px' }}>
        <Button component={Link} to='/Teacher'>I'm teacher</Button>
        <Cards/>
        <Grids/>
        <FlashCards/>
      </Box>

    </>
  );
};

export default Home;
