import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Red Bar",
      data: [6, 19, 13, 15, 12, 13],
      backgroundColor: ["rgba(255, 99, 132, 0.6)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 1,
      categoryPercentage: 0.5,
      order: 0,
    },
    {
      label: "Orange Bar",
      data: [5, 15, 3, 5, 2, 3],
      backgroundColor: ["rgba(255, 159, 64, 1)"],
      borderColor: ["rgba(255, 159, 64, 1)"],
      borderWidth: 1,
      order: 1,
    },
  ],
};

const legendMargin = {
  id: "legendMargin",
  afterInit(chart, parseArgs, plugins) {
    const originalFit = chart.legend.fit;
    const margin = plugins.margin || 0;
    chart.legend.fit = function fit() {
      if (originalFit) {
        originalFit.call(this);
      }
      return (this.height += 50);
    };
  },
};

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      x: {
        stacked: true,
        grid: {
          color: "#303030",
        },
        ticks: {
          color: "#fff",
          font: {
            size: 16,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#303030",
        },
        ticks: {
          color: "#fff",
          font: {
            size: 16,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#fff",
          font: {
            size: 14,
          },
        },
      },
      legendMargin: {
        margin: 10,
      },
    },
  },
  plugins: [legendMargin],
};

const chart5 = new Chart(document.getElementById("chart-6"), config);
