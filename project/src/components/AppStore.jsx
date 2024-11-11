import React from 'react';
import { Box, Typography, Stack, Grid, IconButton, Divider } from '@mui/material';
import img1 from '../assets/Qr.png';
import Button1 from './Button1';
import PhoneIcon from '@mui/icons-material/PhoneIphone';
import FlashIcon from '@mui/icons-material/FlashOn';
import DownloadIcon from '@mui/icons-material/Download';

const AppStore = () => {
  return (
    <Box mb={4} sx={{ padding: 4, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        
        {/* QR Code and Download Section */}
        <Grid item xs={12} md={5}>
          <Stack spacing={2} alignItems="center">
            <Typography variant="h5" fontWeight="bold" alignSelf="center">
              Download the app to study on the go
            </Typography>
            <Typography textAlign="center">
              Scan the QR code to download the app
            </Typography>
            <Box 
              component="img" 
              src={img1} 
              alt="QR Code" 
              sx={{ width: '300px', height: '300px', marginY: 2 }} 
            />
            <Button1 size="small" />
          </Stack>
        </Grid>

        {/* Feature Highlights Section */}
        <Grid 
          item xs={12} md={6} 
          sx={{ padding: 3, borderRadius: '8px', border: '1px solid #ccc', backgroundColor: '#ffffff' }}
        >
          <Stack spacing={3}>
            <Box display="flex" alignItems="center">
              <IconButton color="primary">
                <PhoneIcon />
              </IconButton>
              <Box ml={2}>
                <Typography variant="h6">Study on the go</Typography>
                <Typography variant="body2" color="textSecondary">
                  Quizlet study tools and games designed specifically for mobile.
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <IconButton color="primary">
                <FlashIcon />
              </IconButton>
              <Box ml={2}>
                <Typography variant="h6">Seamless syncing</Typography>
                <Typography variant="body2" color="textSecondary">
                  All your study data syncs with the website and vice versa.
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <IconButton color="primary">
                <DownloadIcon />
              </IconButton>
              <Box ml={2}>
                <Typography variant="h6">Study offline</Typography>
                <Typography variant="body2" color="textSecondary">
                  Planes, trains, and automobiles - study anywhere, anytime.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* Additional Information Section */}
      <Stack spacing={2} alignItems="center" textAlign="center">
        <Box>
          <Typography variant="h4" mb={2}>
            Any Device, Any Browser
          </Typography>
          <Typography variant="body1" color="textSecondary" maxWidth="600px">
            Our website is optimized for any phone or tablet, so you can access all Quizlet features from any device's browser.
          </Typography>
        </Box> 
      </Stack>
    </Box>
  );
};

export default AppStore;
