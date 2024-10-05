import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Container, Card, CardContent, IconButton, TextField, Snackbar, Alert } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import prisonerImage from '../../assets/prisoner_PNG13.png';
import lawyerImage from '../../assets/lawyer-png.jpeg';
import judgeImage from '../../assets/judge-pngrepo-com.png';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

const cardStyle = {
  minWidth: 150,
  margin: 2,
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: 140,
  transition: '0.3s',
  borderRadius: '10px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    borderColor: '#3d0538',
    boxShadow: '0 0 10px 2px #3d0538',
  },
};

const contentStyle = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
  color: '#21f76c',
  textAlign: 'center',
  padding: '8px',
  transition: 'background-position 0.4s ease-in-out',
  backgroundPosition: 'bottom',
  backgroundSize: '200% 200%',
};

function AuthModal({ open, handleClose }) {
  const [step, setStep] = useState('selection'); 
  const [userType, setUserType] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]); 
  const [snackbarOpen, setSnackbarOpen] = useState(false); 
  const [snackbarMessage, setSnackbarMessage] = useState(''); 
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); 
  const navigate = useNavigate();

  const handleBack = () => {
    setStep('selection');
    setUserType(null);
  };

  const handleModalClose = () => {
    setStep('selection');
    setUserType(null);
    setUsername('');
    setPassword('');
    handleClose();
  };

  const handleRegisterClick = () => {
    setStep('registration');
  };

  const handleRegisterBack = () => {
    setStep('form');
  };

  const handleRegister = () => {
    if (username && password) {
      const newUser = { id: userType, username, password };
      setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);
      setSnackbarMessage(`${userType.charAt(0).toUpperCase() + userType.slice(1)} registered successfully`);
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setStep('form'); 
      setUsername(''); 
      setPassword('');
    } else {
      setSnackbarMessage('Please enter a valid username and password');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const authenticate = (userType, username, password) => {
    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password && user.id === userType
    );
    return !!user;
  };

  const handleLogin = () => {
    if (authenticate(userType, username, password)) {
      setSnackbarMessage(`Welcome, ${userType}`);
      setSnackbarSeverity('success');
      setSnackbarOpen(true); 
      handleModalClose(); 
      navigate(`/${userType}`); 
    } else {
      setSnackbarMessage('Invalid credentials');
      setSnackbarSeverity('error');
      setSnackbarOpen(true); 
    }
  };

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setStep('form');
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleModalClose}>
        <Box sx={modalStyle}>
          <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 16, right: 16 }}>
            <CloseIcon />
          </IconButton>

          {step === 'form' && (
            <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 16, left: 16 }}>
              <ArrowBackIcon />
            </IconButton>
          )}

          {step === 'selection' && (
            <Container>
              <Typography variant="h4" align="center" gutterBottom>
                Login as
              </Typography>
              <Box display="flex" justifyContent="space-around" mt={3} flexWrap="wrap">
                <Card
                  onClick={() => handleUserTypeSelect('prisoner')}
                  sx={{
                    ...cardStyle,
                    backgroundImage: `url(${prisonerImage})`
                  }}
                >
                  <CardContent className="card-content" sx={contentStyle}>
                    <Typography variant="h6">Prisoner</Typography>
                  </CardContent>
                </Card>

                <Card
                  onClick={() => handleUserTypeSelect('lawyer')}
                  sx={{
                    ...cardStyle,
                    backgroundImage: `url(${lawyerImage})`
                  }}
                >
                  <CardContent className="card-content" sx={contentStyle}>
                    <Typography variant="h6">Lawyer</Typography>
                  </CardContent>
                </Card>

                <Card
                  onClick={() => handleUserTypeSelect('judge')}
                  sx={{
                    ...cardStyle,
                    backgroundImage: `url(${judgeImage})`
                  }}
                >
                  <CardContent className="card-content" sx={contentStyle}>
                    <Typography variant="h6">Judge</Typography>
                  </CardContent>
                </Card>
              </Box>
            </Container>
          )}

          {step === 'form' && (
            <Container>
              <Typography variant="h5" gutterBottom>
                {userType.charAt(0).toUpperCase() + userType.slice(1)} Login
              </Typography>
              <Box mt={2}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Box mt={2}>
                  <Button variant="contained" color="secondary" fullWidth onClick={handleLogin}>
                    Login as {userType.charAt(0).toUpperCase() + userType.slice(1)}
                  </Button>
                </Box>

                <Box mt={2} display="flex" justifyContent="space-between">
                  <Button onClick={handleRegisterClick}>Not registered? Register</Button>
                </Box>
              </Box>
            </Container>
          )}

          {step === 'registration' && (
            <Container>
              <IconButton onClick={handleRegisterBack} sx={{ position: 'absolute', top: 16, left: 16 }}>
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h5" gutterBottom>
                Register as {userType.charAt(0).toUpperCase() + userType.slice(1)}
              </Typography>
              <Box mt={2}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Box mt={2}>
                  <Button variant="contained" color="secondary" fullWidth onClick={handleRegister}>
                    Register
                  </Button>
                </Box>
              </Box>
            </Container>
          )}
        </Box>
      </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ maxWidth: '600px', width: '100%' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{
            width: '100%',
            whiteSpace: 'nowrap', 
            overflow: 'hidden',
            textOverflow: 'ellipsis', 
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default AuthModal;
