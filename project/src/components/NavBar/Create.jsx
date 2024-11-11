import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FlashOnIcon from '@mui/icons-material/FlashOn';  
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';  // Correct AddIcon import
import { Link } from 'react-router-dom';


export default function Create() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AddIcon sx={{ mr: 1 }} /> Create
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to='/FlashCards'>
          <FlashOnIcon sx={{ mr: 1 }} />
          FlashCardSet
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FolderIcon sx={{ mr: 1 }} />
          Folder
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PersonIcon sx={{ mr: 1 }} />
          Class
        </MenuItem>
      </Menu>
    </div>
  );
}
