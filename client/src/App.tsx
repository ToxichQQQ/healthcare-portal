import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Patient, Patients } from "./pages";
import { Layout } from "./components";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patient/:id" element={<Patient />} />
      </Routes>
    </Grid>
  );
}

export default App;
