import { FC } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels,
  ...registerables
);

interface IPatientsChart {
  maleCount: number;
  femaleCount: number;
}

export const PatientsChart: FC<IPatientsChart> = ({
  maleCount,
  femaleCount,
}) => {
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "",
        data: [maleCount, femaleCount],
        backgroundColor: ["#6960D7", "#E0DDFF"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar
      data={data}
      height={210}
      options={{
        scales: {
          y: {
            min: 0,
            max: femaleCount + maleCount,
            ticks: {
              stepSize: (femaleCount + maleCount) / 2,
              callback: function (value) {
                return (value * 100) / (femaleCount + maleCount) + "%";
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
          datalabels: {},
        },
      }}
    />
  );
};
