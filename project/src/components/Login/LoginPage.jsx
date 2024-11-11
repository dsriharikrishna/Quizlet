import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Divider, IconButton, InputAdornment, useMediaQuery } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userpsw, setUserPsw] = useState('');
  
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleClick = () => {
    const savedForm = localStorage.getItem('form');
    console.log("Data ",savedForm);
    // console.log("Email :",savedForm.email);
    if (savedForm) {
      const saved = JSON.parse(savedForm);
      console.log("Email ",saved.email);
      if (saved.email === userEmail && saved.password === userpsw) {
        alert("Login successfully");
        navigate("/");  // Redirect to home page
      } else {
        alert("Check your login credentials");
      }
    } else {
      alert("No saved user data found");
    }
  };

  const handleClick2 = () => {
    navigate("/Signup");
  };

  const isLargeScreen = useMediaQuery('(min-width:992px)');

  return (
    <Box display="flex" sx={{ height: '100vh' }}>
      {isLargeScreen && (
        <Box
          component="img"
          src="https://cdn.pixabay.com/photo/2022/12/16/16/28/flowers-7660120_640.jpg"
          alt="Login Illustration"
          sx={{ width: '50%', objectFit: 'cover' }}
        />
      )}
      <Box
        sx={{
          width: isLargeScreen ? '50%' : '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Log in
        </Typography>

        <Button
          variant="contained"
          startIcon={<GoogleIcon />}
          sx={{ mb: 1, width: '100%' }}
        >
          Log in with Google
        </Button>
        <Button
          variant="contained"
          startIcon={<FacebookIcon />}
          sx={{ mb: 1, width: '100%', bgcolor: '#3b5998', color: '#fff' }}
        >
          Log in with Facebook
        </Button>
        <Button
          variant="contained"
          startIcon={<AppleIcon />}
          sx={{ mb: 1, width: '100%', bgcolor: '#000', color: '#fff' }}
        >
          Log in with Apple
        </Button>

        <Divider sx={{ my: 2 }}>or email</Divider>

        <TextField
          fullWidth
          label="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          value={userpsw}
          onChange={(e) => setUserPsw(e.target.value)}
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Typography variant="body2" align="right" color="primary" sx={{ cursor: 'pointer' }}>
          Forgot password
        </Typography>

        <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%' }} onClick={handleClick}>
          Log in
        </Button>

        <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%' }} onClick={handleClick2}>
          Sign Up
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          New to Quizlet? <span style={{ color: '#1976d2', cursor: 'pointer' }}>Create an account</span>
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, color: '#1976d2', cursor: 'pointer' }}>
          Log in with a magic link
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginPage;
