import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#333', color: '#fff', py: 6 }} component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Bail Reckoner
            </Typography>
            <Typography variant="body2">
              We simplify the bail process for undertrial prisoners, lawyers, and judges. Our platform offers efficient and transparent solutions to make the bail process smoother.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" variant="body2" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Home
              </Link>
              <Link href="#" variant="body2" color="inherit" sx={{ display: 'block', mb: 1 }}>
                How It Works
              </Link>
              <Link href="#" variant="body2" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Features
              </Link>
              <Link href="#" variant="body2" color="inherit" sx={{ display: 'block', mb: 1 }}>
                FAQs
              </Link>
              <Link href="#" variant="body2" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Blog
              </Link>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: <Link href="mailto:info@bailreckoner.com" color="inherit">info@bailreckoner.com</Link>
            </Typography>
            <Typography variant="body2">
              Phone: +1 (234) 567-890
            </Typography>
            <Typography variant="body2">
              Address: 123 Legal Ave, Suite 100, City, State, 12345
            </Typography>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" aria-label="Facebook">
                <Facebook sx={{ color: '#fff' }} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter sx={{ color: '#fff' }} />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <LinkedIn sx={{ color: '#fff' }} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram sx={{ color: '#fff' }} />
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
            {'© '}
            {new Date().getFullYear()}
            {' Bail Reckoner. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
