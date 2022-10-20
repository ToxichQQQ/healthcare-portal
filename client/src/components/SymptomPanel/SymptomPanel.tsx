import { FC, useMemo } from "react";
import { PanelLayout } from "../PanelLayout/PanelLayout";
import { Grid, Typography } from "@mui/material";
import logo from "../../assests/images/patients-panel.svg";
import { mockData } from "../../mockData";
import { ListPoint } from "../ListPoint/ListPoint";
import { CircularProgressWithLabel } from "../CircularProgressWithLabel/CircularProgressWithLabel";
import { SymptomChart } from "../SymptomChart/SymptomChart";
import { IStatistic } from "../../types";

interface ISymptomPanel {
  symptoms: IStatistic;
}
export const SymptomPanel: FC<ISymptomPanel> = ({ symptoms }) => {
  const symptomsLabels = useMemo(
    () => symptoms.statistic.map((item) => item.name),
    [symptoms]
  );
  const symptomsValues = useMemo(
    () => symptoms.statistic.map((item) => item.value),
    [symptoms]
  );
  const symptomsColors = useMemo(
    () => symptoms.statistic.map((item) => item.color),
    [symptoms]
  );

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
          Symptom Summary
        </Typography>
      </Grid>
      <Grid container>
        <SymptomChart
          symptomsLabels={symptomsLabels}
          symptomsValues={symptomsValues}
          symptomsColors={symptomsColors}
        />
      </Grid>
    </PanelLayout>
  );
};
