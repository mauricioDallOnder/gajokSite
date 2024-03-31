// SchoolInfoSection.tsx
"use client";
import React from "react";
import { Box, Grid, Typography, Paper, IconButton, Link } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
interface SchoolInfoSectionProps {
  description: string;
  address: string;
  phone: string;
  email: string;
  googleMapsUrl: string;
}

const HomeInfoSection: React.FC<SchoolInfoSectionProps> = ({
  description,
  address,
  phone,
  email,
  googleMapsUrl,
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: "hidden",
        px: 3,
        py: 5,
        backgroundColor: "#003B8E",
        color: "#FFFFFF",
        textAlign: "left", // Alinhamento do texto para a esquerda
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
            fontSize: "2rem", // Aumenta o tamanho da fonte
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)", // Sombra de texto para legibilidade
          }}
        >
          Nossa Escola
        </Typography>
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "red" }} />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Big Shoulders Text",
              color: "#FFD700",
              fontSize: "1.5rem", // Aumenta o tamanho da fonte do subtítulo
              fontWeight: "bold", // Torna o subtítulo em negrito
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)", // Sombra de texto para legibilidade
              mb: 2,
            }}
          >
            Quem Somos
          </Typography>
          <Typography
            sx={{
              fontSize: "1.125rem", // Aumenta o tamanho da fonte do corpo do texto
              lineHeight: 1.6, // Ajusta o espaçamento entre linhas
              mb: 2,
              textAlign: "justify",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)", // Sombra de texto para legibilidade
            }}
          >
            {description}
          </Typography>

          {/* Estilização contato */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Big Shoulders Text",
              color: "#FFD700",
              fontSize: "1.5rem", // Aumenta o tamanho da fonte do subtítulo
              fontWeight: "bold", // Torna o subtítulo em negrito
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)", // Sombra de texto para legibilidade
              mb: 2,
            }}
          >
            Contatos
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                my: 2,
                display: "flex",
                width: "100%",
                flexDirection: "row",
                alignItems: "stretch",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  py: 2,
                  width: "33.33%",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontFamily: "Big Shoulders Text",
                    color: "#FFD700",
                    fontSize: "1.5rem", // Aumenta o tamanho da fonte do subtítulo
                    fontWeight: "bold", // Torna o subtítulo em negrito
                    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)", // Sombra de texto para legibilidade
                    mb: 2,
                  }}
                >
                  Endereço
                </Typography>
                <Box
                  sx={{ width: "80%", height: "4px", bgcolor: "red", mb: 2 }}
                />
                <LocationOnIcon sx={{ mb: 1 }} />
                <Typography variant="body1" textAlign="center">
                  {address}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  py: 2,
                  width: "33.33%",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontFamily: "Big Shoulders Text",
                    color: "#FFD700",
                    fontSize: "1.5rem", // Aumenta o tamanho da fonte do subtítulo
                    fontWeight: "bold", // Torna o subtítulo em negrito
                    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)", // Sombra de texto para legibilidade
                    mb: 2,
                  }}
                >
                  Telefone
                </Typography>
                <Box
                  sx={{ width: "80%", height: "4px", bgcolor: "red", mb: 2 }}
                />
                <PhoneIcon sx={{ mb: 1 }} />
                <Typography variant="body1" textAlign="center">
                  {phone}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  py: 2,
                  width: "33.33%",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontFamily: "Big Shoulders Text",
                    color: "#FFD700",
                    fontSize: "1.5rem", // Aumenta o tamanho da fonte do subtítulo
                    fontWeight: "bold", // Torna o subtítulo em negrito
                    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)", // Sombra de texto para legibilidade
                    mb: 2,
                  }}
                >
                  Email
                </Typography>
                <Box
                  sx={{ width: "80%", height: "4px", bgcolor: "red", mb: 2 }}
                />
                <EmailIcon sx={{ mb: 1 }} />
                <Typography variant="body1" textAlign="center">
                  {email}
                </Typography>
              </Box>
            </Box>
          </Box>
 {/* Estilização das redes sociais */}

          
        </Grid>
        {/* Estilização do mapa */}
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

export default HomeInfoSection;
