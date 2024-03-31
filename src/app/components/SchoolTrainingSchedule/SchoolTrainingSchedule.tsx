import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import MedalIcon from "@mui/icons-material/EmojiEvents"; // Certifique-se de que MedalIcon está corretamente importado
import Link from "next/link";
import { Headline, SubHeadline } from "./styles";

export default function SchoolTrainingSchedule() {
  const theme = useTheme();

  return (
    <Box
    sx={{
      backgroundImage: `linear-gradient(rgba(0, 53, 110, 0.7), rgba(0, 53, 110, 0.7)), url(https://s01-t05.martialartswebsites.design/wp-content/uploads/2018/12/karate-student.jpg)`,
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
     <Headline variant="h3">Cultivando Campeões para a Vida!</Headline>
      <SubHeadline variant="h1">
        Transformamos determinação em vitória.
        <br />
        Embarque conosco nesta jornada e torne-se um campeão na vida e no
        esporte.
      </SubHeadline>
      <Link
        href="https://s01-t05.martialartswebsites.design/programs/"
        passHref
      >
        <Button variant="contained" sx={{
          fontSize: '23px', // Tamanho da fonte
          letterSpacing: '0.1rem', // Espaçamento entre letras
          color: 'white', // Cor do texto
          backgroundColor: '#E2001A', // Fundo azul escuro
          fontWeight: 700, // Negrito
          textTransform: 'none', // Mantém a caixa de texto como está
          '&:hover': {
            backgroundColor: '#E2001A', // Fundo azul um pouco mais claro
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra leve no hover
          },
        }}>Conheça nosso treinamento</Button>
      </Link>
    </Box>
  );
}


//backgroundImage: `linear-gradient(rgba(0, 53, 110, 0.7), rgba(0, 53, 110, 0.7)), url(https://s01-t05.martialartswebsites.design/wp-content/uploads/2018/12/karate-student.jpg)`,