"use client";

import { Button, ButtonGroup, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
function ButtonMui() {
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
    </Stack>
  );
}

export default ButtonMui;
