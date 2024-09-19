import Chart from "chart.js/auto";

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
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
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
