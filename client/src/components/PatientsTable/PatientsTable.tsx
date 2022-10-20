import {
  IconButton,
  Table,
  Pagination,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ListPoint } from "../ListPoint/ListPoint";
import detail from "../../assests/images/detail.svg";
import { useState, useEffect, useCallback, Fragment } from "react";
import { IPatient } from "../../types";
import PatientsPortalApi from "../../services/services";
import { useNavigate } from "react-router-dom";

export const PatientsTable = () => {
  const navigate = useNavigate();

  const [patients, setPatients] = useState<IPatient[] | []>([]);
  const [currentItems, setCurrentItems] = useState<IPatient[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  const handlePageClick = (event: React.ChangeEvent<unknown>, page: number) => {
    const newOffset = (page * itemsPerPage) % patients.length;
    setItemOffset(newOffset);
  };

  const handleGoToPatient = (id) => {
    navigate(`/patient/${id}`);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(patients.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(patients.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, patients]);

  useEffect(() => {
    (async () => {
      const result = await PatientsPortalApi.fetchPatients();
      setPatients(result.patients);
    })();
  }, []);

  const tableHeaders = [
    { title: "Name", subtitle: "", border: "16px 0 0 0px" },
    { title: "Medication", subtitle: "Dose / frequency" },
    { title: "Symptoms", subtitle: "Severity" },
    { title: "Physical Wellbeing", subtitle: "In the last 7 days" },
    { title: "Mood", subtitle: "In the last 7 days" },
    { title: "Medication Adherence", subtitle: "In the last 7 days" },
    { title: "View Details", subtitle: "", border: "0 16px 0 0" },
  ];

  const getAvarageWellbeing = useCallback(
    (patient) => {
      return (
        patient.wellbeing.reduce((prev, current) => {
          return prev + current.day_wellbeing;
        }, 0) / 7
      ).toFixed(1);
    },
    [patients]
  );

  const getAvarageMood = useCallback(
    (patient) => {
      return (
        patient.wellbeing.reduce((prev, current) => {
          return prev + current.day_mood;
        }, 0) / 7
      ).toFixed(1);
    },
    [patients]
  );

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeaders.map((tableItem) => (
              <TableCell
                key={tableItem.title}
                align="center"
                sx={{
                  color: "tableHeaderText",
                  backgroundColor: "tableBackgroundColor",
                  verticalAlign: "baseline",
                  border: "none",
                  borderRadius: tableItem.border || "",
                }}
              >
                <Typography
                  component="h6"
                  variant="h6"
                  fontSize={14}
                  fontWeight="bold"
                >
                  {tableItem.title}
                </Typography>
                <Typography component="h6" variant="h6" fontSize={12}>
                  {tableItem.subtitle}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {currentItems.map((patient) => (
            <TableRow key={patient._id} sx={{ color: "mainTextColor" }}>
              <TableCell align="center">
                <Typography fontWeight="bold" fontSize={14}>
                  {patient.fullName}
                </Typography>
              </TableCell>
              <TableCell align="center">
                {patient.medications.map((medication) => (
                  <Fragment key={medication.medication_name}>
                    <Typography>{medication.medication_name}</Typography>
                    <Typography>{medication.medication_dose}</Typography>
                  </Fragment>
                ))}
              </TableCell>
              <TableCell align="center">
                {patient.symptoms.map((item) => (
                  <ListPoint
                    key={item.name}
                    text={item.name}
                    color={item.status.toLowerCase()}
                  />
                ))}
              </TableCell>
              <TableCell align="center">
                <Typography fontSize={20} fontWeight="bold">
                  {getAvarageWellbeing(patient)}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography fontSize={20} fontWeight="bold">
                  {getAvarageMood(patient)}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  fontSize={20}
                  fontWeight="bold"
                  color="adherenceColor"
                >
                  {patient.adherence}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <IconButton
                  onClick={() => handleGoToPatient(patient._id)}
                  sx={{ padding: "10px", backgroundColor: "tableButtonColor" }}
                >
                  <img src={detail} alt="Detail" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={pageCount}
        variant="outlined"
        color="primary"
        onChange={handlePageClick}
      />
    </TableContainer>
  );
};
