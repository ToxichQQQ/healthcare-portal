import { Box, CircularProgress, Typography } from "@mui/material";
import { FC } from "react";

interface ICircularProgressWithLabel {
  value: number;
  color: string;
  size: number;
  text?: string;
}

export const CircularProgressWithLabel: FC<ICircularProgressWithLabel> = ({
  value,
  color,
  size,
  text,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        width: `${size}px !important`,
        height: `${size}px !important`,
      }}
    >
      <CircularProgress
        variant="determinate"
        value={value * 10}
        sx={{
          width: `${size}px !important`,
          height: `${size}px !important`,
          color: color,
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{
            color: "mainTextColor",
            fontSize: 22,
            fontWeight: 700,
            lineHeight: "26px",
          }}
        >
          {text || value}
        </Typography>
      </Box>
    </Box>
  );
};
