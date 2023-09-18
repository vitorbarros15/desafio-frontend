import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function TextAtas({ title, description }) {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  };

  const titleStyle = {
    fontFamily: "Calibri, sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "29px",
    letterSpacing: "0.01em",
    textAlign: "left",
    color: "#003A64"
  };

  const descriptionStyle = {
    fontFamily: "Calibri, sans-serif",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0.01em",
    textAlign: "left"
  };

  return (
    <Box style={containerStyle}>
      <Typography style={titleStyle}>{title}</Typography>
      <Typography style={descriptionStyle}>{description}</Typography>
    </Box>
  );
}

TextAtas.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default TextAtas;
