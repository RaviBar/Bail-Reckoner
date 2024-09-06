import React from 'react';
import { Button, Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageSlider from './ImageSlider';
import Carousel from './carousel';
import Navbar from './Navbar'; 

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar /> 
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          backgroundImage: 'url("https://tse1.mm.bing.net/th?id=OIP.qXiQzIL-PJxN_ep2NuGcAgAAAA&pid=Api&P=0&h=180")',
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          overflow: 'hidden',
          padding: 0, 
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            zIndex: 1,
          }}
        ></Box>

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            padding: 0,
            margin: 0,
            overflow: 'hidden',
          }}
        >
          <ImageSlider />
        </Box>

        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            pt: 8,
            pb: 8,
            color: '#680676',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Key Features
          </Typography>
          <Carousel />

          {/* Bail Reckoner Information Section */}
          <Box sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom>
              About Bail Reckoner
            </Typography>
            <Typography variant="body1" paragraph>
              Bail Reckoner is a comprehensive platform designed to assist undertrial-prisoners, lawyers, and judicial authorities. Our mission is to streamline the bail process, providing valuable resources, tools, and information to all stakeholders involved. From tracking court hearings to accessing legal templates, Bail Reckoner aims to simplify the complexities of the legal system and support informed decision-making.
            </Typography>
            <Typography variant="body1" paragraph>
              Whether you're a prisoner seeking bail, a lawyer needing legal documentation, or a judicial authority managing cases, our platform offers the necessary tools and support to navigate the legal landscape efficiently. Explore our features to learn more about how we can assist you.
            </Typography>
          </Box>

          {/* FAQ Section */}
          <Box sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">What is bail?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Bail is the temporary release of an accused person awaiting trial, usually on condition that a sum of money is lodged to ensure their appearance in court.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">How do I know if I am eligible for bail?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Eligibility for bail depends on various factors including the nature of the offense, criminal history, and the likelihood of fleeing or tampering with evidence. Consult with a legal professional for personalized advice.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">How can I track my court hearings?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can track your court hearings by using our Court Hearing Tracker feature, which provides updates and notifications about your upcoming court dates.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">What are legal templates?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Legal templates are pre-drafted documents that you can use for various legal purposes, such as creating contracts, agreements, and other legal paperwork.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default MainPage;
