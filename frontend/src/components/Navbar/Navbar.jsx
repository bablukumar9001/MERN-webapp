import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { useColorMode } from "../../theme/useColorMode";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CodeIcon from "@mui/icons-material/Code";

export const Navbar = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  const { toggleColorMode, isDarkMode } = useColorMode();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  const authItems = isLoggedIn
    ? [
        { name: "Logout", path: "/logout" },
        ...(isAdmin ? [{ name: "Admin", path: "/admin" }] : []),
      ]
    : [
        { name: "Register", path: "/register" },
        { name: "Login", path: "/login" },
      ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const renderMobileDrawer = () => (
    <Box sx={{ width: 280 }} role="presentation">
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              selected={isActive(item.path)}
              onClick={toggleDrawer(false)}
              sx={{
                color: isActive(item.path) ? "primary.main" : "text.primary",
                "&.Mui-selected": {
                  backgroundColor: isDarkMode ? "rgba(100, 108, 255, 0.08)" : "rgba(100, 108, 255, 0.12)",
                },
                py: 1.5,
              }}
            >
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{ 
                  fontSize: "1.2rem",
                  fontWeight: isActive(item.path) ? 600 : 400,
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
        {authItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              selected={isActive(item.path)}
              onClick={toggleDrawer(false)}
              sx={{
                color: isActive(item.path) ? "primary.main" : "text.primary",
                "&.Mui-selected": {
                  backgroundColor: isDarkMode ? "rgba(100, 108, 255, 0.08)" : "rgba(100, 108, 255, 0.12)",
                },
                py: 1.5,
              }}
            >
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{ 
                  fontSize: "1.2rem",
                  fontWeight: isActive(item.path) ? 600 : 400,
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={1}
      sx={{
        backgroundColor: isDarkMode ? "dark.light" : "white",
        borderBottom: `1px solid ${isDarkMode ? "#333" : "#eaeaea"}`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Logo for desktop */}
          <CodeIcon 
            sx={{ 
              display: { xs: "none", md: "flex" }, 
              mr: 1.5, 
              color: "primary.main",
              fontSize: "2rem"
            }} 
          />
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 3,
              display: { xs: "none", md: "flex" },
              fontFamily: "Urbanist",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "primary.main",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
          >
            IT Solutions
          </Typography>

          {/* Mobile menu icon */}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
              sx={{ fontSize: "1.5rem" }}
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {renderMobileDrawer()}
            </Drawer>
          </Box>

          {/* Logo for mobile */}
          <CodeIcon 
            sx={{ 
              display: { xs: "flex", md: "none" }, 
              mr: 1, 
              color: "primary.main",
              fontSize: "1.75rem"
            }} 
          />
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Urbanist",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "primary.main",
              textDecoration: "none",
              fontSize: "1.3rem",
            }}
          >
            IT Solutions
          </Typography>

          {/* Desktop navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={NavLink}
                to={item.path}
                sx={{
                  my: 2,
                  mx: 1.5,
                  color: isActive(item.path) ? "primary.main" : "text.primary",
                  display: "block",
                  fontWeight: isActive(item.path) ? 700 : 500,
                  fontSize: "1.1rem",
                  position: "relative",
                  "&::after": isActive(item.path)
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: "10px",
                        left: "20%",
                        width: "60%",
                        height: "3px",
                        backgroundColor: "primary.main",
                        borderRadius: "2px",
                      }
                    : {},
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "primary.main",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "10px",
                      left: "20%",
                      width: "60%",
                      height: "3px",
                      backgroundColor: "primary.main",
                      borderRadius: "2px",
                    },
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Dark mode toggle */}
          <Box sx={{ mr: 2 }}>
            <IconButton 
              onClick={toggleColorMode} 
              color="inherit"
              sx={{ fontSize: "1.3rem" }}
            >
              {isDarkMode ? <Brightness7Icon fontSize="inherit" /> : <Brightness4Icon fontSize="inherit" />}
            </IconButton>
          </Box>

          {/* User menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account options">
              <IconButton 
                onClick={handleOpenUserMenu} 
                sx={{ 
                  p: 0.5,
                }}
              >
                <Avatar 
                  sx={{ 
                    bgcolor: isLoggedIn ? "primary.main" : "secondary.main",
                    color: isLoggedIn ? "white" : "text.primary",
                    width: 40,
                    height: 40,
                    fontSize: "1.2rem",
                  }}
                >
                  {isLoggedIn ? "U" : "G"}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              PaperProps={{
                sx: {
                  padding: "8px 0",
                }
              }}
            >
              {authItems.map((item) => (
                <MenuItem 
                  key={item.name} 
                  component={NavLink}
                  to={item.path}
                  onClick={handleCloseUserMenu}
                  sx={{
                    color: isActive(item.path) ? "primary.main" : "text.primary",
                    fontWeight: isActive(item.path) ? 600 : 400,
                    fontSize: "1.1rem",
                    py: 1.5,
                    px: 3,
                  }}
                >
                  <Typography textAlign="center" fontSize="inherit">
                    {item.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
