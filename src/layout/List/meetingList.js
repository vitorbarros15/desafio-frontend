import React from "react";
import { Box, Paper } from "@mui/material";
import BackgroundWrapper from "../../components/Wrapper/backgroundWrapper";
import TextAtas from "../../components/Title/text";
import ButtonCreate from "../../components/Button/buttonCreate";
import LogoIndrustriall from "../../assets/imagens/Logo.png";

export default function MeetingList() {
  const boxLogo = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "69px",
    bgcolor: "#003A64",
    boxShadow: "0px 4px 15px 1px rgba(0, 0, 0, 10%)"
  };

  const boxAtasButton = {
    width: "881px",
    height: "65px",
    margin: "31px 0px 450px 0px",
    left: "308px"
  };

  const backgroundList = {
    flexWrap: "wrap",
    "& > :not(style)": {
      width: "946px",
      height: "1015px",
      padding: "29px 32px 29px 32px",
      borderRadius: "5px",
      margin: "32px 0 35px 0"
    }
  };

  return (
    <BackgroundWrapper>
      <Box sx={boxLogo}>
        <img src={LogoIndrustriall} alt="IndrustriALL logo" />
      </Box>
      <Box display="flex" justifyContent="center" height="96px">
        <Box display="flex" justifyContent="space-between" sx={boxAtasButton}>
          <TextAtas
            title="Atas de Reunião"
            description="Estas são as atas das últimas reuniões"
          />
          <ButtonCreate />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box sx={backgroundList}>
          <Paper elevation={3} />
        </Box>
      </Box>
    </BackgroundWrapper>
  );
}
