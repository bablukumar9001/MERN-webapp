import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Stack,
  useTheme,
  alpha
} from '@mui/material';
import { useColorMode } from '../theme/useColorMode';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Home = () => {
  const { isDarkMode } = useColorMode();
  const theme = useTheme();

  const services = [
    {
      icon: <CodeIcon fontSize="large" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies.'
    },
    {
      icon: <DesignServicesIcon fontSize="large" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and engagement.'
    },
    {
      icon: <StorageIcon fontSize="large" />,
      title: 'Database Solutions',
      description: 'Efficient database design, optimization, and management services.'
    },
    {
      icon: <SecurityIcon fontSize="large" />,
      title: 'Cybersecurity',
      description: 'Protect your business with our comprehensive security solutions.'
    },
    {
      icon: <SpeedIcon fontSize="large" />,
      title: 'Performance Optimization',
      description: 'Speed up your applications and improve overall system performance.'
    },
    {
      icon: <SupportAgentIcon fontSize="large" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support for all your IT needs.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Box 
        className="py-16 md:py-24"
        sx={{
          background: isDarkMode 
            ? `linear-gradient(to bottom right, ${alpha(theme.palette.primary.dark, 0.2)}, ${alpha(theme.palette.background.default, 0.1)})`
            : `linear-gradient(to bottom right, ${alpha(theme.palette.primary.light, 0.1)}, ${alpha(theme.palette.background.default, 0.05)})`,
          borderBottom: `1px solid ${isDarkMode ? alpha('#ffffff', 0.05) : alpha('#000000', 0.05)}`
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className="text-center md:text-left">
                <Typography 
                  variant="overline" 
                  color="primary" 
                  className="tracking-widest"
                  sx={{ fontWeight: 600, mb: 1, display: 'block' }}
                >
                  LEADING IT SOLUTIONS PROVIDER
                </Typography>
                <Typography 
                  variant="h2" 
                  component="h1" 
                  className="mb-4 font-bold"
                  sx={{ 
                    fontWeight: 800,
                    mb: 2,
                    background: isDarkMode 
                      ? 'linear-gradient(90deg, #646cff 0%, #8a91ff 100%)'
                      : 'linear-gradient(90deg, #4a50bf 0%, #646cff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent'
                  }}
                >
                  Welcome to IT Solutions
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  color="text.secondary" 
                  className="mb-6 max-w-xl mx-auto md:mx-0"
                  sx={{ mb: 4, fontSize: '1.1rem' }}
                >
                  Are you ready to take your business to the next level with
                  cutting-edge IT solutions? Look no further! We specialize in providing 
                  innovative IT services and solutions tailored to meet your unique needs.
                </Typography>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2}
                  className="justify-center md:justify-start"
                >
                  <Button 
                    component={Link} 
                    to="/contact" 
                    variant="contained" 
                    size="large"
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      borderRadius: '50px',
                      fontWeight: 600,
                      boxShadow: isDarkMode ? '0 4px 20px rgba(100, 108, 255, 0.5)' : '0 4px 20px rgba(100, 108, 255, 0.3)'
                    }}
                  >
                    Connect Now
                  </Button>
                  <Button 
                    component={Link} 
                    to="/services" 
                    variant="outlined" 
                    size="large"
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      borderRadius: '50px',
                      fontWeight: 600,
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                className="relative"
                sx={{
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: isDarkMode 
                      ? 'radial-gradient(circle, rgba(100, 108, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%)'
                      : 'radial-gradient(circle, rgba(100, 108, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0
                  }
                }}
              >
                <img
                  src="/images/home.png"
                  alt="IT Solutions"
                  className="relative z-10 mx-auto"
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    filter: isDarkMode ? 'drop-shadow(0 0 20px rgba(100, 108, 255, 0.3))' : 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box className="py-16 md:py-24">
        <Container maxWidth="lg">
          <Box className="text-center mb-16">
            <Typography 
              variant="overline" 
              color="primary" 
              className="tracking-widest"
              sx={{ fontWeight: 600, mb: 1, display: 'block' }}
            >
              OUR SERVICES
            </Typography>
            <Typography 
              variant="h3" 
              component="h2" 
              className="mb-4 font-bold"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              What We Offer
            </Typography>
            <Typography 
              variant="subtitle1" 
              color="text.secondary" 
              className="max-w-2xl mx-auto"
            >
              Comprehensive IT solutions designed to help your business grow and succeed in the digital landscape
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  elevation={isDarkMode ? 4 : 1}
                  sx={{ 
                    height: '100%',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: isDarkMode ? '0 12px 24px rgba(0, 0, 0, 0.5)' : '0 12px 24px rgba(0, 0, 0, 0.1)'
                    },
                    backgroundColor: isDarkMode ? 'dark.light' : 'background.paper',
                    borderRadius: 3
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box 
                      className="mb-4 flex justify-center items-center"
                      sx={{ 
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        backgroundColor: isDarkMode ? alpha(theme.palette.primary.main, 0.15) : alpha(theme.palette.primary.main, 0.1),
                        color: 'primary.main',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 3
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        className="py-16 md:py-24"
        sx={{
          background: isDarkMode 
            ? `linear-gradient(to bottom left, ${alpha(theme.palette.primary.dark, 0.2)}, ${alpha(theme.palette.background.default, 0.1)})`
            : `linear-gradient(to bottom left, ${alpha(theme.palette.primary.light, 0.1)}, ${alpha(theme.palette.background.default, 0.05)})`,
          borderTop: `1px solid ${isDarkMode ? alpha('#ffffff', 0.05) : alpha('#000000', 0.05)}`
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box 
                className="relative"
                sx={{
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: isDarkMode 
                      ? 'radial-gradient(circle, rgba(255, 204, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%)'
                      : 'radial-gradient(circle, rgba(255, 204, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0
                  }
                }}
              >
                <img
                  src="/images/design.png"
                  alt="Get Started"
                  className="relative z-10 mx-auto"
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    filter: isDarkMode ? 'drop-shadow(0 0 20px rgba(255, 204, 0, 0.2))' : 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))'
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="text-center md:text-left">
                <Typography 
                  variant="overline" 
                  color="secondary" 
                  className="tracking-widest"
                  sx={{ fontWeight: 600, mb: 1, display: 'block' }}
                >
                  GET STARTED TODAY
                </Typography>
                <Typography 
                  variant="h3" 
                  component="h2" 
                  className="mb-4 font-bold"
                  sx={{ fontWeight: 700, mb: 2 }}
                >
                  Ready to Transform Your Business?
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  color="text.secondary" 
                  className="mb-6 max-w-xl mx-auto md:mx-0"
                  sx={{ mb: 4, fontSize: '1.1rem' }}
                >
                  Ready to take the first step towards a more efficient and secure
                  IT infrastructure? Contact us today for a free consultation and
                  let's discuss how we can help your business thrive in the digital age.
                </Typography>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2}
                  className="justify-center md:justify-start"
                >
                  <Button 
                    component={Link} 
                    to="/contact" 
                    variant="contained" 
                    color="secondary"
                    size="large"
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      borderRadius: '50px',
                      fontWeight: 600,
                      color: 'dark.DEFAULT',
                      boxShadow: isDarkMode ? '0 4px 20px rgba(255, 204, 0, 0.3)' : '0 4px 20px rgba(255, 204, 0, 0.2)'
                    }}
                  >
                    Contact Us
                  </Button>
                  <Button 
                    component={Link} 
                    to="/about" 
                    variant="outlined" 
                    color="secondary"
                    size="large"
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      borderRadius: '50px',
                      fontWeight: 600,
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2
                      }
                    }}
                  >
                    About Us
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;