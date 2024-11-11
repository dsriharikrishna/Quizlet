import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Grid, IconButton, useMediaQuery, Avatar } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const FlashCards = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const isDesktop = useMediaQuery('(min-width:1024px)');
  const [currentSlide, setCurrentSlide] = useState(0);
  const items = isDesktop ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4];
  const totalSlides = Math.ceil(items.length / responsive.desktop.items);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <Box
      sx={{
        padding: '20px',
        textAlign: 'center',
        position: 'relative',
        backgroundColor: '#f5f5f5',
        borderRadius: '4',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
        autoPlay={true}
        autoPlaySpeed={100000}
        afterChange={(previousSlide, { currentSlide }) => setCurrentSlide(currentSlide)}
        customTransition="transform 500ms ease"
        renderButtonGroupOutside={false}
      >
        {/* Slide Content */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Grid container spacing={2} sx={{ maxWidth: '80%', margin: '0 auto' }}>
            {items.map((num) => (
              <Grid item xs={12} sm={6} md={4} key={num}>
                <Card
                  sx={{
                    textAlign: 'center',
                    width: '170px',
                    height: '200px', 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    marginLeft: '50px',
                    borderBottom: '5px solid gray',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    {/* Header Name centered */}
                    <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
                      Card {num}
                    </Typography>

                    {/* Subheading */}
                    <Typography variant="body2" color="textSecondary" sx={{ marginY: 2 }}>
                      Subheading for Card {num}
                    </Typography>
                  </CardContent>

                  {/* Avatar at the bottom */}
                  <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                    <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2024/03/18/02/40/whooper-swans-8640045_640.jpg" />
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Carousel>

      {/* Controls and Slide number display */}
      <Box sx={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center' }}>
        {/* Left arrow */}
        <IconButton sx={{ marginRight: '10px', color: '#007bff' }} onClick={goToPrev}>
          <ArrowBack />
        </IconButton>

        {/* Slide number display */}
        <Typography variant="h6" sx={{ margin: '0 10px', color: '#333' }}>
          {currentSlide + 1} / {totalSlides}
        </Typography>

        {/* Right arrow */}
        <IconButton sx={{ marginLeft: '10px', color: '#007bff' }} onClick={goToNext}>
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FlashCards;
