import {FC} from "react";
import { Bar } from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, Legend, registerables, Tooltip} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {callback} from "chart.js/types/helpers";
import {PanelLayout} from "../PanelLayout/PanelLayout";
import {Grid} from "@mui/material";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels,
    ...registerables
);

interface IPatientSymptomChart {
    symptomsInfo: object
}

export const PatientSymptomChart:FC<IPatientSymptomChart> = ({symptomsInfo}) => {
    const data = {
        labels: Object.keys(symptomsInfo),
        datasets: [
            {
                label: "Patient Symptoms",
                data: Object.values(symptomsInfo),
                backgroundColor: ["#6960D7"],
                borderWidth: 1,
                borderRadius: 3,
                barPercentage: 0.25 ,
            },
        ],
    };

    return <PanelLayout>
        <Grid container sx={{height:'250px'}}>
        <Bar
        data={data}
        options={{
            scales: {
                y: {
                    title:{
                      display:true,
                        text:'Number of Times Reported',
                        font:{
                          weight:'700',
                            size:12
                        },
                    },
                    min: 0,
                    max: 100,
                    grid:{
                        drawBorder:false,
                        borderDash:[5,5],
                        borderColor:'#D9D8E8'
                    },
                    ticks: {
                        font:{
                          size:12,
                        },
                        stepSize:  20,
                        callback: function (value) {
                            return value;
                        },
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },

                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                datalabels: {
                    display:false,
                },
                title:{
                  text:'Patient Symptoms',
                    display:true,
                    align:'start',
                    color:'#041029',
                    font:{
                      size:14,
                        weight:'700'
                    },
                    padding:{
                      bottom:25,
                        top:15,
                    },
                },
            },
            maintainAspectRatio:false
        }}
    />
        </Grid>
    </PanelLayout>
}
