// src/components/BailPrediction.js
import React, { useState } from 'react';
import { Paper, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';

const BailPrediction = () => {
  const [riskAssessment, setRiskAssessment] = useState({
    evidenceTampering: '',
    witnessInfluence: '',
    otherFactors: ''
  });

  const handleRiskAssessmentChange = (e) => {
    setRiskAssessment({
      ...riskAssessment,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle risk assessment submission logic
    console.log('Risk Assessment:', riskAssessment);
  };

  return (
    <Paper sx={{ p: 5, boxShadow: 0.5, borderRadius: 2 }}>
      {/* Bail Prediction logic here (if any) */}
      <Box mt={0}>
        <Typography variant="h6" gutterBottom>
          Risk Assessment
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="evidenceTampering">Evidence Tampering</InputLabel>
          <Select
            id="evidenceTampering"
            name="evidenceTampering"
            value={riskAssessment.evidenceTampering}
            onChange={handleRiskAssessmentChange}
            label="Evidence Tampering"
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="witnessInfluence">Witness Influence</InputLabel>
          <Select
            id="witnessInfluence"
            name="witnessInfluence"
            value={riskAssessment.witnessInfluence}
            onChange={handleRiskAssessmentChange}
            label="Witness Influence"
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={handleSubmit}>
          Predict Bail
        </Button>
      </Box>
    </Paper>
  );
};

export default BailPrediction;
