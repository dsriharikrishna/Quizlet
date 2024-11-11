import React from 'react';
import { Box, Typography } from '@mui/material';

const ExpertSolutions = () => {
  return (

    <Box  sx={{margin:'10px', display: 'flex', alignItems: 'center', height: '100vh' }}>
      {/* Left side: Image */}
      <Box sx={{ flex: 1 }}>
        <img 
          src="https://cdn.pixabay.com/photo/2014/10/22/18/24/central-embassy-498560_1280.jpg"
          alt="Expert Solutions" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </Box>

      {/* Right side: Text content */}
      <Box sx={{ flex: 1, padding: '20px' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          Expert Solutions
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          We offer a variety of expert solutions tailored to meet your specific needs. 
          Our team of professionals provides high-quality services designed to help you 
          achieve your goals efficiently and effectively.
        </Typography>
      </Box>
    </Box>
  );
};

export default ExpertSolutions;
