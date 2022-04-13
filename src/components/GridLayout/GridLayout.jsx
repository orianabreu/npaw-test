import React from "react";
import Grid from "@mui/material/Grid";

import { Wrapper } from "./GridLayoutStyles";

export default function GridLayout({ children, showGrid }) {
  return (
    <Wrapper showGrid={showGrid}>
      <Grid
        container
        spacing={5}
        columns={{ sm: 1, md: 4, lg: 6 }}
        sx={{ display: "flex" }}>
        {children}
      </Grid>
    </Wrapper>
  );
}
