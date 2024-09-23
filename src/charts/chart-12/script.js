import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Red Bar",
      data: [
        [0, 12],
        [0, 19],
        [0, 3],
        [0, 5],
        [0, 2],
        [0, 3],
      ],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Arrow Bar",
      data: [
        [12, 19],
        [19, 3],
        [3, 5],
        [5, 2],
        [2, 3],
      ],
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      borderColor: "rgba(255, 255, 255, 0.6)",
      barPercentage: 0.05,
    },
  ],
};

const barGrowthIndicator = {
  id: "barGrowthIndicator",
  afterDatasetsDraw(chart, scales, options) {
    const {
      ctx,
      scales: { x, y },
    } = chart;

    const deltaPercentage = [];

    for (let i = 0; i < chart._metasets[0]._parsed.length - 1; i++) {
      let z = 1 + i;
      const basis = chart._metasets[0]._parsed[i].y;
      const delta = chart._metasets[0]._parsed[z].y;
      let percentage = (delta / basis) * 100;
      percentage = percentage - 100;
      deltaPercentage.push(percentage.toFixed(1));
    }

    if (chart._metasets[1].hidden !== true) {
      for (let a = 0; a < deltaPercentage.length; a++) {
        const start = chart._metasets[1]._parsed[a]._custom.start;
        const end = chart._metasets[1]._parsed[a]._custom.end;

        if (end >= start) {
          ctx.beginPath();
          ctx.moveTo(
            chart.getDatasetMeta(1).data[a].x,
            chart.getDatasetMeta(1).data[a].y - 2
          );
          ctx.lineTo(
            chart.getDatasetMeta(1).data[a].x - 5,
            chart.getDatasetMeta(1).data[a].y + 5
          );
          ctx.lineTo(
            chart.getDatasetMeta(1).data[a].x + 5,
            chart.getDatasetMeta(1).data[a].y + 5
          );
          ctx.fillStyle = "#fff";
          ctx.fill();
          ctx.restore();

          ctx.font = "10px Arial";
          ctx.fillStyle = "green";
          ctx.textAlign = "center";
          ctx.fillText(
            deltaPercentage[a] + "%",
            chart.getDatasetMeta(1).data[a].x + 2.5,
            chart.getDatasetMeta(1).data[a].y - 10
          );
          ctx.restore();
        }
        if (end < start) {
          let yStart = a + 1;
          ctx.beginPath();
          ctx.moveTo(
            chart.getDatasetMeta(1).data[a].x,
            chart.getDatasetMeta(0).data[yStart].y + 3
          );
          ctx.lineTo(
            chart.getDatasetMeta(1).data[a].x - 5,
            chart.getDatasetMeta(0).data[yStart].y - 5
          );
          ctx.lineTo(
            chart.getDatasetMeta(1).data[a].x + 5,
            chart.getDatasetMeta(0).data[yStart].y - 5
          );
          ctx.fillStyle = "#fff";
          ctx.fill();
          ctx.restore();

          ctx.font = "10px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "center";
          ctx.fillText(
            deltaPercentage[a] + "%",
            chart.getDatasetMeta(1).data[a].x + 2.5,
            chart.getDatasetMeta(0).data[yStart].y + 12
          );
          ctx.restore();
        }
      }
    }
  },
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
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legendMargin: {
        margin: 10,
      },
      datalabels: {
        formatter: (value) => {
          const votes = value[1] - value[0];
          const netVotes = Math.abs(votes);
          return `Votes: ${netVotes}`;
        },
        color: "#fff",
        padding: 20,
      },
      waterfall: {
        lineColor: "black",
        linestyle1: 5,
        linestyle2: 5,
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
        filter: (tooltipItem) => {
          return tooltipItem.datasetIndex === 0;
        },
      },
    },
  },
  plugins: [legendMargin, ChartDataLabels, barGrowthIndicator],
};

const chart12 = new Chart(document.getElementById("chart-12"), config);
