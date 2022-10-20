import { Grid, Typography } from "@mui/material";
import { FC } from "react";

interface IListPoint {
  total?: number;
  value?: number;
  text: string;
  color: string;
}

export const ListPoint: FC<IListPoint> = ({ total, value, text, color }) => {
  return (
    <Grid item sx={{ display: "flex", alignItems: "center" }}>
      <Grid
        sx={{
          height: 8,
          width: 8,
          backgroundColor: `${color}`,
          borderRadius: "50%",
          marginRight: "4px",
        }}
      ></Grid>
      <Typography sx={{ color: "mainTextColor", fontSize: 14 }}>
        {text}
        {total && value && (
          <span style={{ paddingLeft: 6, fontWeight: 700 }}>
            {Math.round((value / total) * 100)}%
          </span>
        )}
      </Typography>
    </Grid>
  );
};
