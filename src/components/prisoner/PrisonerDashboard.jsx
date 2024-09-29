import React from 'react';
import {
  Container, Typography, Paper, Button, Card, CardContent, Box, Stack, Divider
} from '@mui/material';
import BailEligibilityChecker from './BailEligibilityChecker';
import PrisonerNavbar from './PrisonerNavbar';

const PrisonerDashboard = () => {
  const prisonerData = {
    name: 'Rahul Sharma',
    caseNo: 'C495659',
    charges: 'Sections 420, 406 of IPC',
    status: 'Undertrial',
    bailApplications: 2,
    recentUpdates: [
      { date: '2024-09-01', description: 'Court hearing postponed.' },
      { date: '2024-08-20', description: 'Bail application submitted.' },
    ],
    upcomingDates: [
      { date: '2024-09-15', event: 'Next Court Hearing' },
    ],
  };

  const handleHireLawyer = () => {
    alert('You have hired a lawyer.');
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <PrisonerNavbar/>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 600 }}>
        Prisoner Dashboard
      </Typography>
      
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
        
        {/* Left Section - Case and Bail Details */}
        <Box flex={1}>
          
          {/* Case Details Section */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              Your Profile
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Name:</strong> {prisonerData.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Case No:</strong> {prisonerData.caseNo}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Charges:</strong> {prisonerData.charges}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Status:</strong> {prisonerData.status}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Bail Applications:</strong> {prisonerData.bailApplications}
            </Typography>
          </Paper>
          <Box sx ={{display: 'flex'}}>
          {/* Bail Eligibility Checker */}
          <BailEligibilityChecker />
          <Paper sx={{ p: 3, mt: 4, mb: 3, boxShadow: 3, borderRadius: 2, height: '20%', width: '25%' }}>
            <Typography variant="h6" gutterBottom>
              Payment of Bail Bond and Surety
            </Typography>
            <Typography variant="body1" gutterBottom>
             The bail amount must be 
              paid by the prisoner or their representative to secure the release.
            </Typography>
            <Button variant="contained" color="primary" fullWidth>
              Process Payment
            </Button>
          </Paper></Box>
          <br /> <br />
          
          {/* Recent Updates Section */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              Recent Updates
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {prisonerData.recentUpdates.map((update, index) => (
              <Card key={index} sx={{ mb: 2, p: 1, backgroundColor: '#f9f9f9' }}>
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    <strong>{update.date}</strong>
                  </Typography>
                  <Typography variant="body1">{update.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </Paper>

          {/* Upcoming Dates Section */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              Upcoming Dates
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {prisonerData.upcomingDates.map((date, index) => (
              <Card key={index} sx={{ mb: 2, p: 1, backgroundColor: '#f9f9f9' }}>
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    <strong>{date.date}</strong>
                  </Typography>
                  <Typography variant="body1">{date.event}</Typography>
                </CardContent>
              </Card>
            ))}
          </Paper>
        </Box>

        {/* Right Section - Actions */}
        
      </Stack>
    </Container>
  );
};

export default PrisonerDashboard;
