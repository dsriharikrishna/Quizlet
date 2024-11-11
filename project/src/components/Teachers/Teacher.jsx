import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Stack, Typography, useMediaQuery, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Book, LocalActivity, SportsEsports, FlashOn, School, Quiz } from '@mui/icons-material';
import Cards from '../Cards';

const Teacher = () => {
  const isMobile = useMediaQuery('(max-width:676px)');

  return (
    <Box p={4} sx={{ textAlign: 'center' }}>
      {/* Main Title and Description */}
      <Typography variant="h4" gutterBottom>
        Instantly Create Learning Activities
      </Typography>
      <Typography variant="body1" mb={3}>
        Teachers can generate in-class games, practice modes, and activities in seconds.
      </Typography>
      <Button variant="contained" component={Link} to="/login" sx={{ mb: 3 }}>
        Sign up for free
      </Button>

      <Cards />

      {/* Feature Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Turn Lesson Materials Into Everything You Need
        </Typography>
        <Stack spacing={4} sx={{ mt: 5, textAlign: 'left', alignItems: 'center' }}>
          {/* Image or Illustration */}
          <Box component="img" src="https://yourimageurl.com" alt="Lesson Materials" sx={{ width: '100%', maxWidth: 600 }} />

          {/* Content Box */}
          <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Turn Lesson Materials Into Everything You Need
            </Typography>

            {/* Study Resources Section */}
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
              <Book sx={{ mr: 1 }} /> Study Resources
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Turn your existing documents into flashcards, study guides, and practice tests.
            </Typography>

            {/* In-Class Activities Section */}
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
              <LocalActivity sx={{ mr: 1 }} /> In-Class Activities
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Launch self-study sessions in a snap. Students can review material and complete personalized practice exercises.
            </Typography>

            {/* Bite-Size Classroom Games Section */}
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
              <SportsEsports sx={{ mr: 1 }} /> Bite-Size Classroom Games
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Matching games, quiz shows, and more. Use your teaching material to power games.
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Quiz Type Cards Section */}
      <Typography variant="h5" sx={{ mt: 5 }}>
        Quiz Types
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" mt={3} flexWrap="wrap">
        {quizTypes.map((quiz) => (
          <QuizCard key={quiz.title} image={quiz.image} title={quiz.title} description={quiz.description} />
        ))}
      </Stack>

      {/* Upgrade Section */}
      <Stack direction="row" spacing={2} sx={{ mt: 5, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h6" mt={2} mb={10}>
            Add teacher superpowers to your account
          </Typography>
          <Typography variant="body2" mt={2} mb={10}>
            Upgrade to Quizlet Plus for teachers to use features like Class Progress. You'll get a detailed view of which students
            have started or completed their study session and those who might need some more encouragement.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/upgrade">
            Upgrade Now
          </Button>
        </Box>
        <Box component="img" src="https://images.prismic.io/quizlet-web/ZrpkR0aF0TcGI32__QuizletPlus.png?auto=format,compress" alt="Quizlet Plus" sx={{ width: 450 }} />
      </Stack>

      {/* Watch Section */}
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h5">Watch how teachers are using Quizlet in their classroom</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Checkout our past Quizlet Unconference recordings
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignContent="space-between" sx={{ mt: 2 }}>
          {["Foreign Language", "Social Studies", "Science", "Math", "Language Arts", "Quizlet 101"].map((topic) => (
            <Grid item xs={12} sm={6} md={4} key={topic}>
              <Card
                sx={{
                  width: '90%',
                  p: 2,
                  borderBottom: '5px solid gray',
                  mb: 5,
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Typography variant="h6" textAlign="center">{topic}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Teacher;

// QuizCard component for quiz type cards
const QuizCard = ({ image, title, description }) => (
  <Card sx={{ maxWidth: 200 }}>
    <CardMedia component="img" height="140" image={image} alt={title} />
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

// Quiz type data
const quizTypes = [
  { image: 'https://source.unsplash.com/random/1', title: 'Categories', description: 'Launch a quiz show in the classroom.' },
  { image: 'https://source.unsplash.com/random/2', title: 'Quizlet', description: 'It takes teamwork to find the right answer.' },
  { image: 'https://source.unsplash.com/random/3', title: 'Blast', description: 'Vocab practice meets asteroid-blasting.' },
  { image: 'https://source.unsplash.com/random/4', title: 'Match', description: 'Students race to match terms & definitions.' },
];
