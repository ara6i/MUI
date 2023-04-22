"use client";

import Typography from "@mui/material/Typography";
import React from "react";

function TypoGraphy() {
  return (
    <div>
      <Typography color="black" variant="h1" component="h1" gutterBottom>
        Hello
      </Typography>
      <Typography color="red" variant="h2">
        Hello
      </Typography>
      <Typography color="green" variant="h3">
        Hello
      </Typography>
      <Typography color="orange" variant="subtitle2">
        Hello
      </Typography>
      <Typography color="blue" variant="subtitle2">
        Hello
      </Typography>
    </div>
  );
}

export default TypoGraphy;
