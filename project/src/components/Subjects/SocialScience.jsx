import React, { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import SocialScienceData from '../Quiz/SocialScienceData.json';  
import Quiz from '../Quiz/Quiz';

const SocialScience = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleSelection = (quiz) => {
    setSelectedQuiz(quiz);
  };

  return (
    <Box>
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection="column">
          <Box mb={3}>
            <Button variant="contained" onClick={() => handleSelection('socialScience')}>Social Science Quiz</Button>
          </Box>
          <Box>
            {selectedQuiz === 'socialScience' && <Quiz quizData={SocialScienceData} />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SocialScience;
