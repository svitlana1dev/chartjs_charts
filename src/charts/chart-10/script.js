import Chart from "chart.js/auto";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [75, 25, 25, 25],
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
      cutout: "90%",
    },
  ],
};

const doughnutLabel = {
  id: "doughnutLabel",
  beforeDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { top, bottom, left, right, width, height },
    } = chart;
    ctx.save();
    ctx.font = `${options.fontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.fillStyle = options.fontColor;
    ctx.textBaseline = "middle";
    ctx.fillText(
      `${chart.data.datasets[0].data[0]}%`,
      width / 2,
      height / 2 + top + options.fontSize / 20
    );
    ctx.restore();
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
  type: "doughnut",
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
        display: false,
      },
      doughnutLabel: {
        fontSize: 100,
        fontColor: "#fff",
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
  plugins: [doughnutLabel, legendMargin],
};

const chart10 = new Chart(document.getElementById("chart-10"), config);
