import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MenuItem } from "@mui/material";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

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
    <form onSubmit={handleSubmit}>
      <TextField
        required
        id="outlined-required"
        label="Título *"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        id="outlined-required"
        defaultValue="Local *"
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="Tipo de Reunião *"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}

export default MyForm;
