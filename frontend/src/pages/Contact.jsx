import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { useColorMode } from "../theme/useColorMode";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Paper,
  useTheme,
  alpha,
  CircularProgress,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();
  const { isDarkMode } = useColorMode();
  const theme = useTheme();

  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user.username || "",
        email: user.email || "",
        message: "",
      });
      setUserData(false);
    }
  }, [user, userData]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${baseUrl}/api/contact/contactform`,
        contact,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Message sent successfully");
        setContact({ ...contact, message: "" });
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(
        error.response?.data?.message || "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon fontSize="large" />,
      title: "Our Location",
      details: ["123 IT Street", "Tech City, TC 12345", "United States"],
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: "Email Us",
      details: ["info@itsolutions.com", "support@itsolutions.com"],
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: "Call Us",
      details: ["+1 (123) 456-7890", "+1 (987) 654-3210"],
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
          <Box className="text-center mb-12">
            <Typography
              variant="overline"
              color="primary"
              className="tracking-widest"
              sx={{ fontWeight: 600, mb: 1, display: "block" }}
            >
              GET IN TOUCH
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
              Contact Us
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              className="mb-6 max-w-2xl mx-auto"
              sx={{ mb: 4, fontSize: "1.1rem" }}
            >
              Have questions or need assistance? We're here to help! Reach out to
              our team and we'll get back to you as soon as possible.
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {/* Contact Information Cards */}
            {contactInfo.map((info, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                    textAlign: "center",
                    p: 2,
                  }}
                >
                  <CardContent>
                    <Box
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
                        margin: "0 auto",
                        mb: 3,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h2"
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {info.title}
                    </Typography>
                    {info.details.map((detail, idx) => (
                      <Typography
                        key={idx}
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontSize: "1.1rem", mb: 1 }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box className="py-16 md:py-24">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
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
                  src="/images/support.png"
                  alt="Contact Support"
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

            <Grid item xs={12} md={6}>
              <Paper
                elevation={isDarkMode ? 4 : 1}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 3,
                  backgroundColor: isDarkMode
                    ? alpha(theme.palette.background.paper, 0.8)
                    : theme.palette.background.paper,
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 700, mb: 3 }}
                >
                  Send Us a Message
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4, fontSize: "1.1rem" }}
                >
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="username"
                        variant="outlined"
                        value={contact.username}
                        onChange={handleInput}
                        required
                        InputProps={{
                          sx: { borderRadius: 2, fontSize: "1.1rem" },
                        }}
                        InputLabelProps={{
                          sx: { fontSize: "1.1rem" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        value={contact.email}
                        onChange={handleInput}
                        required
                        InputProps={{
                          sx: { borderRadius: 2, fontSize: "1.1rem" },
                        }}
                        InputLabelProps={{
                          sx: { fontSize: "1.1rem" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        variant="outlined"
                        value={contact.message}
                        onChange={handleInput}
                        required
                        multiline
                        rows={6}
                        InputProps={{
                          sx: { borderRadius: 2, fontSize: "1.1rem" },
                        }}
                        InputLabelProps={{
                          sx: { fontSize: "1.1rem" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={loading}
                        endIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
                        sx={{
                          py: 1.5,
                          px: 4,
                          borderRadius: "50px",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          boxShadow: isDarkMode
                            ? "0 4px 20px rgba(100, 108, 255, 0.5)"
                            : "0 4px 20px rgba(100, 108, 255, 0.3)",
                        }}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box className="py-8">
        <Container maxWidth="lg">
          <Box
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              height: "450px",
              boxShadow: isDarkMode
                ? "0 4px 20px rgba(0, 0, 0, 0.5)"
                : "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Contact; 