import React, { useState } from 'react';
import {
  AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box, Tooltip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDropdownOpen = (event) => {
    setDropdownAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setDropdownAnchorEl(null);
  };

  const handleLogout = () => {
    alert('You have been logged out.');
    localStorage.setItem('token', null);
    window.location = '/';
  };

  const handleRemoveAccount = () => {
    alert('Your account has been removed.');
    // Add your account removal logic here
  };

  const open = Boolean(anchorEl);
  const dropdownOpen = Boolean(dropdownAnchorEl);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', mt: -1, mb: 0 }}>
      <Toolbar sx={{ px: 2, py: 1, justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip arrow>
            <Button
              onClick={handleDropdownOpen}
              sx={{ 
                color: 'black', 
                textTransform: 'none', 
                position: 'relative', 
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Judges
              <ExpandMoreIcon 
                sx={{ 
                  transition: 'transform 0.3s ease',
                  ml: 1 
                }} 
              />
            </Button>
          </Tooltip>
          <Tooltip arrow>
            <Button
              onClick={handleDropdownOpen}
              sx={{ 
                color: 'black', 
                textTransform: 'none', 
                position: 'relative', 
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
            Legal Aid Provider
             <ExpandMoreIcon 
                sx={{ 
                  transition: 'transform 0.3s ease',
                  ml: 1 
                }} 
              />
            </Button>
          </Tooltip>
          <Tooltip arrow>
            <Button
              onClick={handleDropdownOpen}
              sx={{ 
                color: 'black', 
                textTransform: 'none', 
                position: 'relative', 
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              e-Services
              <ExpandMoreIcon 
                sx={{ 
                  transition: 'transform 0.3s ease',
                  ml: 1 
                }} 
              />
            </Button>
          </Tooltip>
          <Tooltip arrow>
            <Button
              onClick={handleDropdownOpen}
              sx={{ 
                color: 'black', 
                textTransform: 'none', 
                position: 'relative', 
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Newsletters
              <ExpandMoreIcon 
                sx={{ 
                  transition: 'transform 0.3s ease',
                  ml: 1 
                }} 
              />
            </Button>
          </Tooltip>
          
            <Button
              sx={{ 
                color: 'black', 
                textTransform: 'none' 
              }}
            >
              Chat with AI
            </Button>
          <Menu
            anchorEl={dropdownAnchorEl}
            open={dropdownOpen}
            onClose={handleDropdownClose}
            PaperProps={{
              sx: {
                width: 200,
                maxWidth: '100%',
                bgcolor: 'background.paper',
                boxShadow: 'none',
                mt: 1
              },
            }}
          >
            <MenuItem onClick={handleDropdownClose}>Your Profile</MenuItem>
            <MenuItem onClick={handleDropdownClose}>Track Case Status</MenuItem>
            <MenuItem onClick={handleDropdownClose}>Check Bail Eligibility</MenuItem>
            <MenuItem onClick={handleRemoveAccount}>Remove Account</MenuItem>
          </Menu>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              width: 250,
              maxWidth: '100%',
              bgcolor: 'background.paper',
              boxShadow: 'none',
              mt: 1
            },
          }}
          sx={{ mt: 2 }}
        >
          <MenuItem onClick={handleMenuClose}>Your Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Track Case Status</MenuItem>
          <MenuItem onClick={handleMenuClose}>Check Bail Eligibility</MenuItem>
          <MenuItem onClick={handleRemoveAccount}>Remove Account</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
