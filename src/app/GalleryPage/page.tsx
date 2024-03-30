'use client';
import React, { useState, useEffect } from 'react';
import { ImageList, ImageListItem, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import HeaderFixed from '../components/HeaderFixed';
import Footer from '../components/Footer';
import AuthButton from '../components/AuthButton';

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<InstagramMedia[]>([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch('/api');
      const data = await response.json();
      if (response.ok) {
        setPhotos(data);
      } else {
        console.error(data.error);
      }
    }
    fetchPhotos();
  }, []);

  const getColsForBreakpoints = () => {
    if (isSmallScreen) {
      return 2; // No mobile, mostraremos 2 imagens por linha
    }
    // Para telas maiores, podemos mostrar mais imagens por linha
    return 5; // Para desktop
  };

  return (
    <>
      <HeaderFixed />
      <Box sx={{ bgcolor: '#00356E', pt: 8, pb: 6, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '100%', maxWidth: 1200, px: isSmallScreen ? 2 : 8 }}> {/* Padding horizontal ajustado com base no tamanho da tela */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}> GALERIA</Typography>
          
          </Box>
          <ImageList variant="masonry" cols={getColsForBreakpoints()} gap={isSmallScreen ? 2 : 4}> {/* Ajusta o espaçamento com base no tamanho da tela */}
            {photos.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  src={item.media_url}
                  srcSet={item.media_url}
                  alt={item.caption}
                  loading="lazy"
                 
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
      <Footer/>
    </>
  );
}



/*
 <img
                src={item.media_url}
               
                alt={item.caption}
                loading="lazy"
                style={{ width: '256px', height: '256px', borderRadius: '4px' }}
              />
*/