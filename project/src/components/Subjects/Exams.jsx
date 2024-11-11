import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Math from './Math';
import Science from './Science';
import SocialScience from './SocialScience';

const Exams = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleSelection = (quiz) => {
    setSelectedQuiz(quiz);
  };

  return (
    <Box sx={{
      backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/09/04/10/23/boy-3653385_1280.jpg")',
      backgroundRepeat: 'no-repeat',   
      backgroundSize: 'cover',         
      backgroundPosition: 'center',    
      height:'auto',                
      display: 'flex',                  
      justifyContent: 'center',        
      alignItems: 'center',           
      color: 'white',                 
      textAlign: 'center',             
    }} >
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection="column">
          <Typography variant="h3" sx={{ mb: 4, fontWeight: 'bold' ,color:'green'}}>
            Choose Your Quiz
          </Typography>

          <Box display="flex" justifyContent="center" flexWrap="wrap" gap={4}>
            {/* Math Quiz Button with Image */}
            <Button
              variant="contained"
              onClick={() => handleSelection('math')}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '150px',
                textAlign: 'center',
                padding: 2,
                borderRadius: 2,
              }}
            >
              <img src="https://via.placeholder.com/50x50?text=Math" alt="Math" style={{ marginBottom: '2px' }} />
              Math Quiz
            </Button>

            {/* Science Quiz Button with Image */}
            <Button
              variant="contained"
              onClick={() => handleSelection('science')}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '150px',
                textAlign: 'center',
                padding: 2,
                borderRadius: 2,
              }}
            >
              <img src="https://via.placeholder.com/50x50?text=Science" alt="Science" style={{ marginBottom: '2px' }} />
              Science Quiz
            </Button>

            {/* Social Science Quiz Button with Image */}
            <Button
              variant="contained"
              onClick={() => handleSelection('socialScience')}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '150px',
                textAlign: 'center',
                padding: 2,
                borderRadius: 2,
              }}
            >
              <img src="https://via.placeholder.com/50x50?text=Social+Science" alt="Social Science" style={{ marginBottom: '2px' }} />
              Social Science Quiz
            </Button>
          </Box>

          {/* Render selected quiz */}
          <Box mb={10} >
            {selectedQuiz === 'math' && <Math />}
            {selectedQuiz === 'science' && <Science />}
            {selectedQuiz === 'socialScience' && <SocialScience />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Exams;
