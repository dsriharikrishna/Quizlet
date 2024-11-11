import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import Start from './Start';
import Question from './Question';
import End from './End';
import Modal from './Modal';

const Quiz = ({ quizData }) => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (step === 2) {
      interval = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
    } else if (step === 3) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    setTime(0);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
  };

  const checkAnswersHandler = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh" justifyContent="center">
        {step === 1 && <Start onQuizStart={quizStartHandler} />}
        {step === 2 && (
          <Question
            data={quizData.data[activeQuestion]}
            onAnswerUpdate={setAnswers}
            numberOfQuestions={quizData.data.length}
            activeQuestion={activeQuestion}
            onSetActiveQuestion={setActiveQuestion}
            onSetStep={setStep}
          />
        )}
        {step === 3 && (
          <End
            results={answers}
            data={quizData.data}
            onReset={resetClickHandler}
            onAnswersCheck={checkAnswersHandler}
            time={time}
          />
        )}
        {showModal && (
          <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            results={answers}
            data={quizData.data}
          />
        )}
      </Box>
    </Container>
  );
};

export default Quiz;
