'use client'
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem, useMediaQuery, useTheme, Box, Container, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/logo2.png';

const pages = [
  'Modalidades de Treino',
  'Horários das Aulas',
  'Galeria',
  'Sobre Nós & Contato',
];

export default function HeaderFixed() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleCloseNavMenu = (page: string) => {
    setAnchorElNav(null);

    // Para redirecionamentos
    if (page === 'Galeria') {
      window.location.href = '/GalleryPage';
    } else if (page === 'Horários das Aulas') {
      window.location.href = '/SchoolTrainingSchedulePage';
    } else {
      // Para rolar para seções na página home
      const sectionId = page.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
      if (window.location.pathname !== '/') {
        // Se não estiver na página inicial, redirecione para a página inicial e depois rola para a seção
        window.location.href = `/#${sectionId}-section`;
      } else {
        // Se já estiver na página inicial, apenas rola para a seção
        const sectionElement = document.getElementById(`${sectionId}-section`);
        sectionElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };


  return (
    <AppBar position="static" sx={{ backgroundColor: "#00356E" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", height: "120px" }}
        >
          <Link href="/" passHref>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <Image
                alt="Logo"
                src={logo}
                width={isMobile ? 300 : 400}
                height={120}
              />
            </Box>
          </Link>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Signika Negative",
                  fontWeight: 600,
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="contained"
              color="error"
              sx={{
                backgroundColor: "#E2001A",
                color: "#FFFFFF",
                fontFamily: "Big Shoulders Text",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              Inscreva-se
            </Button>
          </Box>
          <IconButton
            size="large"
            aria-label="menu do aplicativo"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() =>
              setAnchorElNav((prev) => (prev ? null : anchorElNav))
            }
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElNav)}
            onClose={() => setAnchorElNav(null)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                {page}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


