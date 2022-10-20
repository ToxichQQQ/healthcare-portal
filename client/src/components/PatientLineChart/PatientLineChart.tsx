import {FC} from "react";
import { Line } from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, Legend, registerables, Tooltip} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {callback} from "chart.js/types/helpers";
import {PanelLayout} from "../PanelLayout/PanelLayout";
import {Grid} from "@mui/material";
import {severityValue} from '../../constants/constants'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels,
    ...registerables
);

interface IPatientLineChart {
    symptomSeverity: object
}

export const PatientLineChart:FC<IPatientLineChart> = ({symptomSeverity}) => {
    const data = {
        labels: symptomSeverity.map(day => day.date),
        datasets: [
            {
                data: symptomSeverity.map(day => day.severity),
                backgroundColor: '#FFF',
                borderWidth: 2,
                barPercentage: 0.25,
                borderColor:'#4EAAFF'
            },
        ],
    };

    return <PanelLayout>
        <Grid container sx={{height:'250px'}}>
            <Line
                data={data}
                options={{
                    elements:{
                        point:{
                          radius:7,
                            borderWidth:6,
                        },
                    },
                    scales: {
                        y: {
                            min: 2,
                            max: 10,
                            grid:{
                                drawBorder:false,
                                borderDash:[5,5],
                                borderColor:'#D9D8E8'
                            },
                            ticks: {
                                font:{
                                    size:12,
                                },
                                stepSize:  2,
                                callback: function (value,ctx) {
                                    return severityValue[value];
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
                        tooltip:{
                            backgroundColor:'#FFFFFF',
                            titleColor:'#272543',
                            callbacks: {
                              title: function (t){
                                  return t[0].label
                              },
                                footer: function (t) {
                                  return t[0].label
                                },
                                beforeBody: function (tooltipItems){
                                  const data  = symptomSeverity.find(item => item.date === tooltipItems[0].label)
                                  return `Severity ${data.severity}`
                                },
                                labelTextColor: function (tooltipItem) {
                                  return 'red'
                                }
                            },
                        },
                        datalabels: {
                            display:false,
                        },
                        title:{
                            text:'Symptom Severity',
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
