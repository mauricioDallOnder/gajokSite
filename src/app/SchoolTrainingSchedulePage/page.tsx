"use client";
import React from "react";
import { Box, Typography, Paper, styled, Grid } from "@mui/material";
import Footer from "../components/Footer";
import HeaderFixed from "../components/HeaderFixed";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

// Definindo o tipo para os dados de cada linha da tabela
type RowData = {
  day: string;
  hours: string[];
};

// Definindo o tipo das props para o componente ScheduleTable
type ScheduleTableProps = {
  title: string;
  subtitile: string;
  rows: RowData[];
};

// Função para criar dados para as linhas da tabela
const createData = (day: string, hours: string[]): RowData => {
  return { day, hours };
};

// Dados para as tabelas

const rowsAdult: RowData[] = [
  createData("Segunda", ["18:30 a 19:30", "19:30 a 20:30", "20:30 a 21:30"]),
  createData("Quarta", ["18:30 a 19:30", "19:30 a 20:30", "20:30 a 21:30"]),
  createData("Sexta", ["18:30 a 19:30", "19:30 a 20:30", "20:30 a 21:30"]),
];

const rowsKids: RowData[] = [
  createData("Quarta", ["18:30 a 19:30", "19:30 a 20:30", "20:30 a 21:30"]),
  createData("Quinta", ["18:30 a 19:30", "19:30 a 20:30", "20:30 a 21:30"]),
];

const rowsFunctional: RowData[] = [
  createData("Segunda", ["18:30 a 19:30", "19:30 a 20:30", "20:30 a 21:30"]),
  createData("Quarta", ["18:30 a 19:30", "19:30 a 20:30", "20:30 a 21:30"]),
  createData("Sexta", ["18:30 a 19:30", "19:30 a 20:30", "20:30 a 21:30"]),
];

// Estilos personalizados para o Paper que envolve cada seção de horário
const SchedulePaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#00356E", // Cor de fundo
  color: "#FFC77D", // Cor do texto
  margin: theme.spacing(1),
  padding: theme.spacing(2),
  marginBottom: "20px",
}));

// Estilos para o título de cada seção (dias)
const DayBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#003B8E", // Cor de fundo dos dias
  padding: theme.spacing(1),
  color: "white", // Cor do texto dos dias
  border: `1px solid #FFC77D`, // Linha divisória
  height: "95px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "24px",
}));

// Estilos para cada célula de horário
const HourBox = styled(Box)(({ theme }) => ({
  border: `1px solid #FFC77D`, // Linha divisória
  padding: theme.spacing(1),
  color: "white", // Cor do texto dos horários
}));

// Estilos para cada célula de horário
const TitleBox = styled(Box)(({ theme }) => ({
  border: `1px solid #FFC77D`, // Linha divisória
  padding: theme.spacing(1),
  color: "#FFC77D",
  fontSize: "1.5rem", // Aumenta o tamanho da fonte
}));

const ScheduleTable: React.FC<ScheduleTableProps> = ({
  title,
  rows,
  subtitile,
}) => (
  <SchedulePaper>
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "12px",justifyContent:"flex-start" }}>
      <Typography
        variant="h6"
        sx={{
          mx: 2,
          fontFamily: "Signika Negative",
          color: "white",
          fontSize: "2rem", // Aumenta o tamanho da fonte
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)", // Sombra de texto para legibilidade
          fontWeight: "700",
        }}
      >
        {title}
      </Typography>
      <TitleBox>{subtitile}</TitleBox>
      <SportsMartialArtsIcon sx={{ fontSize: 40,marginLeft:"12px" }}/>
    </Box>
    {/* box do cabeçalho do dia e hoarario */}
    <Box sx={{ display: "flex", alignItems: "center",justifyContent:"space-around",marginBottom:"4px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CalendarTodayIcon />
        <Typography
          variant="h6"
          sx={{
            mx: 2,
            fontFamily: "Signika Negative",
            color: "white",
            fontSize: "1.5rem", // Aumenta o tamanho da fonte
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)", // Sombra de texto para legibilidade
          }}
        >
          Dia
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <QueryBuilderIcon />
        <Typography
          variant="h6"
          sx={{
            mx: 2,
            fontFamily: "Signika Negative",
            color: "white",
            fontSize: "1.5rem", // Aumenta o tamanho da fonte
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)", // Sombra de texto para legibilidade
          }}
        >
         Horário
        </Typography>
      </Box>

    </Box>
    {/* -------------------------------------------- */}
    <Grid container spacing={2}>
      {rows.map((row, index) => (
        <>
          <Grid item xs={6} key={index}>
            <DayBox>{row.day}</DayBox>
          </Grid>
          <Grid item xs={6} key={index}>
            {row.hours.map((hour, hourIndex) => (
              <HourBox key={hourIndex}>{hour}</HourBox>
            ))}
          </Grid>
        </>
      ))}
    </Grid>
  </SchedulePaper>
);
export default function SchoolTrainingSchedule() {
  return (
    <>
      <HeaderFixed />
      <Box
        sx={{
          
          pt: 8,
          pb: 6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          
        }}
      >
        {/* Styled title com linhas visíveis */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
            width: "80%", // Garante que a linha seja visível
          }}
        >
          <Box sx={{ flexGrow: 1, height: "4px", bgcolor: "#D32F2F" }} />{" "}
          {/* Altura aumentada e cor ajustada */}
          <Typography
            variant="h4"
            component="span"
            sx={{
              mx: 2,
              fontFamily: "Big Shoulders Text",
              color: "white",
              fontSize: "2rem",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
            }}
          >
            Horarios de Treinos
          </Typography>
          <Box sx={{ flexGrow: 1, height: "4px", bgcolor: "#D32F2F" }} />
        </Box>
        {/* box da tabela de horarios */}
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <ScheduleTable
            title="Taekwondo"
            subtitile="Adulto"
            rows={rowsAdult}
          />
          <ScheduleTable title="Taekwondo" subtitile="Kids" rows={rowsKids} />
          <ScheduleTable
            title="Treino"
            subtitile="Funcional"
            rows={rowsFunctional}
          />
        </Box>
      </Box>

      <Footer />
    </>
  );
}
