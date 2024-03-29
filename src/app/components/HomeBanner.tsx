'use client'
import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import Image from 'next/image';

import logo from '../../../public/logoOficialSemFundo.png'; // Verifique o caminho do logo

interface HomeBannerProps {
  title: string;
  subtitle: string;
}

export const HomeBannerSection: React.FC<HomeBannerProps> = ({ title,subtitle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 53, 110, 0.7), rgba(0, 53, 110, 0.7)),
        url(https://firebasestorage.googleapis.com/v0/b/mauriciodallonder-64688.appspot.com/o/backgroundImage.jpeg?alt=media&token=b6690102-1250-4f3a-91b5-a70284279e7d)`,
        backgroundSize: { xs: 'cover', sm: '100% auto' },
        backgroundPosition: { xs: 'center', sm: 'center 25%' }, // Ajusta o foco vertical da imagem em desktops
        color: '#ffffff',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        textAlign: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 53, 110, 0.7)',
          zIndex: -1,
        }
      }}
    >
      <Box sx={{ width: 150, height: 150, position: 'relative', zIndex: 1, mb: 2 }}>
        <Image src={logo} alt="Gajok" layout="responsive" width={150} height={150} objectFit="contain" />
      </Box>
      <Typography
        variant="h3" // Tamanho maior para o título
        sx={{
          fontFamily: '"Big Shoulders Text", cursive', 
          fontWeight: 'bold',
          color: theme.palette.primary.contrastText, // Cor branca ou outra cor do tema
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Sombra no texto para melhor legibilidade
          mb: 1, // Margem abaixo do título
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1" // Para um texto menor
          sx={{
            fontFamily: "Signika Negative Bold",
            fontWeight: 700, // Big Shoulders Text Bold
            fontSize: "2rem",
            color: "#FFC77D", // Cor secundária ou outra cor do tema
            mb: 4, // Margem abaixo do subtítulo
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};
