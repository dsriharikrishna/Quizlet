import React, { useState, useEffect } from 'react';
import { Container, Box, TextField, Typography, Button, Checkbox, FormControlLabel, Select, MenuItem, Grid, useMediaQuery } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from 'react-router-dom';
import Password from '../Password';

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    acceptedTerms: false,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle checkbox change for terms and conditions
  const handleCheckboxChange = (e) => {
    setForm((prev) => ({ ...prev, acceptedTerms: e.target.checked }));
  };

  // Load saved form data from localStorage on page load
  useEffect(() => {
    const savedForm = JSON.parse(localStorage.getItem('form'));
    if (savedForm) {
      setForm(savedForm);
    }
  }, []);

  // Handle form submission (save to localStorage and redirect)
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('form', JSON.stringify(form));
    alert("Register successfully");
    navigate("/loginpage");
  };

  // Navigate to the login page when user clicks on "Already have an account?"
  const reset = () => {
    navigate("/loginpage");
  };

  // Check screen size for responsive design
  const isLargeScreen = useMediaQuery('(min-width:992px)');

  return (
    <Container maxWidth="lg">
      <Grid container>
        {isLargeScreen && (
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100vh',
                backgroundImage: 'url("https://img.freepik.com/free-vector/landscape-with-tree-silhouette_1048-5143.jpg")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </Grid>
        )}
        <Grid item xs={12} md={isLargeScreen ? 6 : 12}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              mt: isLargeScreen ? 5 : 0, 
              pl: isLargeScreen ? 5 : 0, 
              pr: isLargeScreen ? 5 : 0 
            }}
          >
            <Typography variant="h5" sx={{ mt: isLargeScreen ? 5 : 0 }}>Sign up</Typography>
            <Button 
              variant="outlined" 
              color="primary" 
              fullWidth 
              sx={{ mt: 2 }}
              startIcon={<GoogleIcon />} 
            >
              Continue with Google
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              fullWidth 
              sx={{ mt: 2 }}
              startIcon={<FacebookIcon />} 
            >
              Continue with Facebook
            </Button>
            <Typography variant="body1" sx={{ mt: 2 }}>or email</Typography>
            
            <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '1em' }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Select
                  name="dobDay"
                  value={form.dobDay}
                  onChange={handleChange}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="" disabled>Day</MenuItem>
                  {[...Array(31).keys()].map((d) => (
                    <MenuItem key={d + 1} value={d + 1}>{d + 1}</MenuItem>
                  ))}
                </Select>
                <Select
                  name="dobMonth"
                  value={form.dobMonth}
                  onChange={handleChange}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="" disabled>Month</MenuItem>
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => (
                    <MenuItem key={i} value={m}>{m}</MenuItem>
                  ))}
                </Select>
                <Select
                  name="dobYear"
                  value={form.dobYear}
                  onChange={handleChange}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="" disabled>Year</MenuItem>
                  {[...Array(100).keys()].map((y) => (
                    <MenuItem key={2023 - y} value={2023 - y}>{2023 - y}</MenuItem>
                  ))}
                </Select>
              </Box>
              
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                value={form.email}
                onChange={handleChange}
                margin="normal"
              />
              
              <TextField
                label="Username"
                name="username"
                fullWidth
                value={form.username}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                label="password"
                name="password"
                type="password"
                fullWidth
                value={form.password}
                onChange={handleChange}
                margin="normal"
              />
              {/* <Password 
                value={form.password}
                onChange={(e)=>({
                    setForm({...form,password:e.target.value})
                })}
              /> */}

              <FormControlLabel
                control={
                  <Checkbox
                    checked={form.acceptedTerms}
                    onChange={handleCheckboxChange}
                    name="acceptedTerms"
                    color="primary"
                  />
                }
                label="I accept Quizlet's Terms of Service and Privacy Policy"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!form.acceptedTerms}
                sx={{ mt: 2 }}
              >
                Sign up
              </Button>
              
              <Button
                onClick={reset}
                variant="outlined" 
                color="primary"
                fullWidth
                sx={{ mt: 2, textTransform: 'none' }}
              >
                 Already have an account? Log in
              </Button>
           </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Signup;
