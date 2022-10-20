import { FC } from "react";
import { Divider, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { PatientsTable, TooltipContent } from "../../components";
import licence from "../../assests/images/lisence.png";
import center from "../../assests/images/center.png";
import InfoIcon from "@mui/icons-material/Info";
import alert from "../../assests/images/alert.svg";
import question from "../../assests/images/question.svg";

export const Patients: FC = () => {
  return (
    <Grid item xs={11} sx={{ padding: "18px 20px 20px 0" }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: "20px" }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{ color: "mainTextColor", fontSize: "24px", fontWeight: "700" }}
        >
          Patients
        </Typography>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <img src={alert} alt="Licence" style={{ marginRight: 25 }} />
          <img src={question} alt="Center" />
        </Grid>
      </Grid>
      <PatientsTable />
    </Grid>
  );
};
