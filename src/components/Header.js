import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import logo from '../assets/images/logo.gif';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <List>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={Link} to="/services" onClick={toggleDrawer(false)}>
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem button component={Link} to="/login" onClick={toggleDrawer(false)}>
        <ListItemText primary="Login" />
      </ListItem>
      <ListItem button component={Link} to="/profile" onClick={toggleDrawer(false)}>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button component={Link} to="/settings" onClick={toggleDrawer(false)}>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  );

  return (
    <>
      {/* First Header */}
      <AppBar
        position="static"
        style={{ backgroundColor: "black", borderBottom: "1px solid white" }}
      >
        <Toolbar
          style={{
            justifyContent: "space-between",
            minHeight: 40,
            backgroundColor: "black",
          }}
        >
          <Box>
            <Typography variant="body1">Email: info@example.com</Typography>
          </Box>
          <Box>
            <Typography variant="body1">Phone: +1 234 567 890</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Second Header */}
      <AppBar position="static" style={{ backgroundColor: "white" }} className="second-header">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <img src={logo} alt="Logo" />
          </Typography>
          {!isMobile && (
            <>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              <Button color="inherit" component={Link} to="/services">
                Services
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </>
  );
};

export default Header;
