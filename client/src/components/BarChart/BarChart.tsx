import { Bar } from "react-chartjs-2";
import { FC } from "react";
import { ChartData } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IBarChart {
  dataChart: ChartData<any>;
}

export const BarChart: FC<IBarChart> = ({ dataChart }) => {
  return <Bar data={dataChart} />;
};
