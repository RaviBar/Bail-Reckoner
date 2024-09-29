import React, { useState } from 'react';
import { Box, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const dropdownItems = [
  { title: 'Services', items: ['Consulting', 'Support', 'Development'] },
  { title: 'Resources', items: ['Documentation', 'API', 'Tutorials'] },
  { title: 'Company', items: ['About Us', 'Careers', 'Contact'] },
  { title: 'Legal', items: ['Terms of Service', 'Privacy Policy'] },
  { title: 'Community', items: ['Forums', 'Events', 'Blog'] },
  { title: 'Help', items: ['FAQ', 'Contact Support'] },
];

function DropdownNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        padding: 1,
        borderBottom: '1px solid #ddd',
        position: 'relative',
        zIndex: 1000, // Ensure the navbar is above other content
      }}
    >
      {dropdownItems.map((item, index) => (
        <Box key={index} sx={{ position: 'relative' }}>
          <IconButton
            onClick={(event) => handleClick(event, index)}
            onMouseEnter={(event) => handleClick(event, index)} // Show dropdown on hover
            sx={{ color: '#333' }}
          >
            <Typography variant="body1">{item.title}</Typography>
            <ExpandMoreIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl) && currentMenu === index}
            onClose={handleClose}
            onMouseLeave={handleClose}
            sx={{
              position: 'absolute',
              top: '100%',
              left: 0,
              zIndex: 1100, // Ensure the dropdown is above other content
              minWidth: 160, // Adjust width as needed
            }}
          >
            {item.items.map((subItem, subIndex) => (
              <MenuItem key={subIndex} onClick={handleClose}>
                {subItem}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ))}
    </Box>
  );
}

export default DropdownNavbar;
