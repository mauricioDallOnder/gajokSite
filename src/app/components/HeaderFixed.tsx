"use client";
import React from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "../../../public/logo2.png"; // Ajuste o caminho conforme necessário

const pages = ["Sobre", "Galeria", "Contato"];

function HeaderFixed() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        height: "120px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        backgroundColor: "#00356E",
      }}
    >
      <Toolbar
        sx={{
          width: "80%",
          maxWidth: 1280,
          margin: "0 auto",
          justifyContent: "space-between",
          padding: "18px 24px",
        }}
      >
        {/* Logotipo à esquerda */}
        <Box sx={{ minWidth: "100px", height: "100px", position: "relative" }}>
          <Image alt="Logo" src={logo} layout="intrinsic" objectFit="contain" />
        </Box>

        {/* Ícones do lado direito */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {!isMobile && (
            <>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    mx: 2.5,
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
                  ml: 2,
                  backgroundColor: "#E2001A", // Cor secundária definida na identidade visual
                  color: "#FFFFFF",
                  fontFamily: "Big Shoulders Text",
                  fontWeight: 700, // Big Shoulders Text Bold
                  fontSize: "1rem",
                }}
              >
                Inscreva-se
              </Button>
            </>
          )}

          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: isMobile ? "flex" : "none" }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Menu para dispositivos móveis */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              {page}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderFixed;
