import Chart from "chart.js/auto";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [100, 80, 30, 40, 10, 90],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
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
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          font: {
            size: 20,
          },
        },
        grid: {
          color: (context) => {
            if (context.index === 2) {
              return "rgba(75, 192, 192, 1)";
            } else {
              return "rgba(0, 0, 0, 0.1)";
            }
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

const cart2 = new Chart(document.getElementById("chart-2"), config);
