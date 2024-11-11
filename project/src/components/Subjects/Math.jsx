import React, { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import MathData from '../Quiz/MathData.json';  
import Quiz from '../Quiz/Quiz';

const Math = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleSelection = (quiz) => {
    setSelectedQuiz(quiz);
  };

  return (
    <Box mt={2}>
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection="column">
          <Box mb={2}>
            <Button variant="contained" onClick={() => handleSelection('math')}>Math Quiz</Button>
          </Box>
          <Box>
            {selectedQuiz === 'math' && <Quiz quizData={MathData} />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Math;
