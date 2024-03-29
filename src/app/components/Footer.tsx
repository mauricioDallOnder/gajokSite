import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import Image from 'next/image';
import logo from '../../../public/logoOficialSemFundo.png'; // Ajuste o caminho conforme necessário

const socialLinks = [
  { icon: <Facebook />, url: 'https://www.facebook.com/escoladetaekwondogajok/' },
  { icon: <Instagram />, url: 'https://www.instagram.com/ctgajok?igsh=aHgzeTU3YXNncWpz' },
  { icon: <Twitter />, url: 'https://twitter.com/ctgajok' },
  { icon: <YouTube />, url: 'https://www.youtube.com/channel/ctgajok' },
];

export const Footer = () => {
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: '#003B8E',
      color: '#FFC77D',
      py: 2,
      boxShadow:  "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ my: 2, display: 'flex', alignItems: 'center' }}>
          <Image src={logo} alt="Gajok Logo" height={50} width={50} />
          <Typography variant="h5" color="#FFFFFF" gutterBottom sx={{ ml: 2 }}>
            Gajok Centro de Treinamento
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          {socialLinks.map(({ icon, url }, index) => (
            <IconButton key={index} color="inherit" component={Link} href={url} target="_blank" rel="noopener noreferrer" sx={{ mx: 1 }}>
              {icon}
            </IconButton>
          ))}
        </Box>
        <Typography variant="subtitle1" color="#D4D2D0" align="center">
          {`© ${new Date().getFullYear()} Desenvolvido por Mauricio Dall Onder. Todos os direitos reservados.`}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
