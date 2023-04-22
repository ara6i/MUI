"use client";

import React, { useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
function TextFieldMui() {
  const [value, setValue] = useState<string>("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Name"
          color="error"
          variant="outlined"
          required
          error={!value}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value ? "Required" :"do not show it to anyone"}
        />
        <TextField
          label="Name"
          color="success"
          variant="filled"
          helperText=" Test"
        />
        <TextField
          label="Password"
          type="password"
          color="info"
          variant="standard"
        />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Price"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default TextFieldMui;
