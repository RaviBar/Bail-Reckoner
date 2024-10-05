import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const sliderImages = [
  'https://www.warpaintjournal.com/wp-content/uploads/2019/08/812316-sc-021518-1024x576.jpg',
  'https://cinemachaat.com/wp-content/uploads/2013/10/court-scene1.png',
  'https://assets.telegraphindia.com/telegraph/61ebebc8-f61f-43e5-935e-9ae0fe197d78.jpg',
  'https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2023/10/SCI-banner.jpg',
  'https://www.legalbites.in/wp-content/uploads/2021/05/Under-Trial-Prisoners.png',
  'https://assets.telegraphindia.com/telegraph/61ebebc8-f61f-43e5-935e-9ae0fe197d78.jpg',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 4000; 
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, intervalTime);

    return () => clearInterval(interval); 
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '520px', objectFit: '', overflow: 'hidden' }}>
      {/* Slider Images */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {sliderImages.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Slider ${index}`}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              flexShrink: 0, 
            }}
          />
        ))}
      </Box>

      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 16,
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
          zIndex: 2,
        }}
      >
        <ArrowBackIosNewIcon />
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
          zIndex: 2,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Overlay Content */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          zIndex: 2,
          padding: 2,
        }}
      >
        <Typography variant="h3" sx={{ 
  fontWeight: 'bold', 
  mb: 2, 
  color: '#e7e9ee', 
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' // Add shadow for better visibility
}}>
  Bail Reckoner
</Typography>
<Typography variant="h6" sx={{ 
  mb: 4, 
  color: '#c4cfec', 
  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)' // Shadow for smaller text
}}>
  A platform for undertrial-prisoners, lawyers, and judicial authorities.
</Typography>
        <Button
          variant="contained"
          color="primary"
          borderRadius='5px'

          onClick={() => navigate('/')}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default ImageSlider;
