import React from 'react';
import { Typography, Grid, Button, Box, Stack } from '@mui/material';
import { Apple, Google } from '@mui/icons-material';
import Button1 from '../components/Button1'
const Grids = () => {
  return (
    <Box sx={{marginLeft:'10px' , marginRight:'10px'}}>
    <Stack spacing={4} sx={{ alignItems: 'center', padding: 2 }}>
      {/* Section 1 */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.prismic.io/quizlet-web/ZpWfER5LeNNTxK_S_flashcards-image.png?auto=format,compress"
            alt="Flashcards Image"
            sx={{ width: '95%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='h4' sx={{ marginBottom: 4 }}>Every class, every test, one ultimate study app. </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            Create your own flashcards or find sets made by teachers, students, and experts. Study them anytime, anywhere with our free app.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>

            <Button1 />
          </Box>
        </Grid>
      </Grid>

      {/* Section 2 */}
      <Grid container spacing={2} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ marginBottom: 4 }}>
            Make class material instantly studiable.</Typography>
            <Typography variant="body1" sx={{ marginBottom: 4 }} >Turn your slides, videos, and notes into flashcard sets, practice tests, and study guides.</Typography>

          <Button variant="contained" sx={{ borderRadius: '8px', width:'150px', height:'60px' }}>Try it out</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.prismic.io/quizlet-web/ZpWfEh5LeNNTxK_T_study-guides-image.png?auto=format,compress"
            alt="Study Guides Image"
            sx={{ width: '95%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>

      {/* Section 3 */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.prismic.io/quizlet-web/ZpWfEx5LeNNTxK_U_learn-image.png?auto=format,compress"
            alt="Learn Image"
            sx={{ width: '85%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Test prep for any subject. Memorize anything with personalized practice tests and study sessions in Learn. 98% of students say Quizlet has improved their understanding.
          </Typography>
          <Button variant="contained" sx={{ borderRadius: '8px', width:'150px', height:'60px'  }}>Get Started</Button>
        </Grid>
      </Grid>

      {/* Section 4 */}
      <Grid container spacing={2} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
        <Grid item xs={12} md={6}>
          <Typography variant='h4' sx={{marginBottom: 2 }}>TEACHERS</Typography>
          <Typography variant="h6" sx={{ marginBottom: 2 ,alignItems:'center'}}>
             Empower your students. Help every student confidently learn anything. With free flashcard sets, study modes, and in-class games like Quizlet Live.
          </Typography>
          <Button variant="contained" sx={{ marginBottom: 2 , borderRadius: '8px',width:'30%', height:'60px' }}>Sign up as a teacher</Button>
          <Typography sx={{ marginBottom: 2,color:'blueviolet',fontSize:'22px' }}>See how teachers use Quizlet</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.prismic.io/quizlet-web/ZpFqjB5LeNNTxHvk_teacher-image-LOH.png?auto=format,compress"
            alt="Teacher Image"
            sx={{ width: '85%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
    </Stack>
    </Box>
  );
};

export default Grids;
