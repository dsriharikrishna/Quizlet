import React from "react";
import { Link } from 'react-router-dom'; 
import { Box, List, ListItem, Typography, Grid, Select, MenuItem, IconButton, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

function Footers() {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#f5f5f5', textAlign: 'center' ,borderRadius:'8px' }}>
      {/* Main Sections */}
      <Grid container spacing={4} justifyContent="center">
        {/* Section 1: About Us */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>About us</Typography>
          <List sx={{marginLeft:'50px'}}>
            <ListItem component={Link} to="/AboutQuizelts" >About Quizlet</ListItem>
            <ListItem component={Link} to="QuizeletWorks" >How Quizlet works</ListItem>
            <ListItem component={Link} to="/Careers" >Careers</ListItem>
            <ListItem component={Link} to="/Adverds" >Advertise with us</ListItem>
            <ListItem component={Link} to="/GetApp" >Get the app</ListItem>
          </List>
        </Grid>

        {/* Section 2: For Students */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>For students</Typography>
          <List sx={{marginLeft:'50px'}}>
            <ListItem component={Link} to="/FlashCards" >Flashcards</ListItem>
            <ListItem component={Link} to="/Test">Test</ListItem>
            <ListItem component={Link} to="/Learn" >Learn</ListItem>
            <ListItem component={Link} to="/Solutions" >Solutions</ListItem>
            <ListItem component={Link} to="/Q-Chat" >Q-Chat: your AI tutor</ListItem>
            <ListItem component={Link} to="/ModernLearning" >Modern Learning Lab</ListItem>
            <ListItem component={Link} to="/QuizLet" >Quizlet Plus</ListItem>
            <ListItem component={Link} to="/StudyGuides" >Study Guides</ListItem>
          </List>
        </Grid>

        {/* Section 3: For Teachers */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>For teachers</Typography>
          <List sx={{marginLeft:'50px'}}>
            <ListItem component={Link} to="/Live"  >Live</ListItem>
            <ListItem component={Link} to="/CheckPoint" >Checkpoint</ListItem>
            <ListItem component={Link} to="/Blog" >Blog</ListItem>
            <ListItem component={Link} to="/Be the Change" >Be the Change</ListItem>
            <ListItem component={Link} to="/QuizletTeachers" >Quizlet Plus for teachers</ListItem>
          </List>
        </Grid>

        {/* Section 4: Resources */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Resources</Typography>
          <List sx={{marginLeft:'50px'}}>
            <ListItem component={Link} to="/HelpCenter" >Help Center</ListItem>
            <ListItem component={Link} to="/Signup" >Sign up</ListItem>
            <ListItem component={Link} to="/Honor Code" >Honor Code</ListItem>
            <ListItem component={Link} to="/Community" >Community guidelines</ListItem>
            <ListItem component={Link} to="/Privacy" >Privacy</ListItem>
            <ListItem component={Link} to="/Terms" >Terms</ListItem>
            <ListItem component={Link} to="/Ads" >Ad and Cookie Policy</ListItem>
            <ListItem component={Link} to="/Parents" >Parents</ListItem>
          </List>
        </Grid>

        {/* Section 5: Language */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Language</Typography>
          <Select defaultValue="English" fullWidth >
            <MenuItem value="English">English (USA)</MenuItem>
            <MenuItem value="Spanish">Español</MenuItem>
            <MenuItem value="French">Français</MenuItem>
            <MenuItem value="German">Deutsch</MenuItem>
            <MenuItem value="Chinese">中文</MenuItem>
          </Select>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ marginY: 4 }} />

      {/* Country Section */}
      <Grid container spacing={4} sx={{ marginTop: 4 }} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Country</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            {['United States', 'Canada', 'United Kingdom', 'Australia', 'New Zealand', 'Germany', 'France', 'Spain', 'Italy', 'Japan', 'South Korea', 'India', 'China', 'Mexico', 'Sweden', 'Netherlands', 'Switzerland', 'Brazil', 'Poland', 'Turkey', 'Ukraine', 'Taiwan', 'Vietnam', 'Indonesia', 'Philippines', 'Russia'].map((country) => (
              <ListItem key={country} sx={{ width: 'auto', padding: 1 }}>
                {country}
              </ListItem>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Social Media and Footer Bottom Section */}
      <Grid container spacing={2} sx={{ marginTop: 4 }} justifyContent="space-between" alignItems="center">
        {/* Social Media Links */}
        <Grid item xs={6} sm={3}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <IconButton href="https://www.facebook.com" target="_blank"><Facebook /></IconButton>
            <IconButton href="https://www.twitter.com" target="_blank"><Twitter /></IconButton>
            <IconButton href="https://www.instagram.com" target="_blank"><Instagram /></IconButton>
            <IconButton href="https://www.linkedin.com" target="_blank"><LinkedIn /></IconButton>
          </Box>
        </Grid>

        {/* Company Logo */}
        <Grid item xs={6} sm={3}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="img" src="https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=70,onerror=redirect,w=140/https://quizlet.com/_next/static/media/coppa-seal.0efe00c1.png" alt="Company Logo" sx={{ width: '120px' }} />
          </Box>
        </Grid>
      </Grid>

      {/* Footer Text */}
      <Typography variant="body1" sx={{ marginTop: 4, color: 'gray' }}>© 2024 Quizlet, Inc.</Typography>
    </Box>
  );
}

export default Footers;
