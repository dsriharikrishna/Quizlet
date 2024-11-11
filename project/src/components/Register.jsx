import React, { useState } from 'react';
import { Box, Typography, FormControl, TextField, Button } from '@mui/material';
import Password from './Password'; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    city: '',
    phone: '',
    companyName: '',
    gender: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", formData);

    // Save form data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect to the Login page after successful registration
    navigate('/login');
  };

  return (
    <Box
      sx={{
        background:'transparent',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 600,
          width: '100%',
          padding: '30px',
          boxShadow: 20,
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', marginBottom: 3, fontWeight: 'bold', color: '#fff' }}>
          Register Page
        </Typography>

        <FormControl fullWidth margin="normal" sx={{ marginBottom: 2 }}>
          <TextField
            label="First Name"
            variant="outlined"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth margin="normal" sx={{ marginBottom: 2 }}>
          <TextField
            label="Last Name"
            variant="outlined"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth margin="normal" sx={{ marginBottom: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth margin="normal" sx={{ marginBottom: 2 }}>
          <TextField
            label="City"
            variant="outlined"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth margin="normal" sx={{ marginBottom: 2 }}>
          <TextField
            label="Phone"
            variant="outlined"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth margin="normal" sx={{ marginBottom: 2 }}>
          <TextField
            label="Company Name"
            variant="outlined"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth margin="normal" sx={{ marginBottom: 2 }}>
          <Password
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          sx={{
            padding: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: 'lightseagreen'
            }
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
