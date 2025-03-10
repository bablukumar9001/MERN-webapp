import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton, Divider } from '@mui/material';
import { useColorMode } from '../../theme/useColorMode';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CodeIcon from '@mui/icons-material/Code';

const Footer = () => {
  const { isDarkMode } = useColorMode();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 8,
        px: 2,
        mt: 'auto',
        backgroundColor: isDarkMode ? 'dark.light' : 'light.DEFAULT',
        borderTop: `1px solid ${isDarkMode ? '#333' : '#eaeaea'}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" mb={3}>
              <CodeIcon sx={{ mr: 1.5, color: 'primary.main', fontSize: '2rem' }} />
              <Typography variant="h5" color="primary.main" fontWeight="bold" fontSize="1.5rem">
                IT Solutions
              </Typography>
            </Box>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              paragraph 
              sx={{ fontSize: '1.1rem', mb: 3, lineHeight: 1.6 }}
            >
              Providing innovative IT solutions for businesses of all sizes. Our expertise helps transform your digital presence.
            </Typography>
            <Box display="flex" gap={1.5}>
              <IconButton size="medium" color="primary" aria-label="facebook">
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton size="medium" color="primary" aria-label="twitter">
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton size="medium" color="primary" aria-label="linkedin">
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton size="medium" color="primary" aria-label="instagram">
                <InstagramIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              color="text.primary" 
              gutterBottom 
              fontWeight="bold" 
              sx={{ fontSize: '1.3rem', mb: 3 }}
            >
              Quick Links
            </Typography>
            <Link 
              href="/" 
              color="text.secondary" 
              display="block" 
              sx={{ 
                mb: 2,
                textDecoration: 'none', 
                '&:hover': { color: 'primary.main' },
                fontSize: '1.1rem',
                lineHeight: 1.5
              }}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              color="text.secondary" 
              display="block" 
              sx={{ 
                mb: 2, 
                textDecoration: 'none', 
                '&:hover': { color: 'primary.main' },
                fontSize: '1.1rem',
                lineHeight: 1.5
              }}
            >
              About
            </Link>
            <Link 
              href="/service" 
              color="text.secondary" 
              display="block" 
              sx={{ 
                mb: 2, 
                textDecoration: 'none', 
                '&:hover': { color: 'primary.main' },
                fontSize: '1.1rem',
                lineHeight: 1.5
              }}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              color="text.secondary" 
              display="block" 
              sx={{ 
                mb: 2, 
                textDecoration: 'none', 
                '&:hover': { color: 'primary.main' },
                fontSize: '1.1rem',
                lineHeight: 1.5
              }}
            >
              Contact
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              color="text.primary" 
              gutterBottom 
              fontWeight="bold"
              sx={{ fontSize: '1.3rem', mb: 3 }}
            >
              Contact Us
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              paragraph
              sx={{ fontSize: '1.1rem', mb: 2, lineHeight: 1.6 }}
            >
              123 IT Street, Tech City
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              paragraph
              sx={{ fontSize: '1.1rem', mb: 2, lineHeight: 1.6 }}
            >
              Email: info@itsolutions.com
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              paragraph
              sx={{ fontSize: '1.1rem', mb: 2, lineHeight: 1.6 }}
            >
              Phone: +1 (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)' }} />
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
          sx={{ fontSize: '1rem', pt: 1 }}
        >
          © {currentYear} IT Solutions. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;