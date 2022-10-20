import { Grid, Typography } from "@mui/material";
import { LineProgress, PanelLayout } from "../index";
import { ListPoint } from "../ListPoint/ListPoint";
import { IStatistic } from "../../types";
import { FC } from "react";

interface IMedictionPanel {
  medicationsStatistic: IStatistic;
}

export const MedicationPanel: FC<IMedictionPanel> = ({
  medicationsStatistic,
}) => {
  return (
    <PanelLayout>
      <Grid container sx={{ padding: "10px 0px" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ marginBottom: "15px" }}
        >
          <Typography fontSize={14} fontWeight={"bold"}>
            Medication
          </Typography>
          <LineProgress
            data={medicationsStatistic.statistic}
            totalCount={medicationsStatistic.totalCount}
          />
        </Grid>
        <Grid container justifyContent="flex-start" spacing={1}>
          {medicationsStatistic.statistic.map((item) => (
            <ListPoint
              key={item.name}
              total={medicationsStatistic.totalCount}
              value={item.value}
              text={item.name}
              color={item.color}
            />
          ))}
        </Grid>
      </Grid>
    </PanelLayout>
  );
};
