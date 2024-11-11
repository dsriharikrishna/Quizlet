import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, List, ListItem, Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ open, onClose, results, data }) => {
 
  const correctAnswers = results.filter((result, i) => result.a === data[i].answer).length;
  const incorrectAnswers = results.length - correctAnswers;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Your Answers
        <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          <strong>Correct Answers: </strong>{correctAnswers} / {results.length}
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          <strong>Incorrect Answers: </strong>{incorrectAnswers} / {results.length}
        </Typography>


        <List>
          {results.map((result, i) => (
            <ListItem
              key={i}
              sx={{
                mb: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              <Typography variant="body1" fontWeight="bold">{result.q}</Typography>

              <Box
                sx={{
                  backgroundColor: result.a === data[i].answer ? 'success.main' : 'error.main',
                  color: 'common.white',
                  padding: '8px',
                  borderRadius: '5px',
                  mt: 1,
                  width: '100%'
                }}
              >
                <Typography>Your answer: {result.a}</Typography>
              </Box>

              {result.a !== data[i].answer && (
                <Box
                  sx={{
                    backgroundColor: 'info.main',
                    color: 'common.white',
                    padding: '8px',
                    borderRadius: '5px',
                    mt: 1,
                    width: '100%'
                  }}
                >
                  <Typography>Correct answer: {data[i].answer}</Typography>
                </Box>
              )}

              <Box
                sx={{
                  backgroundColor: result.a === data[i].answer ? 'success.light' : 'error.light',
                  color: 'common.white',
                  padding: '6px',
                  borderRadius: '5px',
                  mt: 1,
                  width: '100%',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                {result.a === data[i].answer ? 'Correct' : 'Incorrect'}
              </Box>
            </ListItem>
          ))}
        </List>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
