import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';

const Live = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        marginTop:'2px'
      }}
    >
      <Box sx={{ display:'flex',backgroundColor:'blue',width:'100%' , justifyContent:'center'}}>
        <Grid container spacing={3} alignItems="center" >
          {/* Image Section */}
          <Grid item xs={12} md={5} >
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
              }}
            >
              {/* Text content */}
              <Box sx={{ textAlign: 'center',color:'white' ,margin:'2px 10px 2px 10px'}} >
                <Typography variant="h4" gutterBottom fontWeight={600}>
                  Quizlet Live
                </Typography>
                <Typography variant="body1">
                  The fun, fast-paced classroom learning game that students love. Make lesson review collaborative, competitive, and engaging, customized with your lesson content.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* YouTube Video Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <iframe
                width="80%"
                height="80%"
                src="https://www.youtube.com/embed/-q6gUoJgZCM"  
                title="Live Event Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Live;
