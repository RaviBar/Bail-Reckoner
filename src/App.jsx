import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from "./Appbar.jsx";
import MainPage from './MainPage.jsx';
import PrisonerDashboard from './components/prisoner/PrisonerDashboard.jsx';
import LawyerDashboard from './components/lawyer/LawyerDashboard.jsx';
import JudgeDashboard from './components/judge/JudgeDashboard.jsx';
import LoginPage from './LoginPage.jsx';
import Footer from './components/Footer.jsx';


const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Appbar /> {/* Appbar is now present across all pages */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* New Login Route */}
          <Route path="/prisoner" element={<PrisonerDashboard />} />
          <Route path="/lawyer" element={<LawyerDashboard />} />
          <Route path="/judge" element={<JudgeDashboard />} />
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
