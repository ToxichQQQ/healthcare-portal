import React, { FC, memo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface ISymptomChart {
  symptomsLabels: string[];
  symptomsValues: number[];
  symptomsColors: string[];
}

export const SymptomChart: FC<ISymptomChart> = memo(
  ({ symptomsValues, symptomsColors, symptomsLabels }) => {
    const data = {
      labels: symptomsLabels,
      datasets: [
        {
          label: "# of Votes",
          data: symptomsValues,
          backgroundColor: symptomsColors,
          borderColor: symptomsColors,
          borderWidth: 1,
        },
      ],
    };

    return (
      <Pie
        data={data}
        width={"230px"}
        height={"230px"}
        options={{
          layout: {
            padding: 25,
          },
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map((data) => {
                  // @ts-ignore
                  sum += data;
                });
                let percentage = ((value * 100) / sum).toFixed(0) + "%";
                return percentage;
              },
              anchor: "center",
              color: "#fff",
              font: {
                weight: "bold",
                size: 14,
              },
              padding: {
                bottom: 90,
              },
              labels: {
                index: {
                  align: "center",
                  anchor: "center",
                },
                name: {
                  padding: 40,
                  offset: 10,
                  align: "end",
                  anchor: "center",
                  font: { size: 14 },
                  color: "#55517A",
                  formatter: function (value, ctx) {
                    // @ts-ignore
                    return ctx.chart.data.labels[ctx.dataIndex];
                  },
                },
              },
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    );
  }
);
