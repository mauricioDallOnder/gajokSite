"use client";
import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";

import Link from "next/link";
import {
  ChampionSectionWrapper,
  Headline,
  SubHeadline,
  ChampionButton,
} from "./styles";
interface SchoolTrainingSchedule {
  title: string;
  subtitle: string;
}
export default function SchoolTrainingSchedule() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 53, 110, 0.7), rgba(0, 53, 110, 0.7)), url(https://s01-t05.martialartswebsites.design/wp-content/uploads/2018/12/karate-student.jpg)`,
        backgroundSize: { xs: "cover", sm: "100% auto" },
        backgroundPosition: { xs: "center", sm: "center 25%" }, // Ajusta o foco vertical da imagem em desktops
        color: "#ffffff",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: "relative",
        overflow: "hidden",
        paddingTop: theme.spacing(9.375),
        paddingBottom: theme.spacing(9.375),
        paddingRight: theme.spacing(2.5),
        paddingLeft: theme.spacing(2.5),
        margin: 'auto',
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
      <Link
        href="https://s01-t05.martialartswebsites.design/programs/"
        passHref
      >
        <ChampionButton>Saiba mais..</ChampionButton>
      </Link>
    </Box>
  );
}
