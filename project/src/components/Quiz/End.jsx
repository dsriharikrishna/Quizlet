import React, { useMemo } from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

const formatTime = (time) => {
  if (time < 60) {
    return time < 10 ? `0${time}s` : `${time}s`;
  } else {
    return Math.floor(time / 60) + 'm ' + (time % 60) + 's';
  }
};

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
 
  const correctAnswers = useMemo(() => {
    if (!results || !data || results.length === 0 || data.length === 0) return 0;
    return results.reduce((acc, result, index) => (
      result.a === data[index].answer ? acc + 1 : acc
    ), 0);
  }, [results, data]);

  if (!results || !data || results.length === 0 || data.length === 0) return null;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ maxWidth: 400, textAlign: 'center', p: 3, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>Your Results</Typography>
          <Typography variant="h6">{correctAnswers} of {data.length} correct</Typography>

          <Typography 
            variant="h5" 
            fontWeight="bold" 
            color={correctAnswers / data.length > 0.5 ? 'primary' : 'error'} 
            gutterBottom
          >
            {Math.floor((correctAnswers / data.length) * 100)}%
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>Your Time:</strong> {formatTime(time)}
          </Typography>

          <Box mt={2}>
            <Button variant="outlined" color="info" onClick={onAnswersCheck} sx={{ mr: 1 }}>
              Check Your Answers
            </Button>
            <Button variant="contained" color="success" onClick={onReset}>
              Try Again
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default End;
