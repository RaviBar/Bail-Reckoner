import React, { useState } from 'react';
import {
  Container, Typography, Paper, List, ListItem, ListItemText, Button, Card, CardContent, Box, Divider
} from '@mui/material';
import BailPrediction from './BailPrediction';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const JudgeDashboard = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [date, setDate] = useState(new Date());
  const [bailBondAmount, setBailBondAmount] = useState(null);
  const [suretyAmount, setSuretyAmount] = useState(null);

  const judgeData = {
    name: 'Justice Anil Kumar',
    casesReviewed: 200,
    bailApplicationsProcessed: 50,
    recentDecisions: [
      { date: '2024-09-01', caseNo: '123456', decision: 'Granted Bail' },
      { date: '2024-08-20', caseNo: '789012', decision: 'Denied Bail' },
    ],
    upcomingHearings: [
      { date: '2024-09-15', caseNo: '345678', prisonerName: 'Vikram Singh' },
    ],
  };

  const pendingApplications = [
    { prisonerName: 'Rahul Sharma', caseNo: '123456' },
    { prisonerName: 'Priya Patel', caseNo: '789012' },
  ];

  const handleApplicationSelect = (application) => {
    setSelectedApplication(application);
    // Simulate bail bond and surety amount calculation
    setBailBondAmount((Math.random() * 10000).toFixed(2));
    setSuretyAmount((Math.random() * 5000).toFixed(2));
  };

  const calculateBailPrediction = (application) => {
    return Math.random() * 100;
  };

  const bailPredictionPercentage = selectedApplication ? calculateBailPrediction(selectedApplication) : null;

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleFinalDecision = () => {
    if (selectedApplication) {
      alert(`Final decision for ${selectedApplication.prisonerName} (Case No: ${selectedApplication.caseNo}) has been made. 
      Bail Bond Amount: ₹${bailBondAmount}, Surety Amount: ₹${suretyAmount}. Details sent to prisoner.`);
    } else {
      alert('Please select an application first.');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Judge Dashboard
      </Typography>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
        {/* Bail Prediction and Pending Applications */}
        <Box flex={2}>
          <Paper sx={{ p: 3, mb: 3, boxShadow: 3, borderRadius: 2, backgroundColor: '#f3f3f3' }}>
            <Typography variant="h6" gutterBottom>
              Bail Prediction Model
            </Typography>
            <Typography variant="body1" gutterBottom>
              The bail prediction model assesses various factors to estimate the likelihood of bail being granted. 
              The factors include the seriousness of the offense, the prisoner's criminal history, and other relevant details.
            </Typography>
            <BailPrediction selectedApplication={selectedApplication} />
            {selectedApplication && (
              <Box mt={2}>
                <Typography variant="h6" gutterBottom>
                  Prediction Result
                </Typography>
                <Typography variant="body1">
                  {`For the case of ${selectedApplication.prisonerName} (Case No: ${selectedApplication.caseNo}), 
                  the predicted likelihood of bail being granted is ${bailPredictionPercentage.toFixed(2)}%.`}
                </Typography>
                <Typography variant="body1">
                  {bailPredictionPercentage > 70
                    ? 'Based on the prediction, it is likely that bail should be granted. Final decision is up to you.'
                    : 'The prediction suggests that bail is less likely to be granted. Please review the case thoroughly.'}
                </Typography>
              </Box>
            )}
          </Paper>

          <Paper sx={{ p: 3, mb: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Pending Applications
            </Typography>
            <List>
              {pendingApplications.map((application, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => handleApplicationSelect(application)}
                  selected={selectedApplication?.caseNo === application.caseNo}
                  sx={{ backgroundColor: selectedApplication?.caseNo === application.caseNo ? '#f0f0f0' : 'transparent' }}
                >
                  <ListItemText 
                    primary={application.prisonerName} 
                    secondary={`Case No: ${application.caseNo}`} 
                  />
                  <Button variant="contained" size="small" disabled>
                    Review
                  </Button>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>

        {/* Profile and Payment Sections */}
        <Box flex={1}>
          <Paper sx={{ p: 3, mb: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Your Profile
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Name:</strong> {judgeData.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Cases Reviewed:</strong> {judgeData.casesReviewed}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Bail Applications Processed:</strong> {judgeData.bailApplicationsProcessed}
            </Typography>
          </Paper>
          <Paper sx={{ p: 3, mt: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Schedule Court Hearings
            </Typography>
            <Typography variant="h6" gutterBottom>
              Calendar
            </Typography>
            <Calendar
              onChange={handleDateChange}
              value={date}
            />
            <Typography variant="body1" mt={2}>
              Selected Date: {date.toDateString()}
            </Typography>
          </Paper>
        </Box>
      </Box>
      
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3} mt={3}>
        <Box flex={1}>
          <Paper sx={{ p: 3, mb: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Decisions
            </Typography>
            {judgeData.recentDecisions.map((decision, index) => (
              <Card key={index} sx={{ mb: 2, boxShadow: 1, borderRadius: 2, backgroundColor: '#f3f3f3' }}>
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    <strong>{decision.date}</strong>
                  </Typography>
                  <Typography variant="body1">
                    <strong>Case No:</strong> {decision.caseNo}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Decision:</strong> {decision.decision}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Paper>
        </Box>

        <Box flex={1}>
          <Paper sx={{ p: 3, mb: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Upcoming Hearings
            </Typography>
            {judgeData.upcomingHearings.map((hearing, index) => (
              <Card key={index} sx={{ mb: 2, boxShadow: 1, borderRadius: 2, backgroundColor: '#f3f3f3' }}>
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    <strong>{hearing.date}</strong>
                  </Typography>
                  <Typography variant="body1">
                    <strong>Case No:</strong> {hearing.caseNo}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Prisoner Name:</strong> {hearing.prisonerName}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Paper>
          
        </Box>
      </Box>

      {/* New Section for Final Decision and Bail Bond Generation */}
      <Box mt={3}>
        <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Final Decision and Bail Bond Generation
          </Typography>
          {selectedApplication ? (
            <>
              <Typography variant="body1" gutterBottom>
                <strong>Case No:</strong> {selectedApplication.caseNo}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Prisoner Name:</strong> {selectedApplication.prisonerName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Bail Bond Amount:</strong> ₹{bailBondAmount}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Surety Amount:</strong> ₹{suretyAmount}
              </Typography>
              <Button variant="contained" color="primary" onClick={handleFinalDecision}>
                Finalize Decision and Notify Prisoner
              </Button>
            </>
          ) : (
            <Typography variant="body1">
              Please select an application to make a final decision.
            </Typography>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default JudgeDashboard;
