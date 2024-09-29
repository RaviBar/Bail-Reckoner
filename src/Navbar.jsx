import React, { useState } from 'react';
import {
  AppBar, Toolbar, Button, Menu, MenuItem, Box, Tooltip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  const handleDropdownOpen = (event, items) => {
    setAnchorEl(event.currentTarget);
    setMenuItems(items);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    setMenuItems([]);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', mt: -1, mb: 0 }}>
      <Toolbar sx={{ px: 2, py: 1, justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Judges Dropdown */}
          <Tooltip arrow>
            <Button
              onClick={(event) =>
                handleDropdownOpen(event, [
                  { label: 'Judge Profile', action: handleDropdownClose },
                  { label: 'Select Bail Applications', action: handleDropdownClose },
                  { label: 'Schedule Court Hearings', action: handleDropdownClose },
                  { label: 'Evaluate Risk assessment', action: handleDropdownClose },
                  { label: 'Check Bail Prediction', action: handleDropdownClose },
                ])
              }
              sx={{
                color: 'black',
                textTransform: 'none',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Judges
              <ExpandMoreIcon sx={{ transition: 'transform 0.3s ease', ml: 1 }} />
            </Button>
          </Tooltip>

          {/* Legal Aid Provider Dropdown */}
          <Tooltip arrow>
            <Button
              onClick={(event) =>
                handleDropdownOpen(event, [
                  { label: 'Lawyer Profile', action: handleDropdownClose },
                  { label: 'Select Pending Cases', action: handleDropdownClose },
                  { label: 'Prepare Bail Application', action: handleDropdownClose },
                  { label: 'Submit to judicial authority', action: handleDropdownClose },
                ])
              }
              sx={{
                color: 'black',
                textTransform: 'none',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Legal Aid Provider
              <ExpandMoreIcon sx={{ transition: 'transform 0.3s ease', ml: 1 }} />
            </Button>
          </Tooltip>

          {/* e-Services Dropdown */}
          <Tooltip arrow>
            <Button
              onClick={(event) =>
                handleDropdownOpen(event, [
                  { label: 'Online eligibility check', action: handleDropdownClose },
                  { label: 'e-Court Services', action: handleDropdownClose },
                  { label: 'Apply for Bail', action: handleDropdownClose },
                  { label: 'Hire Legal Aid Provider', action: handleDropdownClose },
                  { label: 'Real-time case tracking', action: handleDropdownClose },
                ])
              }
              sx={{
                color: 'black',
                textTransform: 'none',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              e-Services
              <ExpandMoreIcon sx={{ transition: 'transform 0.3s ease', ml: 1 }} />
            </Button>
          </Tooltip>

          {/* Newsletters Dropdown */}
          <Tooltip arrow>
            <Button
              onClick={(event) =>
                handleDropdownOpen(event, [
                  { label: 'Get Latest News', action: handleDropdownClose },
                  { label: 'Subscribe to Newsletters', action: handleDropdownClose },
                ])
              }
              sx={{
                color: 'black',
                textTransform: 'none',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Newsletters
              <ExpandMoreIcon sx={{ transition: 'transform 0.3s ease', ml: 1 }} />
            </Button>
          </Tooltip>

          {/* Chat with AI Button */}
          <Button sx={{ color: 'black', textTransform: 'none' }}>Chat with AI</Button>
        </Box>

        {/* Single Menu for All Dropdowns */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleDropdownClose}
          disableScrollLock
          PaperProps={{
            sx: { width: 220, bgcolor: 'background.paper', boxShadow: 'none', mt: 1 },
          }}
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={item.action}>
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
