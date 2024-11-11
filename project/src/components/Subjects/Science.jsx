import React, { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import ScienceData from '../Quiz/ScienceData.json';  
import Quiz from '../Quiz/Quiz';

const Science = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleSelection = (quiz) => {
    setSelectedQuiz(quiz);
  };

  return (
    <Box>
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection="column">
          <Box mb={3}>
            <Button variant="contained" onClick={() => handleSelection('science')}>Science Quiz</Button>
          </Box>
          <Box>
            {selectedQuiz === 'science' && <Quiz quizData={Data} />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Science;
