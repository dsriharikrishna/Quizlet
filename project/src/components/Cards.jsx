import React from 'react';
import { Stack,Card, CardContent, Box, CardHeader } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Cards = () => {
  const cardData = [
    { title: 'Learn', image: 'https://images.prismic.io/quizlet-web/ZpFubx5LeNNTxHxg_4Learn%402x.png?auto=format,compress', color: '#ADD8E6' },
    { title: 'Study Guides', image: 'https://images.prismic.io/quizlet-web/ZpFuOB5LeNNTxHxU_1SG%402x.png?auto=format,compress', color: '#9370DB' },
    { title: 'FlashCards', image: 'https://images.prismic.io/quizlet-web/ZpFuUR5LeNNTxHxc_2Flashcards%402x.png?auto=format,compress', color: '#0000FF' },
    { title: 'Expert Solutions', image: 'https://images.prismic.io/quizlet-web/ZpFuYB5LeNNTxHxd_3PracticeTests%402x.png?auto=format,compress', color: '#FFA07A' },
    { title: 'Practice Tests', image: 'https://images.prismic.io/quizlet-web/ZpWg2x5LeNNTxK_n_5Expertsolutions%402x.png?auto=format,compress', color: '#20B2AA' },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  return (
    <Stack>
    <Carousel
      responsive={responsive}
      infinite={true}
      centerMode={false}
      showDots={false}
      swipeable={true}
      draggable={true}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      transitionDuration={500}
      containerClass="carousel-container"
      itemClass="carousel-item"
    >

      {cardData.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: '80%', 
            height: 'auto', 
            margin: '15px 15px 15px 30px', 
            textAlign: 'center',
            borderRadius: '15px',
            backgroundColor: card.color,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <CardHeader title={card.title} sx={{textWrap:'inherit'}} />
          <CardContent sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{ width: '100%', height: 'auto', marginBottom: '10px' }}
            />
          </CardContent>
        </Card>
      ))}
    </Carousel>
    </Stack>
  );
};

export default Cards;
