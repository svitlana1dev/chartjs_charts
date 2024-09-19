import Chart from "chart.js/auto";

const color = ["red", "blue", "yellow", "green", "purple", "orange"];
const bg = [
  "rgba(255, 99, 132, 0.6)",
  "rgba(54, 162, 235, 0.6)",
  "rgba(255, 206, 86, 0.6)",
  "rgba(75, 192, 192, 0.6)",
  "rgba(153, 102, 255, 0.6)",
  "rgba(255, 159, 64, 0.6)",
];

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [
        { x: 3, y: 3 },
        { x: 6, y: 3 },
        { x: 9, y: 4.5 },
        { x: 12, y: 6 },
        { x: 15, y: 6 },
        { x: 9, y: 4.5 },
        { x: 6, y: 3.5 },
      ],
      backgroundColor: bg,
      opacity: 0.6,
      borderColor: color,
      borderWidth: 1,
      pointRadius: 10,
      pointHoverRadius: 20,
    },
  ],
};

const config = {
  type: "scatter",
  data: data,
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "Total Sales",
          color: color,
          font: {
            size: 20,
          },
        },
        ticks: {
          font: {
            size: 16,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 20,
          },
        },
        title: {
          display: true,
          text: "Total Sales Agents",
          font: {
            size: 20,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20,
          },
        },
      },
      tooltip: {
        padding: 20,
        bodyFont: {
          size: 20,
        },
        titleFont: {
          size: 24,
        },
      },
    },
  },
};

const chart3 = new Chart(document.getElementById("chart-3"), config);
