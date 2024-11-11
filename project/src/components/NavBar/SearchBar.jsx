import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search term change
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (onSearch) onSearch(event.target.value);  
  };

  // Handle clear search
  const handleClear = () => {
    setSearchTerm('');
    if (onSearch) onSearch(''); 
  };

  return (
    <TextField
      value={searchTerm}
      onChange={handleChange}
      
      placeholder="Search for study guides"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: searchTerm && (
          <InputAdornment position="end">
            <IconButton onClick={handleClear}>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
