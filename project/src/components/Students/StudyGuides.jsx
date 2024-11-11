import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function StudyGuides() {
  const [value, setValue] = React.useState(0);
  const [plainText, setPlainText] = React.useState('');
  const [file, setFile] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePlainTextChange = (event) => {
    if (event.target.value.split(' ').length <= 1000) {
      setPlainText(event.target.value);
    }
  };

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleGoogleDriveImport = () => {
    alert('Google Drive import coming soon!');
  };

  return (
    <Box sx={{display:'flex',alignContent:'center',justifyContent:'center' }} mb={5}>
    <Box sx={{ width: '80%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Plain Text (1000 words)" {...a11yProps(0)} />
          <Tab label="Upload File" {...a11yProps(1)} />
          <Tab label="Google Drive Import" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <TextField
          label="Enter text (up to 1000 words)"
          multiline
          rows={10}
          variant="outlined"
          fullWidth
          value={plainText}
          onChange={handlePlainTextChange}
          helperText={`${plainText.split(' ').length} / 1000 words`}
        />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Button
          variant="contained"
          component="label"
          startIcon={<CloudUploadIcon />}
        >
          Upload File
          <input
            type="file"
            hidden
            onChange={handleFileUpload}
          />
        </Button>
        {file && <Box sx={{ mt: 2 }}>Selected file: {file.name}</Box>}
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Button
          variant="contained"
          onClick={handleGoogleDriveImport}
          startIcon={<CloudUploadIcon />}
        >
          Import from Google Drive
        </Button>
      </CustomTabPanel>
    </Box>
    </Box>
  );
}
