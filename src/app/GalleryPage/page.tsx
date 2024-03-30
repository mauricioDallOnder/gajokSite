'use client';
import React, { useState, useEffect } from 'react';
import {
  ImageList,
  ImageListItem,
  Box,
  Typography,
  Modal,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import HeaderFixed from '../components/HeaderFixed';
import Footer from '../components/Footer';

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  is_video?: boolean;
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<InstagramMedia[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
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

  const handleOpenModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

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
        <Box sx={{ width: '100%', maxWidth: 1200, px: isSmallScreen ? 2 : 8 }}>
          <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center', mb: 4 }}>GALERIA</Typography>
          <ImageList variant="masonry" cols={getColsForBreakpoints()} gap={isSmallScreen ? 2 : 4}>
            {photos.map((item) => (
              <ImageListItem key={item.id}>
                {item.is_video ? (
                  <IconButton onClick={() => handleOpenModal(item.media_url)}>
                    <PlayCircleOutlineIcon sx={{ fontSize: 60, color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                    <img
                      src={item.media_url}
                      alt={item.caption}
                      loading="lazy"
                      style={{ filter: 'brightness(50%)', borderRadius: '4px', width: '100%', height: 'auto' }}
                    />
                  </IconButton>
                ) : (
                  <img
                    src={`${item.media_url}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.media_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.caption}
                    loading="lazy"
                    style={{ borderRadius: '4px', width: '100%', height: 'auto' }}
                  />
                )}
                <Typography variant="caption" sx={{ color: 'white' }}>{item.caption}</Typography>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ outline: 'none' }}>
          <video controls autoPlay style={{ maxHeight: '90vh', maxWidth: '90vw' }}>
            <source src={selectedVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Modal>
      <Footer />
    </>
  );
}
