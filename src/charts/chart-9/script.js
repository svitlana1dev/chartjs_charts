import Chart from "chart.js/auto";

const week = [];
const weekDatapoints = [];

for (let i = 1; i <= 52; i++) {
  week.push(`Week ${i}`);
  weekDatapoints.push(i);
}

const data = {
  labels: week,
  datasets: [
    {
      label: "Weekly Data",
      data: weekDatapoints,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
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
        min: 8,
        max: 14,
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

const chart9 = new Chart(document.getElementById("chart-9"), config);

window.weekData = function (start, end) {
  const startScale = chart9.config.options.scales.x.min + start;
  const endScale = chart9.config.options.scales.x.max + end;
  const previousButton = document.getElementById("previousButton");
  const nextButton = document.getElementById("nextButton");

  chart9.config.options.scales.x.min = startScale;
  chart9.config.options.scales.x.max = endScale;

  previousButton.disabled = false;
  nextButton.disabled = false;

  if (startScale < 0) {
    chart9.config.options.scales.x.min = 0;
    chart9.config.options.scales.x.max = 6;
    previousButton.disabled = true;
  }

  if (endScale > week.length) {
    chart9.config.options.scales.x.min = week.length - 6;
    chart9.config.options.scales.x.max = week.length - 1;
    nextButton.disabled = true;
  }

  chart9.update();
};
