import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  useTheme,
  Grid,
  CardMedia,
  Container,
  Modal,
  Button,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import kidsImage from "../../../../public/kids.png";
import adultoImage from "../../../../public/adulto.png";
import funcionalImage from "../../../../public/funcional.jpeg";
import { Headline, SubHeadline } from "./styles";
import logo from "../../../../public/logoOficialSemFundo.png";
import treinocriana from "../../../../public/aulacriancas.jpeg";
import adultotreino from "../../../../public/adultoTreino.jpeg";
import Link from "next/link";
interface ModalState {
  adulto: boolean;
  criancas: boolean;
  funcional: boolean;
}

interface CardComponentProps {
  title: string;
  image: StaticImageData;
  onClick: () => void;
}

interface ModalComponentProps {
  title: string;
  open: boolean;
  handleClose: () => void;
  image: StaticImageData;
  description: string;
}
const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto', // Ajusta automaticamente a largura
  maxWidth: '400px', // Limita a largura máxima para garantir margens
  backgroundColor: "#003B8E",
  color: "#FFFFFF",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: 'auto', // Permite rolagem se o conteúdo for muito grande
  maxHeight: '90vh', // Limita a altura máxima
};

export default function SchoolTrainingModalities() {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState<ModalState>({
    adulto: false,
    criancas: false,
    funcional: false,
  });

  const handleOpen = (modalName: keyof ModalState) => {
    setOpenModal({ ...openModal, [modalName]: true });
  };

  const handleClose = (modalName: keyof ModalState) => {
    setOpenModal({ ...openModal, [modalName]: false });
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 53, 110, 0.7), rgba(0, 53, 110, 0.7)), url(https://s01-t05.martialartswebsites.design/wp-content/uploads/2018/12/belt-ranks.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#ffffff",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        textAlign: "center",
        paddingBottom: theme.spacing(8),
        "&::before": {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          mb: 2,
          pt: 4,
        }}
      >
        <Image src={logo} alt="Gajok" height={150} width={150} />
      </Box>

      <Headline variant="h3">Cultivando Campeões para a Vida!</Headline>
      <SubHeadline variant="h1">
        Transformamos determinação em vitória.
        <br />
        Embarque conosco nesta jornada e torne-se um campeão na vida e no
        esporte.
      </SubHeadline>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          {/* Adulto */}
          <CardComponent
            title="Adulto"
            image={adultotreino}
            onClick={() => handleOpen("adulto")}
          />
          {/* Criança */}
          <CardComponent
            title="Crianças"
            image={kidsImage}
            onClick={() => handleOpen("criancas")}
          />
          {/* Funcional */}
          <CardComponent
            title="Funcional"
            image={funcionalImage}
            onClick={() => handleOpen("funcional")}
          />
        </Grid>
      </Container>

      {/* Modais */}
      <ModalComponent
        title="Adulto"
        open={openModal.adulto}
        handleClose={() => handleClose("adulto")}
        image={adultotreino}
        description={
          "O Taekwondo é uma excelente forma de se manter ativo e saudável, além de melhorar o foco e a fortaleza mental. Temos alunos de todas as idades que nos contam que notaram grandes melhorias na sua concentração e autoconfiança."
        }
      />
      <ModalComponent
        title="Crianças"
        open={openModal.criancas}
        handleClose={() => handleClose("criancas")}
        image={treinocriana}
        description={
          "O Taekwondo vai além de uma simples arte marcial; é uma jornada de crescimento físico e mental para crianças. Primeiramente, promove uma melhoria significativa na saúde física e na coordenação motora, essencial durante os anos de crescimento. Além disso, ao praticar em grupo, as crianças desenvolvem habilidades sociais e aprendem o valor do trabalho em equipe, preparando-as para desafios futuros."
        }
      />
      <ModalComponent
        title="Funcional"
        open={openModal.funcional}
        handleClose={() => handleClose("funcional")}
        image={funcionalImage}
        description={
          "O treinamento funcional melhora a força muscular e a resistência, preparando o corpo para as demandas diárias e reduzindo o risco de lesões. A natureza dinâmica desses exercícios também melhora significativamente a coordenação, agilidade e equilíbrio, fundamentais para uma vida ativa e saudável."
        }
      />
    </Box>
  );
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  image,
  onClick,
}) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          },
        }}
        onClick={onClick}
      >
        <CardMedia
          sx={{
            position: "relative",
            height: 0,
            paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
          }}
        >
          <Image alt={title} src={image} layout="fill" objectFit="cover" />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              bgcolor: "rgba(0, 53, 110, 0.9)",
              color: "white",
              padding: theme.spacing(1),
              textAlign: "center",
            }}
          >
            <Typography variant="h5">{title}</Typography>
          </Box>
        </CardMedia>
      </Card>
    </Grid>
  );
};

const ModalComponent: React.FC<ModalComponentProps> = ({
  title,
  open,
  handleClose,
  image,
  description,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModal}>
        {/* Ajuste as dimensões da imagem conforme necessário */}
        <Box sx={{ width: "100%", height: 200, position: "relative", mb: 2 }}>
          <Image alt={title} src={image} layout="fill" objectFit="cover" />
        </Box>

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
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, height: "4px", bgcolor: "#D32F2F" }} />
        </Box>

        <Typography
          sx={{
            fontSize: "1.125rem", // Aumenta o tamanho da fonte do corpo do texto
            lineHeight: 1.6, // Ajusta o espaçamento entre linhas
            mb: 2,
            textAlign: "justify",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)", // Sombra de texto para legibilidade
          }}
        >
          {description}
        </Typography>
        <Link href="/SchoolTrainingSchedulePage" passHref>
          <Button variant="contained" color="error" sx={{ mt: 2 }}>
            Consulte os horários disponíveis
          </Button>
        </Link>
      </Box>
    </Modal>
  );
};
