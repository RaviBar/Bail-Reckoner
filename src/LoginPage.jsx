import React from 'react';
import { Box, Button, Container, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login as
      </Typography>
      <Box display="flex" justifyContent="space-around" mt={3} flexWrap="wrap">
        <Card sx={{ minWidth: 150, margin: 2 }}>
          <CardContent>
            <Typography variant="h6" align="center">
              Prisoner
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/prisoner')}
              >
                Select
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 150, margin: 2 }}>
          <CardContent>
            <Typography variant="h6" align="center">
              Lawyer
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/lawyer')}
              >
                Select
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 150, margin: 2 }}>
          <CardContent>
            <Typography variant="h6" align="center">
              Judge
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/judge')}
              >
                Select
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default LoginPage;
