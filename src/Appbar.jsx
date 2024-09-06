import React, { useEffect, useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthModal from './components/Authentication/AuthModal';
import Logo from './assets/log.webp';
import Symbol from './assets/symbol.png';
import Baillogo from './assets/bail-reckonarlogo.png';
function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:4000/me", {
//       method: "GET",
//       headers: {
//         "Authorization": "Bearer " + localStorage.getItem("token"),
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.username) {
//           setUserEmail(data.username);
//         }
//       });
//   }, []);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 1,
        backgroundColor: '#3d0538'
      }}
    >
        {/* Logo Section */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      
        <Typography
          variant={"h6"}
          style={{ cursor: "pointer", color: "white" }}
          onClick={() => navigate("/")}
        >
          <img
          src={Baillogo}
          alt="Baillogo"
          style={{ width: 160, height: 'auto', marginRight: -52, cursor: 'pointer', borderRadius: '10%' }}
          onClick={() => navigate("/")}
        />
        </Typography>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: 35, height: 'auto', marginRight: 16, marginTop: -30, cursor: 'pointer', borderRadius: '100%' }}
          onClick={() => navigate("/")}
        />
        <img
          src={Symbol}
          alt="Symbol"
          style={{ width: 60, height: 'auto', marginLeft: 10, cursor: 'pointer' }}
          onClick={() => navigate("/")}
        />
        <Typography style={{ width: 140, color: 'white', height: 'auto', marginRight: 5, cursor: 'pointer'}}>|| यतो धर्मस्ततो जयः ||</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        {userEmail ? (
          <>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('./checkeligibility')}
              sx={{ marginRight: 2 }}
            >
              Check Eligibility
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('./court-hearing')}
              sx={{ marginRight: 2 }}
            >
              track court hearing
            </Button>
            <Typography variant="body1" color="white" sx={{ marginRight: 2 }}>
              {userEmail}
            </Typography>
            
          </>
        ) : (
          <>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleModalOpen}
              sx={{ marginRight: 2, height: 50, alignItems:'center', marginTop: 1}}
            >
              Sign Up / <br /> Sign In
            </Button>
          </>
        )}
      </Box>
      <AuthModal open={modalOpen} handleClose={handleModalClose} />
    </Box>
  );
}

export default Appbar;
