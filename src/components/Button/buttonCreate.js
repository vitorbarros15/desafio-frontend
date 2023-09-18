import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function ButtonCreate() {
  const button = {
    width: "118px",
    height: "33px",
    padding: "5px 13px 4px 13px",
    borderRadius: "5px",
    gap: "10px",
    background: "#FF4F2A"
  };

  const icon = {
    fontFamily: "Calibri, sans-serif",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "24.41px",
    textAlign: "center",
    color: "#F5F5F5"
  };

  const text = {
    width: "72px",
    height: "20px",
    fontFamily: "Calibri, sans-serif",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "19.53px",
    letterSpacing: "0.03em",
    textAlign: "center",
    color: "white"
  };

  return (
    <Box display="flex" alignItems="center">
      <Button style={button}>
        <Typography style={icon}>
          +
        </Typography>
        <Typography style={text}>
          NOVA ATA
        </Typography>
      </Button>
    </Box>
  );
}
