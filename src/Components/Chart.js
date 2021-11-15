import React from "react";
import { Line } from "react-chartjs-2";

let delayed;

const data = {
  labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00"],
  datasets: [
    {
      label: "Температура",
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: "rgba(28, 0, 255, 0.7)",
      borderColor: "rgba(192, 192, 192, 0.7)",
      pointBackgroundColor: "rgb(192, 192, 192)",
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  radius: 7,
  hitRadius: 40,
  hoverRadius: 10,
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: (context) => {
      let delay = 0;
      if (context.type === "data" && context.mode === "default" && !delayed) {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    },
  },
  scales: {
    y: {
      ticks: {
        callback: (value) => {
          return value + " °C";
        },
        stacked: true,
      },
      x: {
        stacked: true,
      },
    },
  },
};

const LineChart = ({ weatherData }) => (
  <div className="flex flex-1 items-center justify-center relative mt-10">
    <Line data={data} options={options} />
  </div>
);

export default LineChart;
