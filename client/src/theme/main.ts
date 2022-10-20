import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    mainBackground: string;
    mainTextColor: string;
    secondaryTextColor: string;
    logoTextColor: string;
    dividerColor: string;
    dashedBorder: string;
    semiColor: string;
    femaleColor: string;
    additionText: string;
    physicalCircle: string;
    moodCircle: string;
    mainGrey: string;
    pointColor: string;
    tableHeaderText: string;
    tableBackgroundColor: string;
    borderTableColor: string;
    severe: string;
    mild: string;
    moderate: string;
    adherenceColor: string;
    tableButtonColor: string;
    ibrutinib: string;
    acalabrutinib: string;
  }
}

export const theme = createTheme({
  palette: {
    mainBackground: "#F9F9FB",
    mainTextColor: "#272543",
    secondaryTextColor: "#A1A0AF",
    logoTextColor: "#6960D7",
    dividerColor: "#B94700",
    dashedBorder: "#DAD9DF",
    semiColor: "#6960D7",
    femaleColor: "#E0DDFF",
    additionText: "#55517A",
    physicalCircle: "#FF5492",
    moodCircle: "#FFAE63",
    mainGrey: "#A1A0AF",
    pointColor: "#D2D0F1",

    ibrutinib: "#5A6ACF",
    acalabrutinib: "#8593ED",

    tableHeaderText: "#797882",
    tableBackgroundColor: "#F9F9FB",
    borderTableColor: "#E0E0E0",

    moderate: "#F3CE4D",
    severe: "#FF1010",
    mild: "#4ABF7A",

    adherenceColor: "#6079D7",
    tableButtonColor: "#ECE9FF",
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: "transparent",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#272543",
          border: "1px solid #E0E0E0",
          fontSize: 14,
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          display: "flex",
          padding: 10,
          justifyContent: "center",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          margin: "0 20px",
        },
      },
    },
  },
});
