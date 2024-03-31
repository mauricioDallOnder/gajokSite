import React from "react";
import {
  Box,
  Typography,
  Card,
  useTheme,
  Grid,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";
import Image from "next/image";
import kidsImage from "../../../../public/kids.png";
import adultoImage from "../../../../public/adulto.png";
import funcionalImage from "../../../../public/funcional.jpeg";
import { Headline, SubHeadline } from "./styles";
import logo from '../../../../public/logoOficialSemFundo.png';
export default function SchoolTrainingModalities() {
  const theme = useTheme();

  const modalities = [
    { title: "Criança", image: kidsImage },
    { title: "Adulto", image: adultoImage },
    { title: "Funcional", image: funcionalImage },
  ];

  const cardStyle = {
    position: 'relative',
    maxWidth: 345,
    boxShadow: 3,
    m: 1,
  };

  return (
    <Box
    sx={{
      backgroundImage: `linear-gradient(rgba(0, 53, 110, 0.7), rgba(0, 53, 110, 0.7)), url(https://s01-t05.martialartswebsites.design/wp-content/uploads/2018/12/belt-ranks.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: "#ffffff",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      textAlign: "center",
      paddingBottom: theme.spacing(8), // Espaçamento no final do componente
      '&::before': {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 53, 110, 0.7)",
        zIndex: -1,
      },
    }}
  >
    
    <Box sx={{ display:"flex",justifyContent:"center",alignItems:"center", zIndex: 1, mb: 2,pt:4 }}>
      <Image src={logo} alt="Gajok" height={150} width={150} />
    </Box>
    
    <Headline variant="h3">Cultivando Campeões para a Vida!</Headline>
    <SubHeadline variant="h1">
      Transformamos determinação em vitória.
      <br />
      Embarque conosco nesta jornada e torne-se um campeão na vida e no esporte.
    </SubHeadline>
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        {modalities.map((modality, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              transition: '0.3s',
              '&:hover': {
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
              },
            }}>
              <CardMedia sx={{ position: 'relative', height: 0, paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <Image alt={modality.title} src={modality.image} layout="fill" objectFit="cover" />
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  bgcolor: 'rgba(0, 53, 110, 0.9)',
                  color: 'white',
                  padding: theme.spacing(1),
                  textAlign: 'center'
                }}>
                  <Typography variant="h5">{modality.title}</Typography>
                </Box>
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
  );
}
