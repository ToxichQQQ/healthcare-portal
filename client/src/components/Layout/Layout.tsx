import { FC } from "react";
import { Grid, List, ListItem, Typography } from "@mui/material";
import logo from "../../assests/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import home from "../../assests/images/home.svg";
import homeFill from "../../assests/images/home-fill.svg";
import patients from "../../assests/images/patients.svg";
import patientsFill from "../../assests/images/patients-fill.svg";

export const Layout: FC = () => {
  const { pathname } = useLocation();
  const pages: any = [
    { title: "Home", path: "/", logo: home, logoFill: homeFill },
    {
      title: "Patients",
      path: "/patients",
      logo: patients,
      logoFill: patientsFill,
    },
  ];

  return (
    <Grid item xs={1}>
      <Grid
        container
        direction="column"
        sx={{
          width: "88px",
          backgroundColor: "mainBackground",
          minHeight: "100vh",
        }}
      >
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            marginBottom: "25px",
          }}
        >
          <Typography sx={{ fontSize: 12, color: "logoTextColor" }}>
            Powered by
          </Typography>
          <img src={logo} alt="Logo" style={{ width: 29 }} />
        </Grid>
        <List>
          {pages.map(
            (page: {
              path: any;
              title: string;
              logo: string;
              logoFill: string;
            }) => (
              <ListItem
                key={page.title}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "30px 0px",
                }}
              >
                <Link
                  to={`${page.path}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={pathname === page.path ? page.logoFill : page.logo}
                    alt={page.title}
                  />
                  <Typography
                    sx={{
                      fontSize: 17,
                      color:
                        pathname === page.path
                          ? "mainTextColor"
                          : "secondaryTextColor",
                      fontWeight: 700,
                    }}
                  >
                    {page.title}
                  </Typography>
                </Link>
              </ListItem>
            )
          )}
        </List>
      </Grid>
    </Grid>
  );
};
