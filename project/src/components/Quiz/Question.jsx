import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Card, CardContent, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input[type="radio"]:checked');
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError('');
    }
  };

  const nextClickHandler = () => {
    if (selected === '') {
      return setError('Please select one option');
    }
    onAnswerUpdate((prevState) => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ width: '100%', maxWidth: 600, padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant="h5" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
            {data.question}
          </Typography>
          <FormControl component="fieldset" error={!!error}>
            <FormLabel component="legend">Select an answer</FormLabel>
            <RadioGroup ref={radiosWrapper} value={selected} onChange={changeHandler}>
              {data.choices.map((choice, i) => (
                <FormControlLabel key={i} value={choice} control={<Radio color="primary" />} label={choice} />
              ))}
            </RadioGroup>
          </FormControl>
          {error && (
            <Typography color="error" variant="body2" sx={{ marginTop: '10px' }}>
              {error}
            </Typography>
          )}
          <Box display="flex" justifyContent="center" mt={3}>
            <Button variant="contained" color="primary" onClick={nextClickHandler} sx={{ padding: '10px 20px', fontSize: '16px', fontWeight: 'bold' }}>
              Next
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Question;
