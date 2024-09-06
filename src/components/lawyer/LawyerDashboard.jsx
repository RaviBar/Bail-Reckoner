import React from 'react';
import {
  Container, Typography, Grid, Paper, List, ListItem, ListItemText, ListItemIcon, Divider, Box, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, InputLabel, Select, MenuItem, FormControl, TextField, Button, Card, CardContent, CardMedia
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LawyerNavbar from './LawyerNavbar';
import BailApplication from './BailApplication';
const pendingApplications = [
  { id: 'A001', caseNo: 'C495659', prisonerName: 'Rahul Sharma', details: 'Details about the case...', status: 'Pending' },
  { id: 'A002', caseNo: 'C778899', prisonerName: 'Priya Yadav', details: 'Details about the case...', status: 'Pending' },
  { id: 'A003', caseNo: 'C789101', prisonerName: 'Amit Verma', details: 'Details about the case...', status: 'Pending' },
  { id: 'A004', caseNo: 'C112233', prisonerName: 'Suresh Gupta', details: 'Details about the case...', status: 'Pending' },
  { id: 'A005', caseNo: 'C445566', prisonerName: 'Manoj Singh', details: 'Details about the case...', status: 'Pending' },
  // Add more applications as needed
];

const templates = {
  bail: `Your Honor, I am Lawrence, representing {prisonerName} in case no. {caseNo}. I respectfully request that bail be granted for my client due to [reason]. Thank you.`,
  report: `Case No: {caseNo}\nPrisoner: {prisonerName}\nStatus: [Status]\nDetails: [Details]`,
};

const LawyerDashboard = () => {
  const [selectedApplication, setSelectedApplication] = React.useState(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [draftContent, setDraftContent] = React.useState('');
  const [template, setTemplate] = React.useState('bail');
  const [caseDetails, setCaseDetails] = React.useState('');
  const [openTemplate, setOpenTemplate] = React.useState('');
  const [selectedCase, setSelectedCase] = React.useState(null);

  const handleSelectApplication = (application) => {
    setSelectedApplication(application);
    setCaseDetails(application.details);
  };

  const handleSelectCase = (caseNo) => {
    setSelectedCase(caseNo);
  };

  const handleAcceptApplication = () => {
    if (selectedCase) {
      console.log(`Application for Case No: ${selectedCase} has been accepted.`);
      // Submit to judicial authority logic here
      alert(`Case No: ${selectedCase} submitted to judicial authority.`);
    }
  };

  const handleDraftApplication = () => {
    if (selectedApplication) {
      setIsDialogOpen(true);
      const templateContent = templates[template]
        .replace('{prisonerName}', selectedApplication.prisonerName)
        .replace('{caseNo}', selectedApplication.caseNo);
      setDraftContent(templateContent);
    } else {
      alert('Please select an application.');
    }
  };

  const handleSubmitApplication = () => {
    alert('Application submitted to judicial authority.');
    setIsDialogOpen(false);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleOpenTemplate = (templateType) => {
    setOpenTemplate(templates[templateType]);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, bgcolor: 'linear-gradient(to right, #f7f7f7, #eaecf0)', minHeight: '40vh' }}>
      <LawyerNavbar onSelectApplication={handleSelectApplication} />
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 600, mb: 4 }}>
        Lawyer Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper sx={{ p: 3, mb: 1, height: '38%', display: 'flex', flexDirection: 'column', backgroundColor: '#f3f3f3' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Procedures in Bail Application
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', lineHeight: 1.6 }}>
              As a lawyer handling bail applications, it's crucial to follow a structured approach to ensure your client’s best chances of securing bail. Begin by <strong>consulting with your client</strong> to gather all pertinent details about their case and background. Next, <strong>prepare a detailed bail application</strong> that clearly outlines the grounds for bail, supporting evidence, and mitigating factors. Submit this application to the court, adhering to all required guidelines. During the <strong>bail hearing</strong>, present a compelling case to persuade the judge of the necessity for bail. Finally, <strong>follow up diligently</strong> to monitor the application’s status and ensure all conditions are met if bail is granted. Staying informed and methodical in these steps will greatly enhance your ability to secure favorable outcomes for your clients.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Card sx={{ width: '100%', maxWidth: 400, cursor: 'pointer' }} onClick={() => handleOpenTemplate('bail')}>
                <CardMedia
                  component="img"
                  height="140"
                  image="src/assets/bail-template.webp"
                  alt="Bail Application Template"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <BailApplication />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Click here to view or use the bail application template.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Paper>

          {/* Pending Cases Section */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Pending Cases
            </Typography>

            {pendingApplications.map((application) => (
              <Box key={application.caseNo}
                onClick={() => handleSelectCase(application.caseNo)}
                sx={{
                  mt: 3,
                  p: 2,
                  bgcolor: selectedCase === application.caseNo ? '#e0f7fa' : 'whitesmoke',
                  border: selectedCase === application.caseNo ? '2px solid #00796b' : '1px solid #ddd',
                  borderRadius: 1,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease, border 0.3s ease',
                }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Case No: {application.caseNo}
                </Typography>
                <Typography variant="body1">
                  <strong>Prisoner Name:</strong> {application.prisonerName}
                </Typography>
                <Typography variant="body1">
                  <strong>Details:</strong> {application.details}
                </Typography>
                <Typography variant="body1">
                  <strong>Status:</strong> {application.status}
                </Typography>
              </Box>
            ))}
            {selectedCase && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Selected Case: {selectedCase}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleAcceptApplication} sx={{ mt: 2 }}>
                  Accept & Submit to Judicial Authority
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper sx={{ p: 3, height: '20%', display: 'flex', flexDirection: 'column', backgroundColor: '#f3f3f3' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              Your Profile
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" gutterBottom>
              <strong>Name:</strong> Ramesh Reddy
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Specialization:</strong> Murder & Property Cases
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Contact:</strong> +91 9876543210
            </Typography>
          </Paper>
          <Paper sx={{ p: 3, mt: 2, backgroundColor: '#f3f3f3' }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
        Procedural Prerequisites
      </Typography>
      <List>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ListItem>
            <img
              src="src/assets/surety.png"
              alt="Surety Bonds"
              style={{ height: 24, width: 24, marginRight: 16 }} // Adjust the size and margin
            />
            <ListItemText
              primary="Surety Bonds"
              secondary="Necessary to guarantee the accused will appear in court as required."
            />
          </ListItem>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ListItem>
            <img
              src="src/assets/personal.png"
              alt="Personal Bonds"
              style={{ height: 24, width: 24, marginRight: 16 }} // Adjust the size and margin
            />
            <ListItemText
              primary="Personal Bonds"
              secondary="A written commitment from the accused to appear in court as needed."
            />
          </ListItem>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ListItem>
            <img
              src="src/assets/User-Profile-PNG-Clipart.png"
              alt="Identity Verification"
              style={{ height: 24, width: 24, marginRight: 16 }} // Adjust the size and margin
            />
            <ListItemText
              primary="Identity Verification"
              secondary="Ensuring the identity of the accused through official documents."
            />
          </ListItem>
        </Box>
      </List>
    </Paper>
        </Grid>
      </Grid>

      {/* Draft Dialog */}
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          Draft Application
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseDialog}
            aria-label="close"
            sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ minWidth: 400 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Select Template
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="template-select-label">Template</InputLabel>
              <Select
                labelId="template-select-label"
                id="template-select"
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                fullWidth
              >
                <MenuItem value="bail">Bail Application</MenuItem>
                <MenuItem value="report">Case Report</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
              Draft Content
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={10}
              value={draftContent}
              onChange={(e) => setDraftContent(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
          <Button onClick={handleSubmitApplication} color="primary">
            Submit Application
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default LawyerDashboard;
