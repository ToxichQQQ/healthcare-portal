import { FC } from "react";
import logo from "../../assests/images/tooltipLogo.png";
import { Grid, Typography } from "@mui/material";

export const TooltipContent: FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        padding: "16px 24px 24px",
        boxShadow: "1px 3px 10px rgba(0, 0, 0, 0.16)",
        borderRadius: "6px",
        maxWidth: 250,
        backgroundColor: "white",
      }}
    >
      <img src={logo} alt="Logo" />
      <Typography
        sx={{ fontSize: 14, paddingTop: "24px", color: "mainTextColor" }}
      >
        <span style={{ fontWeight: 700 }}>
          UT Health San Antonio MD Anderson Cancer Center
        </span>{" "}
        is proud to offer world-renowned cancer care. We are the only NCI cancer
        center in Central and South Texas.
      </Typography>
    </Grid>
  );
};
