import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MenuItem, Card, Box, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import TextAtas from "../../components/Title/text";
import BackgroundWrapper from "../../components/Wrapper/backgroundWrapper";
import "./styles.css";

function FormCreate() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const card = {
    display: "flex",
    justifyContent: "center",
    width: "946px",
    height: "807px",
    margin: "32px 0px 41px 0",
    left: "277px",
    borderRadius: "5px"
  };
  // async function getMeetingType() {
  //   const response = await axios.get("https://desafio-iall.azurewebsites.net/api/TiposReuniao");
  // }

  const currencies = [
    {
      value: "1",
      label: "Acompanhamento de OKRs (Objectives and Key Results)"
    },
    {
      value: "2",
      label: "Daily Scrum"
    },
    {
      value: "3",
      label: "Resumida"
    },
    {
      value: "4",
      label: "Sprint Retrospective"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com os dados do formulário, como enviar para um servidor.
  };

  return (
    <BackgroundWrapper>
      <Box display="flex" justifyContent="center" mt="31px">
        <TextAtas
          title="Nova Ata de Reunião"
          description="Os campos obrigatórios estão marcados com um asterisco (*)"
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Card sx={card} className="card" onSubmit={handleSubmit}>
          <Box className="container-first">
            <Box width="100%">
              <Typography className="title-identification">
                Identificação
              </Typography>
            </Box>
            <Box width="100%" className="container-inputs">
              <Box width="100%">
                <TextField
                  className="inputs-text-field"
                  required
                  id="outlined-required"
                  label="Título"
                  size="small"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Box>
              <Box width="100%">
                <TextField
                  className="inputs-text-field"
                  id="outlined-required"
                  label="Local *"
                  size="small"
                />
              </Box>
              <Box className="container-date" width="100%" display="flex" justifyContent="space-between">
                <Box className="inputs-date">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateTimePicker"]}>
                      <DateTimePicker
                        label="Data e Horário de Início"
                        slotProps={{ textField: { size: "small" } }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>
                <Box className="inputs-date">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateTimePicker"]}>
                      <DateTimePicker
                        label="Data e Horário de Fim"
                        slotProps={{ textField: { size: "small" } }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>
              </Box>
              <Box width="100%">
                <TextField
                  className="inputs-text-field"
                  id="outlined-select-currency"
                  select
                  label="Tipo de Reunião"
                  size="small"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
            <Box p={1} textAlign="center">
              <Typography mt={2} variant="h5" fontWeight="medium">
                Conteúdo da Reunião
              </Typography>
            </Box>
            <Box>
              <Button type="submit" variant="contained" color="primary">
                CANCELAR
              </Button>
              <Button type="submit" variant="contained" color="primary">
                SALVAR ATA
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </BackgroundWrapper>
  );
}

export default FormCreate;
