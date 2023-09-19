import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import LogoIndrustriall from "../../assets/imagens/Logo.png";

function BackgroundWrapper({ children }) {
  const wrapperStyles = {
    backgroundColor: "#E4E6F0",
    height: "100%"
  };

  const boxLogo = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "69px",
    bgcolor: "#003A64",
    boxShadow: "0px 4px 15px 1px rgba(0, 0, 0, 10%)"
  };

  return (
    <Box sx={wrapperStyles}>
      <Box sx={boxLogo}>
        <img src={LogoIndrustriall} alt="IndrustriALL logo" />
      </Box>
      {children}
    </Box>
  );
}

BackgroundWrapper.propTypes = { children: PropTypes.node.isRequired };

export default BackgroundWrapper;
