import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["PDF", "WORD"],
  datasets: [
    {
      label: "# of Votes",
      data: [63, 37],
      backgroundColor: ["red", "blue"],
      borderWidth: 0,
      hoverOffset: 10, // Larger hover effect
    },
  ],
};

const options = {
  responsive: true,
  cutout: "50%",
  plugins: {
    legend: {
      position: "right",
      labels: {
        color: "#333",
        font: {
          size: 14,
        },
        boxWidth: 20,
        padding: 10,
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          let percentage = (
            (context.raw / context.dataset.data.reduce((a, b) => a + b)) *
            100
          ).toFixed(2);
          return `${context.label}: ${context.raw} (${percentage}%)`;
        },
      },
      backgroundColor: "#fff",
      titleColor: "#000",
      bodyColor: "#000",
      borderColor: "#ddd",
      borderWidth: 1,
    },
  },
  hover: {
    mode: "nearest",
    animationDuration: 500, // Animation when hovering
  },
};

export function CustomPieChart() {
  return <Doughnut data={data} options={options} />;
}
