import { FC, useEffect, useState } from "react";
import { Divider, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import licence from "../../assests/images/lisence.png";
import center from "../../assests/images/center.png";
import InfoIcon from "@mui/icons-material/Info";
import {
  MedicationPanel,
  MoodPanel,
  PatientsPanel,
  PhysicalWellbeingPanel,
  ResponseRatePanel,
  SymptomPanel,
  TooltipContent,
} from "../../components";
import { IPortalData } from "../../types";
import PatientsPortalApi from "../../services/services";

export const Home: FC = () => {
  const doctorName = "Edward";
  const [statics, setStatistics] = useState<IPortalData | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const result = await PatientsPortalApi.fetchGeneralInfo();
      setStatistics(result);
    })();
  }, []);

  return (
    <Grid item xs={11} sx={{ padding: "18px 20px 20px 0" }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: "25px" }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{ color: "mainTextColor", fontSize: "24px", fontWeight: "700" }}
        >
          Hi, {doctorName}, welcome back!
        </Typography>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <img src={licence} alt="Licence" />
          <Divider
            orientation="vertical"
            sx={{ margin: "3px 6px", borderColor: "dividerColor" }}
            flexItem
            variant="middle"
          />
          <img src={center} alt="Center" />
          <Tooltip title={<TooltipContent />}>
            <IconButton sx={{ padding: 0, marginLeft: "17px" }}>
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      {statics && (
        <Grid container spacing={2}>
          <Grid item sx={{ paddingTop: "0 !important" }} xs={6}>
            <PatientsPanel statics={statics} />
          </Grid>
          <Grid item xs={6} sx={{ paddingTop: "0 !important" }}>
            <PhysicalWellbeingPanel
              reportedCount={statics.reportedCount}
              wellbeingAvarage={statics.wellbeingAvarage}
            />
            <MoodPanel
              reportedCount={statics.reportedCount}
              moodAvarage={statics.moodAvarage}
            />
            <MedicationPanel
              medicationsStatistic={statics.medicationsStatistic}
            />
          </Grid>
          <Grid item xs={6} sx={{ paddingTop: "0 !important" }}>
            <ResponseRatePanel
              reportedCount={statics.reportedCount}
              patientsCount={statics.patientsCount}
            />
          </Grid>
          <Grid item xs={6} sx={{ paddingTop: "0 !important" }}>
            <SymptomPanel symptoms={statics.symptomsStatistic} />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
