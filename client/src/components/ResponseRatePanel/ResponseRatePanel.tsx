import { FC, useMemo } from "react";
import { PanelLayout } from "../PanelLayout/PanelLayout";
import { Grid, Typography } from "@mui/material";
import logo from "../../assests/images/patients-panel.svg";
import { ListPoint } from "../ListPoint/ListPoint";
import { CircularProgressWithLabel } from "../CircularProgressWithLabel/CircularProgressWithLabel";

interface IResponseRatePanel {
  reportedCount: number;
  patientsCount: number;
}

export const ResponseRatePanel: FC<IResponseRatePanel> = ({
  reportedCount,
  patientsCount,
}) => {
  const reportedPercent = useMemo(() => {
    return (100 * reportedCount) / patientsCount;
  }, [reportedCount, patientsCount]);

  const reportedValue = useMemo(() => {
    return (10 * reportedCount) / patientsCount;
  }, [reportedCount, patientsCount]);

  return (
    <PanelLayout>
      <Grid container alignItems="center" sx={{ paddingTop: "12px" }}>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            color: "mainTextColor",
          }}
        >
          Patient Response Rate
        </Typography>
      </Grid>
      <Grid container sx={{ paddingBottom: "12px" }}>
        <Grid item xs={6}>
          <Grid
            container
            flexDirection="column"
            justifyContent="space-between"
            sx={{ height: "100%" }}
          >
            <Typography
              sx={{
                paddingTop: "16px",
                color: "mainTextColor",
                fontSize: "14px",
              }}
            >
              This statistic shows the percentage of patients who sent a report
              at least once in the last 7 days
            </Typography>
            <Grid item>
              <Typography sx={{ color: "mainTextColor" }}>
                <span style={{ fontWeight: 700, fontSize: 20 }}>
                  {reportedCount}
                </span>{" "}
                patients reported
              </Typography>
              <Typography sx={{ color: "mainGrey" }}>
                from {patientsCount} patients{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "30px",
          }}
        >
          <CircularProgressWithLabel
            value={reportedValue}
            text={`${reportedPercent}%`}
            color="semiColor"
            size={140}
          />
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "30px",
              width: "100%",
            }}
          >
            <ListPoint text="Reported" color="semiColor" />
            <ListPoint text="Not reported" color="pointColor" />
          </Grid>
        </Grid>
      </Grid>
    </PanelLayout>
  );
};
