import React, { useState } from 'react';
import {
  Container, Typography, TextField, Button, Paper, Card, CardContent, CardActions, Grid, Box, Divider
} from '@mui/material';

// Sample Prisoners Data with Case Numbers
const prisonersData = [
  {
    "caseNo": "C495659",
    "name": "Rahul Sharma",
    "charges": "420",
    "yearsServed": 2,
    "totalYearsImprisonment": 4
  },
  {
    "caseNo": "C789101",
    "name": "Amit Verma",
    "charges": "307",
    "yearsServed": 3,
    "totalYearsImprisonment": 6
  },
  {
    "caseNo": "C112233",
    "name": "Suresh Gupta",
    "charges": "406",
    "yearsServed": 1,
    "totalYearsImprisonment": 2
  },
  {
    "caseNo": "C445566",
    "name": "Manoj Singh",
    "charges": "302",
    "yearsServed": 5,
    "totalYearsImprisonment": 10
  },
  {
    "caseNo": "C778899",
    "name": "Priya Yadav",
    "charges": "420",
    "yearsServed": 1,
    "totalYearsImprisonment": 3
  }
];

const ipcSectionsData = {
  "420": {
    "name": "Cheating",
    "bailable": false,
    "minImprisonment": 3,
    "description": "Cheating and dishonestly inducing delivery of property"
  },
  "307": {
    "name": "Attempt to Murder",
    "bailable": false,
    "minImprisonment": 5,
    "description": "Attempt to commit murder"
  },
  "406": {
    "name": "Criminal Breach of Trust",
    "bailable": true,
    "minImprisonment": 2,
    "description": "Criminal breach of trust"
  },
  "302": {
    "name": "Murder",
    "bailable": false,
    "minImprisonment": 10,
    "description": "Murder"
  }
};

function BailEligibilityChecker() {
  const [caseNo, setCaseNo] = useState('');
  const [prisonerDetails, setPrisonerDetails] = useState(null);
  const [eligibilityResult, setEligibilityResult] = useState('');
  const [eligibleForBail, setEligibleForBail] = useState(false);

  const handleCheckEligibility = () => {
    // Find the prisoner by case number
    const prisoner = prisonersData.find(p => p.caseNo === caseNo);

    if (!prisoner) {
      setEligibilityResult('No prisoner found with that case number');
      setPrisonerDetails(null);
      return;
    }

    setPrisonerDetails(prisoner);

    // Get the IPC section data for the charges
    const sectionData = ipcSectionsData[prisoner.charges];

    if (!sectionData) {
      setEligibilityResult(`No IPC section data found for charges ${prisoner.charges}`);
      return;
    }

    // Check bail eligibility based on years served and total years of imprisonment
    const isEligible = prisoner.yearsServed >= (sectionData.minImprisonment / 2);
    setEligibleForBail(isEligible);

    if (isEligible) {
      setEligibilityResult(`${prisoner.name} is eligible for bail.`);
    } else {
      setEligibilityResult(`${prisoner.name} is not eligible for bail yet.`);
    }
  };

  const handleApplyForBail = () => {
    alert('your bail request will show to legal aid providers');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Bail Eligibility Checker
        </Typography>

        <Grid container spacing={3}>
          {/* Explanation Card */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', padding: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  How Bail Eligibility Works
                </Typography>
                <Typography variant="body1">
                  <ol>
                    <li>Enter the case number of the prisoner to get details.</li>
                    <li>The system retrieves the prisoner's details and the IPC section for the charges.</li>
                    <li>The eligibility for bail is determined based on the minimum imprisonment period required by the IPC section.</li>
                    <li>The prisoner is eligible for bail if they have served at least half of the minimum imprisonment period.</li>
                  </ol>
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1">
                  <strong>Factors Considered:</strong>
                  <ul>
                    <li>Minimum imprisonment period as per IPC section</li>
                    <li>Years served by the prisoner</li>
                    <li>Nature of the charges (bailable or non-bailable)</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Check Eligibility Card */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', padding: 2 }}>
              <CardContent>
                <TextField
                  label="Enter Case Number"
                  value={caseNo}
                  onChange={(e) => setCaseNo(e.target.value)}
                  fullWidth
                  sx={{ mb: 3 }}
                  placeholder="Enter Case No (e.g., C123456)"
                  variant="outlined"
                />

                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={handleCheckEligibility}
                  sx={{ mb: 3, py: 1, fontSize: '0.75rem' }}
                >
                  Check Eligibility
                </Button>

                {prisonerDetails && (
                  <>
                    <Typography variant="h6" gutterBottom>
                      Prisoner Details
                    </Typography>
                    <Typography><strong>Name:</strong> {prisonerDetails.name}</Typography>
                    <Typography><strong>Charges:</strong> IPC Section {prisonerDetails.charges}</Typography>
                    <Typography><strong>Years Served:</strong> {prisonerDetails.yearsServed}</Typography>
                    <Typography><strong>Total Imprisonment:</strong> {prisonerDetails.totalYearsImprisonment}</Typography>
                        
                    {eligibleForBail && (
                      <CardActions sx={{ mt: 2 }}>
                        <Typography variant="h6" color="error" sx={{ mt: 3 }}>
                          {eligibilityResult}
                        </Typography>
                        <Button
                          variant="contained"
                          color="success"
                          fullWidth
                          sx={{ py: 1, fontSize: '0.75rem' }}
                          onClick={handleApplyForBail}
                        > 
                          Hire Legal aid provider
                        </Button>
                      </CardActions>
                    )}
                  </>
                )}

                {eligibilityResult && !eligibleForBail && (
                  <Typography variant="h6" color="error" sx={{ mt: 3 }}>
                    {eligibilityResult}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default BailEligibilityChecker;
