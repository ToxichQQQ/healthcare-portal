import { Grid } from "@mui/material";
import React, { FC } from "react";

interface IPanelLayout {
  children: React.ReactNode;
}

export const PanelLayout: FC<IPanelLayout> = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: "mainBackground",
        borderRadius: "10px",
        padding: "12px 24px !important",
        marginBottom: "16px",
      }}
    >
      {children}
    </Grid>
  );
};
