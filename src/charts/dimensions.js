import Chart from "chart.js/auto";

const ctx = document.getElementById("dimensions").getContext("2d");

const dimensionsChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Width", "Height", "Depth"],
    datasets: [
      {
        label: "Dimensions in cm",
        data: [50, 100, 75],
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
