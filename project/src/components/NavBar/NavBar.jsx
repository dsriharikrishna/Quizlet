import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  Menu,
  IconButton,
  Typography,
  Button,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  MenuItem,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Add, ArrowDropDown, FlashOn, Book, Science, School, Category } from '@mui/icons-material'; // Add your icons here
import SearchBar from './SearchBar';
import Create from './Create'

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorElStudyTools, setAnchorElStudyTools] = useState(null);
  const [anchorElSubjects, setAnchorElSubjects] = useState(null);
  const isDesktop = useMediaQuery('(min-width:960px)');

  const studyToolsStudents = [
    { name: 'Flashcards', icon: <FlashOn /> },
    { name: 'Learn', icon: <School /> },
    { name: 'StudyGuides', icon: <Book /> },
    { name: 'Test', icon: <Science /> },
    { name: 'ExpertSolutions', icon: <Category /> }
  ];

  const studyToolsTeachers = [
    { name: 'Live', icon: <School /> },
    { name: 'Blast', icon: <FlashOn /> },
    { name: 'Categories', icon: <Category /> },
    { name: 'Checkpoint', icon: <Science /> }
  ];

  const subjectsOptions = [
    { name: 'Exams', icon: <School /> },
    { name: 'Literature', icon: <Book /> },
    { name: 'ArtsandHumanities', icon: <Category /> },
    { name: 'Math', icon: <Science /> },
    { name: 'Science', icon: <Science /> },
    { name: 'SocialScience', icon: <Category /> }
  ];

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleClickStudyTools = (event) => {
    setAnchorElStudyTools(event.currentTarget);
  };

  const handleCloseStudyTools = () => {
    setAnchorElStudyTools(null);
  };

  const handleClickSubjects = (event) => {
    setAnchorElSubjects(event.currentTarget);
  };

  const handleCloseSubjects = () => {
    setAnchorElSubjects(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ height: '80px', borderRadius: '10px', padding: '4px', backgroundColor: 'white' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left side: Menu Button - Only visible on mobile */}
          {!isDesktop && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon sx={{ color: 'darkgray' }} />
            </IconButton>
          )}

          {/* Logo */}
          <Typography variant="h6" sx={{ flexGrow: isDesktop ? 0 : 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontWeight: '700' }}>
              {isDesktop ? 'Quizlet' : 'Q'}
            </Link>
          </Typography>

          {/* Center: SearchBar and Nav Items */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1, gap: '15px' }}>
            {/* Only show dropdowns on desktop */}
            {isDesktop && (
              <>
                <Button
                  endIcon={<ArrowDropDown />}
                  onClick={handleClickStudyTools}
                  sx={{ display: 'flex', color: 'black' }}
                >
                  Study Tools
                </Button>
                <Menu
                  anchorEl={anchorElStudyTools}
                  open={Boolean(anchorElStudyTools)}
                  onClose={handleCloseStudyTools}
                  PaperProps={{
                    sx: { width: 250 } 
                  }}
                >
                  {/* Students Section */}
                  <Typography variant="subtitle1" sx={{ padding: '8px 16px', fontWeight: 'bold' }}>Students</Typography>
                  {studyToolsStudents.map((tool, index) => (
                    <MenuItem key={index} onClick={handleCloseStudyTools} component={Link} to={`/${tool.name.toLowerCase()}`}>
                      {tool.icon} {tool.name}
                    </MenuItem>
                  ))}
                  <Divider />

                  {/* Teachers Section */}
                  <Typography variant="subtitle1" sx={{ padding: '8px 16px', fontWeight: 'bold' }}>Teachers</Typography>
                  {studyToolsTeachers.map((tool, index) => (
                    <MenuItem key={index} onClick={handleCloseStudyTools} component={Link} to={`/${tool.name.toLowerCase()}`}>
                      {tool.icon} {tool.name}
                    </MenuItem>
                  ))}
                </Menu>

                <Divider orientation="vertical" flexItem />

                <Button
                  endIcon={<ArrowDropDown />}
                  onClick={handleClickSubjects}
                  sx={{ display: 'flex', color: 'black' }}
                >
                  Subjects
                </Button>
                <Menu
                  anchorEl={anchorElSubjects}
                  open={Boolean(anchorElSubjects)}
                  onClose={handleCloseSubjects}
                  PaperProps={{
                    sx: { width: 250 } 
                  }}
                >
                  {subjectsOptions.map((subject, index) => (
                    <MenuItem key={index} onClick={handleCloseSubjects} component={Link} to={`/${subject.name.toLowerCase()}`}>
                      {subject.icon} {subject.name}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}

            {/* SearchBar */}
            <SearchBar placeholder="Find it faster with a search" sx={{ width: '350px' }} />

            {/* Create and Login Buttons */}
            <Box sx={{ display: 'flex', gap: '10px', marginLeft: 'auto' }}>
              <Button
                variant="outlined"
                sx={{ backgroundColor: 'white', color: 'blue', border: 'none' }}
                component={Link}
                
              >
                <Create/> 
              </Button>
              <Button variant="contained" sx={{ width: '90px' }} component={Link} to="/loginpage">
                Log in
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      {!isDesktop && (
        <Drawer open={openDrawer} onClose={toggleDrawer}>
          <Box sx={{ width: 250, marginTop: '20px', padding: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>Students</Typography>
            <List>
              {studyToolsStudents.map((tool, index) => (
                <ListItem button key={tool.name} onClick={handleDrawerClose} component={Link} to={`/${tool.name.toLowerCase()}`}>
                  {tool.icon} <ListItemText primary={tool.name} />
                </ListItem>
              ))}
            </List>

            <Typography variant="h6" sx={{ marginBottom: '10px' }}>Teachers</Typography>
            <List>
              {studyToolsTeachers.map((tool, index) => (
                <ListItem button key={tool.name} onClick={handleDrawerClose} component={Link} to={`/${tool.name.toLowerCase()}`}>
                  {tool.icon} <ListItemText primary={tool.name} />
                </ListItem>
              ))}
            </List>

            <Typography variant="h6" sx={{ marginBottom: '10px' }}>Subjects</Typography>
            <List>
              {subjectsOptions.map((subject, index) => (
                <ListItem button key={subject.name} onClick={handleDrawerClose} component={Link} to={`/${subject.name.toLowerCase()}`}>
                  {subject.icon} <ListItemText primary={subject.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default NavBar;
