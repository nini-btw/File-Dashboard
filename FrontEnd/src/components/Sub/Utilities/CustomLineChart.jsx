import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const realData = [
  { month: "January", value: 2 },
  { month: "February", value: 5 },
  { month: "March", value: 20 },
  { month: "April", value: 4 },
  { month: "May", value: 3 },
  { month: "June", value: 6 },
  { month: "July", value: 10 },
];

const options = {
  responsive: true, // Makes the chart responsive to screen sizes
  maintainAspectRatio: false, // Allows the chart to scale according to the container size
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true, // Enables tooltips on hover
      mode: "index", // Tooltip mode for getting data values
      intersect: false, // Allows tooltips to intersect
      backgroundColor: "#fff", // Tooltip background color
      titleColor: "#000", // Tooltip title color
      bodyColor: "#000", // Tooltip body text color
      borderColor: "#ddd", // Border color for tooltips
      borderWidth: 1, // Border width for tooltips
    },
  },
  interaction: {
    mode: "nearest", // Sets the interaction mode to nearest point on hover
    axis: "x", // Determines which axis is used for interaction
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Months",
      },
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        beginAtZero: true, // Start Y-axis from zero
      },
    },
  },
};

const data = {
  labels: realData.map((item) => item.month), // Extracting months from the data
  datasets: [
    {
      label: "label",
      fill: true,
      data: realData.map((item) => item.value), // Extracting values from the data
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function CustomLineChart() {
  return <Line options={options} data={data} />;
}
