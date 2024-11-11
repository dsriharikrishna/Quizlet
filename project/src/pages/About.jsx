import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ paddingTop: 5 }}>
      <Box
        sx={{
          textAlign: 'center',
          marginBottom: 5,
          fontWeight: 'bold',
        }}
      >
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Learn more about our mission, values, and the team behind the project
        </Typography>
      </Box>

      {/* About Section */}
      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              We are dedicated to providing innovative solutions that improve lives. Our mission is to create user-centric applications that solve real-world problems with simplicity and efficiency.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom>
              Our Values
            </Typography>
            <Typography variant="body1" paragraph>
              Our values are centered around integrity, innovation, and collaboration. We believe in working together as a team to achieve common goals and always staying true to our core values.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Team or Image Section */}
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Meet the Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                style={{ width: '100%', borderRadius: '50%' }}
              />
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                John Doe
              </Typography>
              <Typography variant="body2" color="textSecondary">
                CEO & Founder
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                style={{ width: '100%', borderRadius: '50%' }}
              />
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                Jane Smith
              </Typography>
              <Typography variant="body2" color="textSecondary">
                CTO & Co-Founder
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', marginTop: 5 }}>
        <Typography variant="h6" color="textSecondary" paragraph>
          Interested in learning more or working with us? Feel free to reach out!
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> info@company.com
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
