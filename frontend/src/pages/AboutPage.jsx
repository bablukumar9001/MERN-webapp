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
  Avatar,
  Stack,
  Divider,
  useTheme,
  alpha,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";

const AboutPage = () => {
  const { user } = useAuth();
  const { isDarkMode } = useColorMode();
  const theme = useTheme();

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/images/aboutdoctor.webp",
      description: "15+ years of experience in IT solutions and leadership",
    },
    {
      name: "Sarah Williams",
      role: "CTO",
      image: "/images/aboutdoctor.webp",
      description: "Expert in cloud architecture and emerging technologies",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "/images/aboutdoctor.webp",
      description: "Full-stack developer with a passion for clean code",
    },
  ];

  const features = [
    {
      icon: <EmojiObjectsIcon fontSize="large" />,
      title: "Expertise",
      description:
        "Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.",
    },
    {
      icon: <GroupsIcon fontSize="large" />,
      title: "Customization",
      description:
        "We understand that every business is unique. That's why we create solutions that are tailored to your specific needs and goals.",
    },
    {
      icon: <SupportAgentIcon fontSize="large" />,
      title: "Customer-Centric",
      description:
        "We prioritize your satisfaction and provide top-notch support to address your IT concerns.",
    },
    {
      icon: <AttachMoneyIcon fontSize="large" />,
      title: "Affordability",
      description:
        "We offer competitive pricing without compromising on the quality of our services.",
    },
    {
      icon: <SecurityIcon fontSize="large" />,
      title: "Reliability",
      description:
        "Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.",
    },
  ];

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
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className="text-center md:text-left">
                <Typography
                  variant="overline"
                  color="primary"
                  className="tracking-widest"
                  sx={{ fontWeight: 600, mb: 1, display: "block" }}
                >
                  ABOUT US
                </Typography>
                <Typography
                  variant="h2"
                  component="h1"
                  className="mb-4 font-bold"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                  }}
                >
                  Welcome{" "}
                  {user && user.username ? (
                    <Box
                      component="span"
                      sx={{
                        color: "primary.main",
                      }}
                    >
                      {user.username}
                    </Box>
                  ) : (
                    "to IT Solutions"
                  )}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.primary"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 3 }}
                >
                  Why Choose Us?
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  className="mb-6 max-w-xl mx-auto md:mx-0"
                  sx={{ mb: 4, fontSize: "1.1rem" }}
                >
                  We're a team of dedicated IT professionals committed to
                  delivering innovative solutions that help businesses thrive in
                  the digital age. Our approach combines technical expertise with
                  a deep understanding of business needs.
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
                    Connect Now
                  </Button>
                  <Button
                    component={Link}
                    to="/service"
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
                    Our Services
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
                  src="/images/about.png"
                  alt="About IT Solutions"
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

      {/* Features Section */}
      <Box className="py-16 md:py-24">
        <Container maxWidth="lg">
          <Box className="text-center mb-16">
            <Typography
              variant="overline"
              color="primary"
              className="tracking-widest"
              sx={{ fontWeight: 600, mb: 1, display: "block" }}
            >
              OUR ADVANTAGES
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              className="mb-4 font-bold"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              What Sets Us Apart
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              className="max-w-2xl mx-auto"
            >
              We combine technical excellence with a customer-focused approach to
              deliver exceptional IT solutions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={isDarkMode ? 4 : 1}
                  sx={{
                    height: "100%",
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
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      className="mb-4 flex justify-center items-center"
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        backgroundColor: isDarkMode
                          ? alpha(theme.palette.primary.main, 0.15)
                          : alpha(theme.palette.primary.main, 0.1),
                        color: "primary.main",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: "1.1rem" }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box
        className="py-16 md:py-24"
        sx={{
          background: isDarkMode
            ? alpha(theme.palette.background.paper, 0.3)
            : alpha(theme.palette.primary.light, 0.05),
        }}
      >
        <Container maxWidth="lg">
          <Box className="text-center mb-16">
            <Typography
              variant="overline"
              color="primary"
              className="tracking-widest"
              sx={{ fontWeight: 600, mb: 1, display: "block" }}
            >
              OUR TEAM
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              className="mb-4 font-bold"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Meet Our Experts
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              className="max-w-2xl mx-auto"
            >
              Our talented team brings together years of experience and a passion
              for innovation
            </Typography>
          </Box>

          <Grid container spacing={6} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={isDarkMode ? 4 : 1}
                  sx={{
                    height: "100%",
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
                  <Box
                    sx={{
                      height: 240,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                      sx={{ fontWeight: 500, mb: 2 }}
                    >
                      {member.role}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: "1.1rem" }}
                    >
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box className="py-16 md:py-20">
        <Container maxWidth="md">
          <Card
            elevation={isDarkMode ? 8 : 4}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              background: isDarkMode
                ? `linear-gradient(45deg, ${alpha(
                    theme.palette.primary.dark,
                    0.9
                  )}, ${alpha(theme.palette.primary.main, 0.7)})`
                : `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
            }}
          >
            <CardContent sx={{ p: { xs: 4, md: 6 }, textAlign: "center" }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ color: "#ffffff", fontWeight: 700, mb: 3 }}
              >
                Ready to Transform Your Business?
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#ffffff", mb: 4, opacity: 0.9 }}
              >
                Contact us today to discuss how our IT solutions can help your
                business grow and succeed.
              </Typography>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: "1.2rem",
                  backgroundColor: "#ffffff",
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: alpha("#ffffff", 0.9),
                  },
                  borderRadius: "50px",
                  fontWeight: 600,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                }}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage; 