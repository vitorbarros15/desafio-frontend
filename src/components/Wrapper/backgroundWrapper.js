import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

function BackgroundWrapper({ children }) {
  const wrapperStyles = {
    backgroundColor: "#E4E6F0",
    height: "100%"
  };

  return <Box sx={wrapperStyles}>{children}</Box>;
}

BackgroundWrapper.propTypes = { children: PropTypes.node.isRequired };

export default BackgroundWrapper;
