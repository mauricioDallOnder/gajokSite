import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Box,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import logo from '../../../public/logo2.png'; // Ajuste o caminho conforme necessário
import Link from 'next/link';

const pages = [
  'Modalidades de Treino',
  'Horários das Aulas',
  'Guia de Poomses',
  'Galeria',
  'Sobre Nós & Contato'
];

function HeaderFixed() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    setAnchorElNav(null);
    if (page === 'Galeria') {
      window.location.href = '/GalleryPage';
    } else if(page === 'Horários das Aulas'){
      window.location.href = '/SchoolTrainingSchedulePage';
    }
    
    else {
      // Substitua espaços e '&' por '-' e converta para minúsculas
      const sectionId = page.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
      const sectionElement = document.getElementById(sectionId + '-section');
  
      // Garanta que o elemento existe antes de tentar rolar para ele
      if(sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.error('Element not found:', sectionId + '-section');
      }
    }
  };
  
  

  return (
    <AppBar position="static" sx={{ backgroundColor: '#00356E' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: '120px' }}>
          {/* Logotipo à esquerda */}
          <Link
        href="/"
        passHref
      >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image alt="Logo" src={logo} width={400} height={120}/>
          </Box>
</Link>
          {/* Ícones do lado direito */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontFamily: 'Signika Negative',
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
                backgroundColor: '#E2001A',
                color: '#FFFFFF',
                fontFamily: 'Big Shoulders Text',
                fontWeight: 700,
                fontSize: '1rem',
              }}
            >
              Inscreva-se
            </Button>
          </Box>

          {/* Ícone de Menu para dispositivos móveis */}
          <IconButton
            size="large"
            aria-label="menu do aplicativo"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={() => setAnchorElNav(null)}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
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

export default HeaderFixed;
