'use client';
import React from "react";
import { Box, Grid, Typography, Paper, IconButton, Link, useTheme, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

interface SchoolInfoSectionProps {
  mission: string;
  vision: string;
  values: string[];
  address: string;
  phone: string;
  email: string;
  googleMapsUrl: string;
}

const SchoolInfoSection: React.FC<SchoolInfoSectionProps> = ({
  mission,
  vision,
  values,
  address,
  phone,
  email,
  googleMapsUrl,
}) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: "hidden",
        px: 3,
        py: 5,
        backgroundColor: "#003B8E",
        color: "#FFFFFF",
        textAlign: "left",
      }}
    >
      {/* Styled title */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "red" }} />
        <Typography
          variant="h4"
          component="span"
          sx={{
            mx: 2,
            fontFamily: "Big Shoulders Text",
            color: "white",
            fontSize: "2rem",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          Nossa Escola
        </Typography>
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "red" }} />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {/* Mission */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Big Shoulders Text",
              color: "#FFD700",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
              mb: 2,
            }}
          >
            Missão
          </Typography>
          <Typography
            sx={{
              fontSize: "1.125rem",
              lineHeight: 1.6,
              mb: 2,
              textAlign: "justify",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
            }}
          >
            {mission}
          </Typography>

          {/* Vision */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Big Shoulders Text",
              color: "#FFD700",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
              mb: 2,
            }}
          >
            Visão
          </Typography>
          <Typography
            sx={{
              fontSize: "1.125rem",
              lineHeight: 1.6,
              mb: 2,
              textAlign: "justify",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
            }}
          >
            {vision}
          </Typography>

          {/* Values */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Big Shoulders Text",
              color: "#FFD700",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
              mb: 2,
            }}
          >
            Valores
          </Typography>
          <Typography
            component="ul"
            sx={{
              fontSize: "1.125rem",
              lineHeight: 1.6,
              mb: 2,
              textAlign: "justify",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
              pl: 2,
            }}
          >
            {values.map((value, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>{value}</li>
            ))}
          </Typography>

          {/* Contacts */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Big Shoulders Text",
              color: "#FFD700",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
              mb: 2,
            }}
          >
            Contatos
          </Typography>
          
          <Box
            sx={{
              display: "flex",
              flexDirection: isXsScreen ? "column" : "row",
              alignItems: "center",
              justifyContent: "center",
              color:"#FFC77D"
            }}
          >
            {/* Address */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                py: 2,
                px: isXsScreen ? 0 : 2,
                width: isXsScreen ? "100%" : "33.33%",
              }}
            >
               
              <LocationOnIcon sx={{ mb: 1 }} />
              <Typography variant="body1" textAlign="center">
                {address}
              </Typography>
            </Box>

            {/* Phone */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                py: 2,
                px: isXsScreen ? 0 : 2,
                width: isXsScreen ? "100%" : "33.33%",
              }}
            >
              
              <PhoneIcon sx={{ mb: 1 }} />
              <Typography variant="body1" textAlign="center">
                {phone}
              </Typography>
            </Box>

            {/* Email */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                py: 2,
                px: isXsScreen ? 0 : 2,
                width: isXsScreen ? "100%" : "33.33%",
              }}
            >
             
              <EmailIcon sx={{ mb: 1 }} />
              <Typography variant="body1" sx={{ textAlign: "center", wordBreak: "break-word" }}>
                {email}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Map */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{ height: "100%", overflow: "hidden", borderRadius: "8px" }}
          >
            <iframe
              width="100%"
              style={{ height: "100%", border: 0 }}
              loading="lazy"
              src={googleMapsUrl}
              title="Localização da Escola"
              allowFullScreen
            ></iframe>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SchoolInfoSection;
