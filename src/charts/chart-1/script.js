import Chart from "chart.js/auto";

const departmentDatasets = [
  "Sales Department",
  "Marketing Department",
  "HR Department",
  "IT Department",
];
const cost = [700, 500, 150, 100];
const budget = [3000, 4000, 5000, 10000];
const tax = [1000, 700, 1000, 900];

const departmentInfo = departmentDatasets.map((department, index) => {
  let departmentDataset = {};
  departmentDataset.department = department;
  departmentDataset.financials = {};
  departmentDataset.financials.cost = cost[index];
  departmentDataset.financials.budget = budget[index];
  departmentDataset.financials.tax = tax[index];

  return departmentDataset;
});

const data = {
  datasets: [
    {
      label: "Tax",
      data: [12, 19, 3, 5, 2, 3],
      data: departmentInfo,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    parsing: {
      yAxisKey: "department",
      xAxisKey: "financials.tax",
    },
    borderWidth: 1,
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
      title: {
        display: true,
        text: "Departments",
        font: {
          size: 20,
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

const chart1 = new Chart(document.getElementById("chart-1"), config);

window.changeFinancials = function (financials) {
  chart1.config.options.parsing.xAxisKey = `financials.${financials}`;
  chart1.config.data.datasets[0].label = financials;
  chart1.update();
};
