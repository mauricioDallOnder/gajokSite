'use client'
import React, { useState, useEffect } from 'react';
import { ImageList, ImageListItem, Box, Typography, Modal, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import HeaderFixed from '../components/HeaderFixed';
import Footer from '../components/Footer';

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<InstagramMedia[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Novo estado para controlar o carregamento
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const getColsForBreakpoints = () => isSmallScreen ? 2 : 5;

  useEffect(() => {
    async function fetchPhotos() {
      setIsLoading(true); // Inicia o indicador de carregamento
      const response = await fetch('/api');
      if (response.ok) {
        const data: InstagramMedia[] = await response.json();
        const filteredData = data.filter(item => item.media_type !== 'VIDEO');
        setPhotos(filteredData);
      } else {
        console.error('Failed to fetch data');
      }
      setIsLoading(false); // Finaliza o indicador de carregamento
    }
    fetchPhotos();
  }, []);

  const handleOpen = (imgUrl: string) => {
    setSelectedImg(imgUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <HeaderFixed />
      <Box sx={{pt: 8, pb: 6, display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "column" }}>
       {/* Styled title com linhas visíveis */}
       <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
          width: '80%', // Garante que a linha seja visível
        }}>
          <Box sx={{ flexGrow: 1, height: "4px", bgcolor: "#D32F2F" }} />
          <Typography variant="h4" component="span" sx={{
            mx: 2,
            fontFamily: "Big Shoulders Text",
            color: "white",
            fontSize: "2rem",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
          }}>
            GALERIA
          </Typography>
          <Box sx={{ flexGrow: 1, height: "4px", bgcolor: "#D32F2F" }} />
        </Box>

        {isLoading ? (
          <CircularProgress color="error" /> // Exibe o indicador de carregamento
        ) : (
          <Box sx={{ width: '100%', maxWidth: 1200, px: isSmallScreen ? 2 : 8 }}>
            <ImageList cols={getColsForBreakpoints()} gap={8}>
              {photos.map((item) => (
                <ImageListItem key={item.id} onClick={() => handleOpen(item.media_url)}>
                  <img
                    src={item.media_url}
                    alt={item.caption || ''}
                    style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        )}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={selectedImg || ''} alt="Expanded view" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Modal>
      <Footer />
    </>
  );
}
