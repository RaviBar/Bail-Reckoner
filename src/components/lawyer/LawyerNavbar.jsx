import React, { useState } from 'react';
import {
  AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box, Tooltip, Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const LawyerNavbar = ({ onSelectApplication }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSelect = (event) => {
    const selectedCaseId = event.target.value;
    const selectedCase = pendingApplications.find((app) => app.caseNo === selectedCaseId);
    onSelectApplication(selectedCase);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDropdownOpen = (event, tag) => {
    setSelectedTag(tag);
    setDropdownAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setDropdownAnchorEl(null);
    setSelectedTag(null);
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

  const tagContent = {
    'Manage Cases': [
      { id: 'M001', caseNo: 'A123456', caseTitle: 'Case Title 1', status: 'Pending' },
      { id: 'M002', caseNo: 'A234567', caseTitle: 'Case Title 2', status: 'In Progress' },
    ],
    'Client Consultation': [
      { id: 'C001', clientName: 'John Doe', consultationDate: '2024-10-01' },
      { id: 'C002', clientName: 'Jane Smith', consultationDate: '2024-10-05' },
    ],
    'Legal Resources': [
      { resource: 'Legal Aid Handbook' },
      { resource: 'Court Procedures Guide' },
    ],
    'Pending Bail Cases': [
      { id: 'P001', caseNo: 'C495659', prisonerName: 'Rahul Sharma' },
      { id: 'P002', caseNo: 'C778899', prisonerName: 'Priya Yadav' },
      { id: 'P003', caseNo: 'C789101', clientName: 'Amit Verma' },
      { id: 'P004', caseNo: 'C112233', clientName: 'Suresh Gupta' },
      { id: 'P005', caseNo: 'C445566', prisonerName: 'Manoj Singh' },
      { id: 'P006', caseNo: 'C901234', prisonerName: 'Anita Rao' },
    ],
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', mt: -4, mb: 3 }}>
        <Toolbar sx={{ px: 2, py: 1, justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {Object.keys(tagContent).map((tag) => (
              <Tooltip key={tag} title={tag} arrow>
                <Button
                  onClick={(event) => handleDropdownOpen(event, tag)}
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
                  {tag}
                  <ExpandMoreIcon 
                    sx={{ 
                      transition: 'transform 0.3s ease',
                      ml: 1 
                    }} 
                  />
                </Button>
              </Tooltip>
            ))}

            <Menu
              anchorEl={dropdownAnchorEl}
              open={dropdownOpen}
              onClose={handleDropdownClose}
              PaperProps={{
                sx: {
                  width: 300,
                  maxWidth: '100%',
                  bgcolor: 'background.paper',
                  boxShadow: 'none',
                  mt: 1
                },
              }}
            >
              {selectedTag && tagContent[selectedTag].map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={handleDropdownClose}
                  sx={{
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  {selectedTag === 'Legal Resources' ? item.resource : 
                   selectedTag === 'Client Consultation' ? `Client: ${item.clientName} (Date: ${item.consultationDate})` : 
                   selectedTag === 'Manage Cases' ? `Case No: ${item.caseNo} - ${item.caseTitle} (Status: ${item.status})` :
                   `Case No: ${item.caseNo} - ${item.prisonerName || item.clientName}`}
                </MenuItem>
              ))}
              <MenuItem onClick={handleRemoveAccount}>Remove Account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Logo */}
            <IconButton
              onClick={handleMenuClick}
              sx={{ ml: 2 }}
            >
              <img src="src/assets/User-Profile-PNG-Clipart.png" alt="Logo" style={{ height: 30 }} />
            </IconButton>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
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
            <MenuItem onClick={handleMenuClose}>Case Management</MenuItem>
            <MenuItem onClick={handleMenuClose}>Client Meetings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Legal Resources</MenuItem>
            <MenuItem onClick={handleRemoveAccount}>Remove Account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      

      
    </div>
  );
};

export default LawyerNavbar;
