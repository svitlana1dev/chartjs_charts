import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const color = ["red", "blue", "yellow", "green"];
const bg = [
  "rgba(255, 99, 132, 0.6)",
  "rgba(54, 162, 235, 0.6)",
  "rgba(255, 206, 86, 0.6)",
  "rgba(75, 192, 192, 0.6)",
];

const data = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 15, 5],
      backgroundColor: bg,
      borderColor: color,
      borderWidth: 1,
      offset: [20, 20, 20, 0],
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
  type: "pie",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legendMargin: {
        margin: 10,
      },
      datalabels: {
        formatter: (value, context) => {
          return `${context.chart.data.labels[context.dataIndex]}: ${value}%`;
        },
        anchor: "end",
        align: "end",
        color: "#fff",
        padding: 20,
      },
      legend: {
        labels: {
          color: "#fff",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        padding: 20,
        bodyFont: {
          size: 12,
        },
        titleFont: {
          size: 14,
        },
      },
    },
  },
  plugins: [ChartDataLabels, legendMargin],
};

const chart5 = new Chart(document.getElementById("chart-5"), config);
