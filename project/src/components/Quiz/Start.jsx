import React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';

const Start = ({ onQuizStart }) => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      bgcolor="#f0f4f8" 
      sx={{
        backgroundImage: 'url("https://source.unsplash.com/random/1600x900?quiz")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Card 
        sx={{
          maxWidth: 400,
          padding: '30px',
          textAlign: 'center',
          borderRadius: '20px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <CardContent>
          <Typography variant='h4' sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Start the Quiz
          </Typography>
          <Typography variant='body1' color="textSecondary" sx={{ marginBottom: '30px' }}>
            Good Luck!
          </Typography>
          <Button 
            variant='contained' 
            color="primary" 
            onClick={onQuizStart} 
            sx={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '8px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#3a7bd5',
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)'
              }
            }}
          >
            Start
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Start;
