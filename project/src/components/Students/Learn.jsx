import React from 'react';
import { Box, Button, Typography, Grid, Stack } from '@mui/material';

const Learn = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>

      {/* Practice Questions Section */}
      <Stack alignItems="center" spacing={2} mb={5}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">Practice Questions</Typography>
        <Typography variant="body1" textAlign="center" maxWidth="600px">
          Generate practice questions for any deck of flashcards to challenge your understanding and make learning more fun.
        </Typography>
        <Button variant="contained" color="primary">Try Learn</Button>
      </Stack>

      {/* Feature Highlights with Alternating Layout */}
      <Grid container spacing={3} mb={5} sx={{ marginX: 'auto', width: '90%' }}>

        {/* Feature: Different Question Formats */}
        <Grid item xs={12} md={4}>
          <Box textAlign="center" sx={{ padding: 2, boxShadow: 2, borderRadius: 2, backgroundColor: '#fff' }}>
            <Box component="img" src="https://quizlet-web.cdn.prismic.io/quizlet-web/acba6783-1722-4a08-bd4f-5970c9fded75_Multiple+Choice+%281%29.svg" alt="Multiple Choice" sx={{ width: '80px', height: '80px', mb: 2 }} />
            <Typography variant="h6" fontWeight="bold">Different question formats</Typography>
            <Typography variant="body2">Study with multiple choice, true or false, and written questions to test your knowledge.</Typography>
          </Box>
        </Grid>

        {/* Feature: Focused Study Sessions */}
        <Grid item xs={12} md={4}>
          <Box textAlign="center" sx={{ padding: 2, boxShadow: 2, borderRadius: 2, backgroundColor: '#fff' }}>
            <Box component="img" src="https://quizlet-web.cdn.prismic.io/quizlet-web/64f1978f06858cef7a1cc52f_ProgressDashboard.svg?auto=compress,format" alt="Progress Dashboard" sx={{ width: '80px', height: '80px', mb: 2 }} />
            <Typography variant="h6" fontWeight="bold">Focused study sessions</Typography>
            <Typography variant="body2">Learn helps you focus on what you know and what you need to learn, making studying easier.</Typography>
          </Box>
        </Grid>

        {/* Feature: Synced Across Devices */}
        <Grid item xs={12} md={4}>
          <Box textAlign="center" sx={{ padding: 2, boxShadow: 2, borderRadius: 2, backgroundColor: '#fff' }}>
            <Box component="img" src="https://quizlet-web.cdn.prismic.io/quizlet-web/b9256a16-e533-4e48-ac1e-d8e188405d73_Mobile+%28Ipad%2BPhone%29+%281%29.svg" alt="Mobile" sx={{ width: '80px', height: '80px', mb: 2 }} />
            <Typography variant="h6" fontWeight="bold">Synced across devices</Typography>
            <Typography variant="body2">Start your study session from any device, with progress synced across web and mobile.</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Additional Sections with Alternating Rows */}
      <Grid container spacing={4} mb={5} sx={{ marginX: 'auto', width: '90%' , justifyContent:'center',alignItems:'center' }}>

        {/* Feature: Turn Flashcards into Practice Questions */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.prismic.io/quizlet-web/64f1962e06858cef7a1cc52d_Multiplechoice.png?auto=format,compress"
            alt="Multiple Choice"
            sx={{ width: '100%', borderRadius: 3, boxShadow: 3 }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ paddingX: 3 }}>
          <Typography variant="h6" fontWeight="bold" mb={5} gutterBottom>Turn flashcards into practice questions</Typography>
          <Typography variant="body2" mb={5}>
            Find or create flashcards and use Learn to turn them into a series of practice questions to help you practice the material.
          </Typography>
          <Button variant="outlined" color="primary">Create Flashcards</Button>
        </Grid>

        {/* Feature: Focus on Areas of Improvement */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box
            component="img"
            src="https://images.prismic.io/quizlet-web/64f1962e06858cef7a1cc52c_Progressbar.png?auto=format,compress"
            alt="Progress Bar"
            sx={{ width: '100%', borderRadius: 3, boxShadow: 3 }}
          />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{ paddingX: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom mb={5}>Focus on the areas you need help with</Typography>
          <Typography variant="body2" mb={5}>
            Learn uses your past study behavior to identify what's most challenging for you, so your study session is more targeted.
          </Typography>
          <Button variant="outlined" color="primary">Learn More</Button>
        </Grid>

        {/* Feature: Challenge as You Learn */}
        <Grid item xs={12} md={6} sx={{ paddingX: 3 }}>
          <Typography variant="h6" fontWeight="bold"  mb={5} gutterBottom>Get challenged the more you learn</Typography>
          <Typography variant="body2" mb={5}>
            As you answer more practice questions correctly, you're advanced from easier multiple choice questions to harder, written ones.
          </Typography>
          <Button variant="outlined" color="primary">Hear From Students</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.prismic.io/quizlet-web/64f1962d06858cef7a1cc52b_Writtenquestion.png?auto=format,compress"
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

export default Learn;
