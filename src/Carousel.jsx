import React, { useState } from 'react';
import { IconButton, Card, CardContent, Typography, Box, CardMedia } from '@mui/material';

// Sample card data
const cardData = [
  { id: 1, title: 'Bail Eligibility Checker', description: 'Find out if you are eligible for bail.', image: 'https://tse1.mm.bing.net/th?id=OIP.2X6q-mvfVPdFhDbWciNAVwHaF7&pid=Api&P=0&h=180' },
  { id: 5, title: 'Bail Prediction', description: 'Predict the bail amount based on your case details.', image: 'https://techcult.com/wp-content/uploads/2023/06/artificial-intelligence-and-its-impact-on-legal-te-1024x683.png' },
  { id: 4, title: 'Court Hearing Tracker', description: 'Track your upcoming court hearings.', image: 'https://tse4.mm.bing.net/th?id=OIP.JIG5mY4CmtXawWfcgFsQRwHaE8&pid=Api&P=0&h=180' },
  { id: 2, title: 'Legal Templates', description: 'Access ready-to-use legal templates.', image: 'https://tse4.mm.bing.net/th?id=OIP.hWxtulbFLmpzWh07KBBDRAAAAA&pid=Api&P=0&h=180' },
  { id: 3, title: 'Lawyer Directory', description: 'Connect with experienced lawyers.', image: 'https://tse1.mm.bing.net/th?id=OIP.UXwhq6l1yeotP-HxUza-qAHaFj&pid=Api&P=0&h=180' },
];

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${startIndex * 33.33}%)` }}>
        {cardData.map((card, index) => (
          <Box key={index} sx={{ minWidth: '33.33%', padding: 1 }}>
            <Card
              sx={{
                height: 300,
                position: 'relative',
                overflow: 'hidden',
                '&:hover .card-content::before': {
                  transform: 'translateY(0)', // Animate the background upwards
                },
                '&:hover .card-content': {
                  color: 'white', // Change text color on hover
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={card.image}
                alt={card.title}
                sx={{ objectFit: 'contain' }}
              />
              <CardContent
                className="card-content"
                sx={{
                  position: 'relative',
                  zIndex: 2, // Ensure text is above the background
                  color: 'black', // Default text color
                  textAlign: 'center',
                  transition: 'color 0.4s ease-in-out',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Background color
                    transform: 'translateY(100%)', // Start from bottom
                    transition: 'transform 0.4s ease-in-out', // Smooth transition
                    zIndex: -1, // Keep the background behind the text
                  },
                }}
              >
                <Typography variant="h5" gutterBottom>{card.title}</Typography>
                <Typography variant="body2">{card.description}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>


      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 15,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
          },
          fontSize: '32px', 
          padding: '10px',
          width: 48,
          height: 48,
          borderRadius: '50%', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', 
        }}
      >
        {'<'} 
      </IconButton>

 
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 16,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
          },
          fontSize: '32px', 
          padding: '10px',
          width: 48,
          height: 48,
          borderRadius: '50%', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', 
        }}
      >
        {'>'} 
      </IconButton>
    </Box>
  );
};

export default Carousel;
