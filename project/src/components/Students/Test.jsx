import React from 'react';
import { Box, Button, Typography, Grid, Stack } from '@mui/material';
import { Computer, Check, Note } from '@mui/icons-material';
import imag1 from '../../assets/test.png'

const Test = () => {
  return (
    <Box mt={1}  sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>
      <Grid container mb={2} spacing={3} sx={{ backgroundColor: 'blue'}}>

        {/* Left Section */}
        <Grid item xs={12} md={5}>
          <Stack alignItems="center" spacing={2} mb={5} sx={{ backgroundColor: 'blue', color: 'white', padding: 3, borderRadius: 2 }}>
            <Typography variant="h4" fontWeight="bold" textAlign="center">Make the material stick with Test Mode</Typography>
            <Typography variant="body1" textAlign="center">Get graded on practice tests to check how much you know and prepare for your next big exam.</Typography>

            <Typography><Note fontSize="small" sx={{ mr: 1 }} />Questions formatted your way</Typography>
            <Typography>Test yourself with multiple choice, true/false, and other question types to better learn the material.</Typography>

            <Typography><Check fontSize="small" sx={{ mr: 1 }} />Get graded on your responses</Typography>
            <Typography>With auto-grading, get feedback on what you know and where you need to spend more time studying.</Typography>

            <Typography><Computer fontSize="small" sx={{ mr: 1 }} />Take a test, anywhere</Typography>
            <Typography>With Test Mode available on both iOS and Android, you can get practice in wherever you go.</Typography>

            <Button variant="contained" color="primary">Try Test Mode for Free</Button>
          </Stack>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={5}>
          <Box component="img" src={imag1} alt="Test illustration" sx={{ marginLeft:'100px',width: '450px', height: '650px' ,borderRadius:'20px'}} />
        </Grid>
      </Grid>

      {/* Additional Sections with Alternating Rows */}
      <Grid container spacing={4} mb={5} sx={{ marginX: 'auto', width: '90%', justifyContent: 'center', alignItems: 'center' }}>

        {/* Feature: Get ready for test day */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.prismic.io/quizlet-web/NDVkNTYwYzUtZjE4ZS00NGI4LTllNWUtYTljMDM4OGJkMTc0_0274af31-acec-425b-89e7-849323ec154a_03-optionsmenu.png?auto=compress,format&rect=0,0,1000,1000&w=1000&h=1000"
            alt="Multiple Choice"
            sx={{ width: '100%', borderRadius: 3, boxShadow: 3 }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ paddingX: 3 }}>
          <Typography variant="h6" fontWeight="bold" mb={5} gutterBottom>Get ready for test day</Typography>
          <Typography variant="body2" mb={5}>
            Set up your test in a way that makes the most sense to you! With Test Mode, you can choose from question formats you're most likely to see on your exam and set a timer to get comfortable doing your best under pressure.
          </Typography>
          <Button variant="outlined" color="primary">Watch how to create a practice test</Button>
        </Grid>

        {/* Feature: Challenge yourself with different questions */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box
            component="img"
            src="https://images.prismic.io/quizlet-web/ZWIwMTU2YjAtY2ExOS00OTJkLTkxODEtNDEwNGRmYTY5MmZl_c21c6c50-67ae-44c9-b7e4-3d256b15f7f8_02-questiontypes.gif?auto=compress,format&rect=0,0,1000,1000&w=1000&h=1000"
            alt="Progress Bar"
            sx={{ width: '100%', borderRadius: 3, boxShadow: 3 }}
          />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{ paddingX: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom mb={5}>Challenge yourself with different questions</Typography>
          <Typography variant="body2" mb={5}>
            Use different question formats to go beyond memorization. By answering the same question in different ways, you can gain confidence knowing that you've learned the material.
          </Typography>
          <Button variant="outlined" color="primary">Learn More</Button>
        </Grid>

        {/* Feature: Challenge as You Learn */}
        <Grid item xs={12} md={6} sx={{ paddingX: 3 }}>
          <Typography variant="h6" fontWeight="bold" mb={5} gutterBottom>Get challenged the more you learn</Typography>
          <Typography variant="body2" mb={5}>
            As you answer more practice questions correctly, you're advanced from easier multiple choice questions to harder, written ones.
          </Typography>
          <Button variant="outlined" color="primary">Read more about question types</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.prismic.io/quizlet-web/MWE5NWQxNTktYzQ5NS00NWRlLWE0MjUtN2FjNjY3YTQyNDE1_72f349b1-de65-40d7-b638-63fce24a603d_04-testresults.png?auto=compress,format&rect=0,0,1000,1000&w=1000&h=1000"
            alt="Written Question"
            sx={{ width: '100%', borderRadius: 3, boxShadow: 3 }}
          />
        </Grid>
      </Grid>

      {/* Testimonials Section */}
      <Stack alignItems="center" mt={5}>
        <Typography variant="h4" textAlign="center" maxWidth="800px">
          94% of students who use Learn or Test say Quizlet helps them get better grades*
        </Typography>
      </Stack>
    </Box>
  );
};

export default Test;
