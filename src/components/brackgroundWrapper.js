import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import LogoIndrustriall from "../assets/imagens/Logo.png";

function BackgroundWrapper() {
  const wrapperStyles = {
    backgroundColor: "#E4E6F0",
    height: "100vh"
  };

  const boxLogo = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 69,
    bgcolor: "#003A64",
    boxShadow: "0px 4px 15px 1px rgba(0, 0, 0, 10%)"
  };

  const boxAtasButton = {
    width: "881px",
    height: "65px",
    margin: "31px 0px 450px 0px",
    left: "308px"
  };

  const boxAtas = {
    width: "313px",
    height: "65px",
    gap: "12px"
  };

  const textAtasH1 = {
    fontFamily: "Calibri",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "29px",
    letterSpacing: "0.01em",
    textAlign: "left"
  };

  const textAtasH2 = {
    fontFamily: "Calibri",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0.01em",
    textAlign: "left"
  };

  const buttonAtas = {
    width: "118px",
    height: "33px",
    padding: "5px, 13px, 4px, 13px",
    borderRadius: "5px",
    gap: "10px",
    background: "#FF4F2A"
  };

  const buttonIcon = {
    fontFamily: "Calibri",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "center",
    color: "white"
  };

  const ButtonText = {
    width: "72px",
    height: "20px",
    fontFamily: "Calibri",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "20px",
    letterSpacing: "0.03em",
    textAlign: "center",
    color: "white"
  };

  const backgroundList = {
    width: "946px",
    height: "1.015px",
    top: "128px",
    left: "277px",
    padding: "29px, 32px, 29px, 32px",
    borderRadius: "5px",
    gap: "35px",
    background: "white"
  };

  return (
    <Box sx={wrapperStyles}>
      <Box sx={boxLogo}>
        <img
          src={LogoIndrustriall}
          alt="IndrustriALL logo"
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Box display="flex" justifyContent="space-between" sx={boxAtasButton}>
          <Box display="flex" flexDirection="column" sx={boxAtas}>
            <Typography sx={textAtasH1}>
              Atas de Reunião
            </Typography>
            <Typography sx={textAtasH2}>
              Estas são as atas das últimas reuniões
            </Typography>
          </Box>
          <Button
            display="flex"
            sx={buttonAtas}
          >
            <AddIcon sx={buttonIcon} />
            <Typography sx={ButtonText}>NOVA ATA</Typography>
          </Button>
        </Box>
      </Box>
      <Paper elevation={3} sx={backgroundList} />
    </Box>
  );
}

export default BackgroundWrapper;
