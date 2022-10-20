import { Box, Grid, Typography } from "@mui/material";
import { PanelLayout } from "../index";
import logo from "../../assests/images/phisical-panel.svg";
import { CircularProgressWithLabel } from "../CircularProgressWithLabel/CircularProgressWithLabel";
import { FC } from "react";

interface IPhysicalWellbeingPanel {
  wellbeingAvarage: number;
  reportedCount: number;
}

export const PhysicalWellbeingPanel: FC<IPhysicalWellbeingPanel> = ({
  wellbeingAvarage,
  reportedCount,
}) => {
  return (
    <PanelLayout>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <img src={logo} alt="Logo" />
          </Box>
          <Grid item sx={{ paddingLeft: "24px" }}>
            <Typography
              component="h6"
              variant="h6"
              sx={{ color: "mainTextColor", fontSize: 14, fontWeight: 700 }}
            >
              Physical Wellbeing
            </Typography>
            <Typography sx={{ color: "additionText", fontSize: 14 }}>
              {reportedCount} patients reported
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <CircularProgressWithLabel
            size={56}
            value={wellbeingAvarage}
            color={"physicalCircle"}
          />
          <Typography
            sx={{ marginLeft: "27px", color: "additionText", fontSize: 14 }}
          >
            Average score{" "}
          </Typography>
        </Grid>
      </Grid>
    </PanelLayout>
  );
};
