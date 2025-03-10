import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useColorMode } from "../theme/useColorMode";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  useTheme,
  alpha,
  Stack,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import DevicesIcon from "@mui/icons-material/Devices";

const Services = () => {
  const { services } = useAuth();
  const { isDarkMode } = useColorMode();
  const theme = useTheme();

  // Default services if the API doesn't return any
  const defaultServices = [
    {
      service: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies to meet your specific business needs.",
      price: "$1000-$5000",
      provider: "IT Solutions",
      icon: <CodeIcon fontSize="large" />,
      image: "/images/webdev.png",
    },
    {
      service: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that enhance user experience and engagement for your digital products.",
      price: "$800-$3000",
      provider: "IT Solutions",
      icon: <DesignServicesIcon fontSize="large" />,
      image: "/images/design.png",
    },
    {
      service: "Database Solutions",
      description:
        "Efficient database design, optimization, and management services for improved data handling.",
      price: "$1200-$4000",
      provider: "IT Solutions",
      icon: <StorageIcon fontSize="large" />,
      image: "/images/network.png",
    },
    {
      service: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your business from threats and ensure data safety.",
      price: "$1500-$6000",
      provider: "IT Solutions",
      icon: <SecurityIcon fontSize="large" />,
      image: "/images/ai.png",
    },
    {
      service: "E-commerce Development",
      description:
        "End-to-end e-commerce solutions to help you sell products and services online effectively.",
      price: "$2000-$8000",
      provider: "IT Solutions",
      icon: <ShoppingCartIcon fontSize="large" />,
      image: "/images/ecom.png",
    },
    {
      service: "SEO Optimization",
      description:
        "Improve your website's visibility in search engines and drive more organic traffic.",
      price: "$600-$2500",
      provider: "IT Solutions",
      icon: <SearchIcon fontSize="large" />,
      image: "/images/seo.png",
    },
  ];

  // Use services from API if available, otherwise use default services
  const displayServices = services && services.length > 0 ? services : defaultServices;

  // Map icons to services if using API data
  const getIconForService = (serviceName) => {
    const serviceIcons = {
      "Web Development": <CodeIcon fontSize="large" />,
      "UI/UX Design": <DesignServicesIcon fontSize="large" />,
      "Database Solutions": <StorageIcon fontSize="large" />,
      "Cybersecurity": <SecurityIcon fontSize="large" />,
      "E-commerce Development": <ShoppingCartIcon fontSize="large" />,
      "SEO Optimization": <SearchIcon fontSize="large" />,
      "Mobile App Development": <DevicesIcon fontSize="large" />,
      "IT Support": <SupportAgentIcon fontSize="large" />,
      "Performance Optimization": <SpeedIcon fontSize="large" />,
    };

    return serviceIcons[serviceName] || <CodeIcon fontSize="large" />;
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        className="py-16 md:py-24"
        sx={{
          background: isDarkMode
            ? `linear-gradient(to bottom right, ${alpha(
                theme.palette.primary.dark,
                0.2
              )}, ${alpha(theme.palette.background.default, 0.1)})`
            : `linear-gradient(to bottom right, ${alpha(
                theme.palette.primary.light,
                0.1
              )}, ${alpha(theme.palette.background.default, 0.05)})`,
          borderBottom: `1px solid ${
            isDarkMode ? alpha("#ffffff", 0.05) : alpha("#000000", 0.05)
          }`,
        }}
      >
        <Container maxWidth="lg">
          <Box className="text-center mb-12">
            <Typography
              variant="overline"
              color="primary"
              className="tracking-widest"
              sx={{ fontWeight: 600, mb: 1, display: "block" }}
            >
              OUR SERVICES
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              className="mb-4 font-bold"
              sx={{
                fontWeight: 800,
                mb: 3,
              }}
            >
              What We Offer
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              className="mb-6 max-w-2xl mx-auto"
              sx={{ mb: 4, fontSize: "1.1rem" }}
            >
              We provide a wide range of IT services tailored to meet your
              business needs. Our solutions are designed to help you grow,
              optimize, and secure your digital presence.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {displayServices.map((service, index) => {
              // Determine icon based on service name if using API data
              const icon = service.icon || getIconForService(service.service);
              const image = service.image || "/images/services.png";

              return (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card
                    elevation={isDarkMode ? 4 : 1}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: isDarkMode
                          ? "0 12px 24px rgba(0, 0, 0, 0.5)"
                          : "0 12px 24px rgba(0, 0, 0, 0.1)",
                      },
                      backgroundColor: isDarkMode
                        ? "dark.light"
                        : "background.paper",
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={image}
                      alt={service.service}
                      sx={{
                        objectFit: "cover",
                      }}
                    />
                    <CardContent sx={{ p: 4, flexGrow: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Chip
                          label={service.provider}
                          color="primary"
                          size="medium"
                          sx={{ fontWeight: 500, fontSize: "0.9rem" }}
                        />
                        <Typography
                          variant="subtitle1"
                          color="secondary.main"
                          sx={{ fontWeight: 700 }}
                        >
                          {service.price}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                        sx={{ fontWeight: 700, mb: 2, mt: 1 }}
                      >
                        {service.service}
                      </Typography>
                      <Divider sx={{ mb: 3 }} />
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 3, fontSize: "1.1rem" }}
                      >
                        {service.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: "auto",
                        }}
                      >
                        <Button
                          component={Link}
                          to="/contact"
                          variant="contained"
                          size="large"
                          sx={{
                            borderRadius: "50px",
                            px: 4,
                            py: 1.2,
                            fontWeight: 600,
                          }}
                        >
                          Get Started
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box className="py-16 md:py-24">
        <Container maxWidth="lg">
          <Box className="text-center mb-16">
            <Typography
              variant="overline"
              color="primary"
              className="tracking-widest"
              sx={{ fontWeight: 600, mb: 1, display: "block" }}
            >
              OUR PROCESS
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              className="mb-4 font-bold"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              How We Work
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              className="max-w-2xl mx-auto"
            >
              Our streamlined process ensures efficient delivery of high-quality
              solutions tailored to your needs
            </Typography>
          </Box>

          <Grid container spacing={6}>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  textAlign: "center",
                  position: "relative",
                  "&::after": {
                    content: {
                      xs: "none",
                      md: '""',
                    },
                    position: "absolute",
                    top: "30%",
                    right: "-30%",
                    width: "60%",
                    height: "2px",
                    backgroundColor: isDarkMode
                      ? alpha(theme.palette.primary.main, 0.5)
                      : alpha(theme.palette.primary.main, 0.3),
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: isDarkMode
                      ? alpha(theme.palette.primary.main, 0.15)
                      : alpha(theme.palette.primary.main, 0.1),
                    color: "primary.main",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                    mb: 3,
                    position: "relative",
                    zIndex: 1,
                    fontSize: "2rem",
                    fontWeight: 700,
                  }}
                >
                  1
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Consultation
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: "1.1rem" }}
                >
                  We discuss your requirements and goals to understand your
                  specific needs
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  textAlign: "center",
                  position: "relative",
                  "&::after": {
                    content: {
                      xs: "none",
                      md: '""',
                    },
                    position: "absolute",
                    top: "30%",
                    right: "-30%",
                    width: "60%",
                    height: "2px",
                    backgroundColor: isDarkMode
                      ? alpha(theme.palette.primary.main, 0.5)
                      : alpha(theme.palette.primary.main, 0.3),
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: isDarkMode
                      ? alpha(theme.palette.primary.main, 0.15)
                      : alpha(theme.palette.primary.main, 0.1),
                    color: "primary.main",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                    mb: 3,
                    position: "relative",
                    zIndex: 1,
                    fontSize: "2rem",
                    fontWeight: 700,
                  }}
                >
                  2
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Planning
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: "1.1rem" }}
                >
                  We create a detailed roadmap and strategy for implementing your
                  solution
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  textAlign: "center",
                  position: "relative",
                  "&::after": {
                    content: {
                      xs: "none",
                      md: '""',
                    },
                    position: "absolute",
                    top: "30%",
                    right: "-30%",
                    width: "60%",
                    height: "2px",
                    backgroundColor: isDarkMode
                      ? alpha(theme.palette.primary.main, 0.5)
                      : alpha(theme.palette.primary.main, 0.3),
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: isDarkMode
                      ? alpha(theme.palette.primary.main, 0.15)
                      : alpha(theme.palette.primary.main, 0.1),
                    color: "primary.main",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                    mb: 3,
                    position: "relative",
                    zIndex: 1,
                    fontSize: "2rem",
                    fontWeight: 700,
                  }}
                >
                  3
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Development
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: "1.1rem" }}
                >
                  Our expert team builds your solution with regular updates and
                  feedback
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: isDarkMode
                      ? alpha(theme.palette.primary.main, 0.15)
                      : alpha(theme.palette.primary.main, 0.1),
                    color: "primary.main",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                    mb: 3,
                    fontSize: "2rem",
                    fontWeight: 700,
                  }}
                >
                  4
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Delivery & Support
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: "1.1rem" }}
                >
                  We deliver your solution and provide ongoing support and
                  maintenance
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        className="py-16 md:py-20"
        sx={{
          background: isDarkMode
            ? alpha(theme.palette.background.paper, 0.3)
            : alpha(theme.palette.primary.light, 0.05),
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={6}>
              <Box className="text-center md:text-left">
                <Typography
                  variant="overline"
                  color="primary"
                  className="tracking-widest"
                  sx={{ fontWeight: 600, mb: 1, display: "block" }}
                >
                  GET STARTED
                </Typography>
                <Typography
                  variant="h3"
                  component="h2"
                  className="mb-4 font-bold"
                  sx={{ fontWeight: 700, mb: 3 }}
                >
                  Ready to Elevate Your Business?
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  className="mb-6 max-w-xl mx-auto md:mx-0"
                  sx={{ mb: 4, fontSize: "1.1rem" }}
                >
                  Contact us today to discuss your project requirements and
                  discover how our services can help you achieve your business
                  goals. We're here to turn your vision into reality.
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
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
                      borderRadius: "50px",
                      fontWeight: 600,
                      boxShadow: isDarkMode
                        ? "0 4px 20px rgba(100, 108, 255, 0.5)"
                        : "0 4px 20px rgba(100, 108, 255, 0.3)",
                    }}
                  >
                    Contact Us
                  </Button>
                  <Button
                    component={Link}
                    to="/about"
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: "50px",
                      fontWeight: 600,
                      borderWidth: 2,
                      "&:hover": {
                        borderWidth: 2,
                      },
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
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: isDarkMode
                      ? "radial-gradient(circle, rgba(100, 108, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%)"
                      : "radial-gradient(circle, rgba(100, 108, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 0,
                  },
                }}
              >
                <img
                  src="/images/services.png"
                  alt="IT Services"
                  className="relative z-10 mx-auto"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    filter: isDarkMode
                      ? "drop-shadow(0 0 20px rgba(100, 108, 255, 0.3))"
                      : "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services; 