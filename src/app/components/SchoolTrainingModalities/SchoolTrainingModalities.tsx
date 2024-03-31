import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  Grid,
  Paper,
  Container,
  CardActions,
  CardContent,
} from "@mui/material";
import MedalIcon from "@mui/icons-material/EmojiEvents"; // Certifique-se de que MedalIcon está corretamente importado
import Link from "next/link";
import { Headline, SubHeadline } from "./styles";
import Image from "next/image";
import kids from "../../../../public/kids.png";
import adulto from "../../../../public/adulto.png";
import funcional from "../../../../public/funcional.jpeg";
export default function SchoolTrainingModalities() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 53, 110, 0.7), rgba(0, 53, 110, 0.7)), url(https://s01-t05.martialartswebsites.design/wp-content/uploads/2018/12/belt-ranks.jpg)`,
        backgroundSize: { xs: "cover", sm: "100% auto" },
        backgroundPosition: { xs: "center", sm: "center 25%" }, // Ajusta o foco vertical da imagem em desktops
        color: "#ffffff",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        textAlign: "center",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          display: "block",
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
      <Headline variant="h3">Cultivando Campeões para a Vida!</Headline>
      <SubHeadline variant="h1">
        Transformamos determinação em vitória.
        <br />
        Embarque conosco nesta jornada e torne-se um campeão na vida e no
        esporte.
      </SubHeadline>
      <Container>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 0 }}
          sx={{ width: "50%" }}
        >
          <Grid item xs={6}>
            <CardContent>
              <Image alt="" src={kids} width={474} height={239} />
            </CardContent>
          </Grid>
          <Grid item xs={6}>
            <CardContent>
              <Image alt="" src={adulto} width={474} height={239} />
            </CardContent>
          </Grid>
          <Grid item xs={12}>
            <CardContent>
              <Image alt="" src={funcional} width={474} height={239} />
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

//backgroundImage: `linear-gradient(rgba(0, 53, 110, 0.7), rgba(0, 53, 110, 0.7)), url(https://s01-t05.martialartswebsites.design/wp-content/uploads/2018/12/karate-student.jpg)`,
