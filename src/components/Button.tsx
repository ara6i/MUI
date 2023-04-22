"use client";

import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import React, { useState } from "react";
function ButtonMui() {
  const [formats, setFormats] = useState<string | null>(null);
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string | null
  ) => {
    setFormats(updatedFormat);
    console.log(_event);
  };
  console.log(formats);
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Button color="error" size="small" variant="text">
          hello
        </Button>
        <Button color="info" size="medium" variant="contained">
          hello
        </Button>
        <Button size="large" color="success" variant="outlined">
          hello
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />}>
          hello
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disableElevation
          disableRipple
          disableTouchRipple
          disableFocusRipple
        >
          hello
        </Button>
        <IconButton aria-label="send" color="success" size="large">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction={"row"}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
        >
          <Button>Hello</Button>
          <Button>Hello</Button>
          <Button>Hello</Button>
        </ButtonGroup>
      </Stack>
      <Stack>
        <ToggleButtonGroup
          orientation="vertical"
          value={formats}
          onChange={handleChange}
          color="success"
          exclusive
        >
          <ToggleButton color="error" value={1}>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={2}>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={3}>
            <FormatBoldIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default ButtonMui;
