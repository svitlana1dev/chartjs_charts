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
      label: "Temperature in C",
      data: [
        [8, 12],
        [9, 16],
        [6, 9],
        [4, 10],
        [3, 12],
        [9, 2],
      ],
      backgroundColor: bg,
      borderColor: color,
      borderWidth: 1,
      borderSkipped: false,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    indexAxis: "y",
    scales: {
      x: {
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

const chart4 = new Chart(document.getElementById("chart-4"), config);
