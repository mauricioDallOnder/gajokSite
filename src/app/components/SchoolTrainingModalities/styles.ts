
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';


export const ChampionSectionWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 53, 110, 0.7), rgba(0, 53, 110, 0.7)), url(https://s01-t05.martialartswebsites.design/wp-content/uploads/2018/12/karate-student.jpg)`,
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  paddingTop: theme.spacing(9.375),
  paddingBottom: theme.spacing(9.375),
  paddingRight: theme.spacing(2.5),
  paddingLeft: theme.spacing(2.5),
  margin: 'auto',
}));

export const Headline = styled(Typography)({
  color: '#ffffff',
  width: '100%',
  textAlign: 'center',
  lineHeight: 2,
  fontFamily: '"Big Shoulders Text", cursive', 
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
});

export const SubHeadline = styled(Typography)(({ theme }) => ({
  fontSize: '24px', // Tamanho maior para mais destaque
  color: theme.palette.common.white, // Utiliza a cor branca do tema para consistência
  width: '100%',
  textAlign: 'center',
  fontWeight: 600, // Mais peso para o texto
  lineHeight: 1.5, // Um pouco mais de espaço vertical entre as linhas
  margin: theme.spacing(2, 0), // Usa o espaçamento do tema para consistência
  textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)', // Sombra de texto mais escura para aumentar o contraste
  letterSpacing: '0.5px', // Espaçamento entre letras para melhorar a legibilidade
  [theme.breakpoints.down('sm')]: { // Estilos responsivos para telas menores
    fontSize: '18px',
    lineHeight: 1.3,
  },
}));







