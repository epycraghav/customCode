
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("ehi-chart").getContext("2d");

  const chartData = [
    {
      date: "2017-01-01",
      indexData: {
        ehiIndex: 903,
        nifty50: 900,
        niftyFinServices: 906,
        constituents: 15,
      },
    },
    {
      date: "2017-02-01",
      indexData: {
        ehiIndex: 909,
        nifty50: 902,
        niftyFinServices: 907,
        constituents: 15,
      },
    },
    {
      date: "2017-03-01",
      indexData: {
        ehiIndex: 910,
        nifty50: 903,
        niftyFinServices: 908,
        constituents: 16,
      },
    },
    {
      date: "2017-04-01",
      indexData: {
        ehiIndex: 911,
        nifty50: 905,
        niftyFinServices: 912,
        constituents: 16,
      },
    },
    {
      date: "2017-05-01",
      indexData: {
        ehiIndex: 913,
        nifty50: 907,
        niftyFinServices: 917,
        constituents: 16,
      },
    },
    {
      date: "2017-06-01",
      indexData: {
        ehiIndex: 918,
        nifty50: 912,
        niftyFinServices: 931,
        constituents: 17,
      },
    },
    {
      date: "2017-07-01",
      indexData: {
        ehiIndex: 921,
        nifty50: 915,
        niftyFinServices: 938,
        constituents: 17,
      },
    },
    {
      date: "2017-08-01",
      indexData: {
        ehiIndex: 928,
        nifty50: 916,
        niftyFinServices: 938,
        constituents: 17,
      },
    },
    {
      date: "2017-09-01",
      indexData: {
        ehiIndex: 945,
        nifty50: 920,
        niftyFinServices: 939,
        constituents: 17,
      },
    },
    {
      date: "2017-10-01",
      indexData: {
        ehiIndex: 954,
        nifty50: 921,
        niftyFinServices: 941,
        constituents: 17,
      },
    },
    {
      date: "2017-11-01",
      indexData: {
        ehiIndex: 959,
        nifty50: 923,
        niftyFinServices: 946,
        constituents: 17,
      },
    },
    {
      date: "2017-12-01",
      indexData: {
        ehiIndex: 960,
        nifty50: 924,
        niftyFinServices: 947,
        constituents: 18,
      },
    },
    {
      date: "2018-01-01",
      indexData: {
        ehiIndex: 962,
        nifty50: 929,
        niftyFinServices: 949,
        constituents: 18,
      },
    },
    {
      date: "2018-02-01",
      indexData: {
        ehiIndex: 964,
        nifty50: 933,
        niftyFinServices: 954,
        constituents: 18,
      },
    },
    {
      date: "2018-03-01",
      indexData: {
        ehiIndex: 977,
        nifty50: 942,
        niftyFinServices: 959,
        constituents: 18,
      },
    },
    {
      date: "2018-04-01",
      indexData: {
        ehiIndex: 979,
        nifty50: 942,
        niftyFinServices: 961,
        constituents: 19,
      },
    },
    {
      date: "2018-05-01",
      indexData: {
        ehiIndex: 982,
        nifty50: 945,
        niftyFinServices: 963,
        constituents: 19,
      },
    },
    {
      date: "2018-06-01",
      indexData: {
        ehiIndex: 996,
        nifty50: 950,
        niftyFinServices: 963,
        constituents: 20,
      },
    },
    {
      date: "2018-07-01",
      indexData: {
        ehiIndex: 999,
        nifty50: 955,
        niftyFinServices: 964,
        constituents: 20,
      },
    },
    {
      date: "2018-08-01",
      indexData: {
        ehiIndex: 1003,
        nifty50: 961,
        niftyFinServices: 969,
        constituents: 20,
      },
    },
    {
      date: "2018-09-01",
      indexData: {
        ehiIndex: 1011,
        nifty50: 966,
        niftyFinServices: 972,
        constituents: 20,
      },
    },
    {
      date: "2018-10-01",
      indexData: {
        ehiIndex: 1012,
        nifty50: 969,
        niftyFinServices: 972,
        constituents: 20,
      },
    },
    {
      date: "2018-11-01",
      indexData: {
        ehiIndex: 1018,
        nifty50: 978,
        niftyFinServices: 975,
        constituents: 20,
      },
    },
    {
      date: "2018-12-01",
      indexData: {
        ehiIndex: 1020,
        nifty50: 980,
        niftyFinServices: 978,
        constituents: 21,
      },
    },
    {
      date: "2019-01-01",
      indexData: {
        ehiIndex: 1031,
        nifty50: 982,
        niftyFinServices: 982,
        constituents: 21,
      },
    },
    {
      date: "2019-02-01",
      indexData: {
        ehiIndex: 1032,
        nifty50: 991,
        niftyFinServices: 1004,
        constituents: 21,
      },
    },
    {
      date: "2019-03-01",
      indexData: {
        ehiIndex: 1037,
        nifty50: 995,
        niftyFinServices: 1005,
        constituents: 21,
      },
    },
    {
      date: "2019-04-01",
      indexData: {
        ehiIndex: 1040,
        nifty50: 1003,
        niftyFinServices: 1011,
        constituents: 21,
      },
    },
    {
      date: "2019-05-01",
      indexData: {
        ehiIndex: 1042,
        nifty50: 1005,
        niftyFinServices: 1020,
        constituents: 21,
      },
    },
    {
      date: "2019-06-01",
      indexData: {
        ehiIndex: 1045,
        nifty50: 1010,
        niftyFinServices: 1033,
        constituents: 21,
      },
    },
    {
      date: "2019-07-01",
      indexData: {
        ehiIndex: 1045,
        nifty50: 1011,
        niftyFinServices: 1037,
        constituents: 21,
      },
    },
    {
      date: "2019-08-01",
      indexData: {
        ehiIndex: 1055,
        nifty50: 1012,
        niftyFinServices: 1045,
        constituents: 21,
      },
    },
    {
      date: "2019-09-01",
      indexData: {
        ehiIndex: 1059,
        nifty50: 1015,
        niftyFinServices: 1057,
        constituents: 22,
      },
    },
    {
      date: "2019-10-01",
      indexData: {
        ehiIndex: 1063,
        nifty50: 1031,
        niftyFinServices: 1061,
        constituents: 22,
      },
    },
    {
      date: "2019-11-01",
      indexData: {
        ehiIndex: 1063,
        nifty50: 1036,
        niftyFinServices: 1070,
        constituents: 23,
      },
    },
    {
      date: "2019-12-01",
      indexData: {
        ehiIndex: 1067,
        nifty50: 1037,
        niftyFinServices: 1078,
        constituents: 23,
      },
    },
    {
      date: "2020-01-01",
      indexData: {
        ehiIndex: 1067,
        nifty50: 1039,
        niftyFinServices: 1083,
        constituents: 23,
      },
    },
    {
      date: "2020-02-01",
      indexData: {
        ehiIndex: 1068,
        nifty50: 1044,
        niftyFinServices: 1086,
        constituents: 23,
      },
    },
    {
      date: "2020-03-01",
      indexData: {
        ehiIndex: 1074,
        nifty50: 1047,
        niftyFinServices: 1092,
        constituents: 23,
      },
    },
    {
      date: "2020-04-01",
      indexData: {
        ehiIndex: 1076,
        nifty50: 1049,
        niftyFinServices: 1093,
        constituents: 23,
      },
    },
    {
      date: "2020-05-01",
      indexData: {
        ehiIndex: 1077,
        nifty50: 1050,
        niftyFinServices: 1105,
        constituents: 24,
      },
    },
    {
      date: "2020-06-01",
      indexData: {
        ehiIndex: 1079,
        nifty50: 1050,
        niftyFinServices: 1112,
        constituents: 24,
      },
    },
    {
      date: "2020-07-01",
      indexData: {
        ehiIndex: 1091,
        nifty50: 1051,
        niftyFinServices: 1112,
        constituents: 24,
      },
    },
    {
      date: "2020-08-01",
      indexData: {
        ehiIndex: 1097,
        nifty50: 1054,
        niftyFinServices: 1115,
        constituents: 25,
      },
    },
    {
      date: "2020-09-01",
      indexData: {
        ehiIndex: 1098,
        nifty50: 1066,
        niftyFinServices: 1116,
        constituents: 25,
      },
    },
    {
      date: "2020-10-01",
      indexData: {
        ehiIndex: 1101,
        nifty50: 1067,
        niftyFinServices: 1116,
        constituents: 25,
      },
    },
    {
      date: "2020-11-01",
      indexData: {
        ehiIndex: 1114,
        nifty50: 1070,
        niftyFinServices: 1118,
        constituents: 25,
      },
    },
    {
      date: "2020-12-01",
      indexData: {
        ehiIndex: 1115,
        nifty50: 1071,
        niftyFinServices: 1124,
        constituents: 25,
      },
    },
    {
      date: "2021-01-01",
      indexData: {
        ehiIndex: 1115,
        nifty50: 1080,
        niftyFinServices: 1124,
        constituents: 25,
      },
    },
    {
      date: "2021-02-01",
      indexData: {
        ehiIndex: 1121,
        nifty50: 1083,
        niftyFinServices: 1126,
        constituents: 26,
      },
    },
    {
      date: "2021-03-01",
      indexData: {
        ehiIndex: 1127,
        nifty50: 1084,
        niftyFinServices: 1132,
        constituents: 26,
      },
    },
    {
      date: "2021-04-01",
      indexData: {
        ehiIndex: 1129,
        nifty50: 1084,
        niftyFinServices: 1136,
        constituents: 26,
      },
    },
    {
      date: "2021-05-01",
      indexData: {
        ehiIndex: 1133,
        nifty50: 1090,
        niftyFinServices: 1138,
        constituents: 26,
      },
    },
    {
      date: "2021-06-01",
      indexData: {
        ehiIndex: 1133,
        nifty50: 1093,
        niftyFinServices: 1142,
        constituents: 26,
      },
    },
    {
      date: "2021-07-01",
      indexData: {
        ehiIndex: 1136,
        nifty50: 1096,
        niftyFinServices: 1154,
        constituents: 26,
      },
    },
    {
      date: "2021-08-01",
      indexData: {
        ehiIndex: 1141,
        nifty50: 1106,
        niftyFinServices: 1155,
        constituents: 26,
      },
    },
    {
      date: "2021-09-01",
      indexData: {
        ehiIndex: 1144,
        nifty50: 1120,
        niftyFinServices: 1156,
        constituents: 26,
      },
    },
    {
      date: "2021-10-01",
      indexData: {
        ehiIndex: 1151,
        nifty50: 1125,
        niftyFinServices: 1159,
        constituents: 27,
      },
    },
    {
      date: "2021-11-01",
      indexData: {
        ehiIndex: 1154,
        nifty50: 1134,
        niftyFinServices: 1164,
        constituents: 27,
      },
    },
    {
      date: "2021-12-01",
      indexData: {
        ehiIndex: 1155,
        nifty50: 1135,
        niftyFinServices: 1177,
        constituents: 27,
      },
    },
    {
      date: "2022-01-01",
      indexData: {
        ehiIndex: 1156,
        nifty50: 1139,
        niftyFinServices: 1178,
        constituents: 27,
      },
    },
    {
      date: "2022-02-01",
      indexData: {
        ehiIndex: 1156,
        nifty50: 1139,
        niftyFinServices: 1179,
        constituents: 27,
      },
    },
    {
      date: "2022-03-01",
      indexData: {
        ehiIndex: 1158,
        nifty50: 1139,
        niftyFinServices: 1181,
        constituents: 27,
      },
    },
    {
      date: "2022-04-01",
      indexData: {
        ehiIndex: 1163,
        nifty50: 1140,
        niftyFinServices: 1190,
        constituents: 27,
      },
    },
    {
      date: "2022-05-01",
      indexData: {
        ehiIndex: 1167,
        nifty50: 1144,
        niftyFinServices: 1191,
        constituents: 28,
      },
    },
    {
      date: "2022-06-01",
      indexData: {
        ehiIndex: 1177,
        nifty50: 1148,
        niftyFinServices: 1193,
        constituents: 28,
      },
    },
    {
      date: "2022-07-01",
      indexData: {
        ehiIndex: 1180,
        nifty50: 1149,
        niftyFinServices: 1195,
        constituents: 29,
      },
    },
    {
      date: "2022-08-01",
      indexData: {
        ehiIndex: 1187,
        nifty50: 1151,
        niftyFinServices: 1198,
        constituents: 29,
      },
    },
    {
      date: "2022-09-01",
      indexData: {
        ehiIndex: 1187,
        nifty50: 1153,
        niftyFinServices: 1198,
        constituents: 29,
      },
    },
    {
      date: "2022-10-01",
      indexData: {
        ehiIndex: 1188,
        nifty50: 1156,
        niftyFinServices: 1198,
        constituents: 30,
      },
    },
    {
      date: "2022-11-01",
      indexData: {
        ehiIndex: 1190,
        nifty50: 1177,
        niftyFinServices: 1200,
        constituents: 30,
      },
    },
    {
      date: "2022-12-01",
      indexData: {
        ehiIndex: 1194,
        nifty50: 1182,
        niftyFinServices: 1208,
        constituents: 30,
      },
    },
    {
      date: "2023-01-01",
      indexData: {
        ehiIndex: 1197,
        nifty50: 1183,
        niftyFinServices: 1208,
        constituents: 30,
      },
    },
    {
      date: "2023-02-01",
      indexData: {
        ehiIndex: 1204,
        nifty50: 1192,
        niftyFinServices: 1221,
        constituents: 30,
      },
    },
    {
      date: "2023-03-01",
      indexData: {
        ehiIndex: 1207,
        nifty50: 1195,
        niftyFinServices: 1226,
        constituents: 30,
      },
    },
    {
      date: "2023-04-01",
      indexData: {
        ehiIndex: 1208,
        nifty50: 1196,
        niftyFinServices: 1229,
        constituents: 31,
      },
    },
    {
      date: "2023-05-01",
      indexData: {
        ehiIndex: 1217,
        nifty50: 1199,
        niftyFinServices: 1229,
        constituents: 31,
      },
    },
    {
      date: "2023-06-01",
      indexData: {
        ehiIndex: 1220,
        nifty50: 1200,
        niftyFinServices: 1229,
        constituents: 31,
      },
    },
    {
      date: "2023-07-01",
      indexData: {
        ehiIndex: 1222,
        nifty50: 1200,
        niftyFinServices: 1231,
        constituents: 31,
      },
    },
    {
      date: "2023-08-01",
      indexData: {
        ehiIndex: 1226,
        nifty50: 1205,
        niftyFinServices: 1235,
        constituents: 31,
      },
    },
    {
      date: "2023-09-01",
      indexData: {
        ehiIndex: 1228,
        nifty50: 1211,
        niftyFinServices: 1237,
        constituents: 31,
      },
    },
    {
      date: "2023-10-01",
      indexData: {
        ehiIndex: 1230,
        nifty50: 1225,
        niftyFinServices: 1250,
        constituents: 32,
      },
    },
    {
      date: "2023-11-01",
      indexData: {
        ehiIndex: 1231,
        nifty50: 1225,
        niftyFinServices: 1251,
        constituents: 32,
      },
    },
    {
      date: "2023-12-01",
      indexData: {
        ehiIndex: 1232,
        nifty50: 1225,
        niftyFinServices: 1251,
        constituents: 32,
      },
    },
    {
      date: "2024-01-01",
      indexData: {
        ehiIndex: 1235,
        nifty50: 1245,
        niftyFinServices: 1252,
        constituents: 32,
      },
    },
    {
      date: "2024-02-01",
      indexData: {
        ehiIndex: 1246,
        nifty50: 1248,
        niftyFinServices: 1258,
        constituents: 32,
      },
    },
    {
      date: "2024-03-01",
      indexData: {
        ehiIndex: 1251,
        nifty50: 1256,
        niftyFinServices: 1261,
        constituents: 34,
      },
    },
    {
      date: "2024-04-01",
      indexData: {
        ehiIndex: 1263,
        nifty50: 1262,
        niftyFinServices: 1263,
        constituents: 34,
      },
    },
    {
      date: "2024-05-01",
      indexData: {
        ehiIndex: 1268,
        nifty50: 1266,
        niftyFinServices: 1272,
        constituents: 34,
      },
    },
    {
      date: "2024-06-01",
      indexData: {
        ehiIndex: 1268,
        nifty50: 1266,
        niftyFinServices: 1273,
        constituents: 34,
      },
    },
    {
      date: "2024-07-01",
      indexData: {
        ehiIndex: 1277,
        nifty50: 1269,
        niftyFinServices: 1277,
        constituents: 34,
      },
    },
    {
      date: "2024-08-01",
      indexData: {
        ehiIndex: 1277,
        nifty50: 1276,
        niftyFinServices: 1282,
        constituents: 35,
      },
    },
    {
      date: "2024-09-01",
      indexData: {
        ehiIndex: 1279,
        nifty50: 1282,
        niftyFinServices: 1283,
        constituents: 35,
      },
    },
    {
      date: "2024-10-01",
      indexData: {
        ehiIndex: 1281,
        nifty50: 1283,
        niftyFinServices: 1290,
        constituents: 35,
      },
    },
    {
      date: "2024-11-01",
      indexData: {
        ehiIndex: 1284,
        nifty50: 1295,
        niftyFinServices: 1292,
        constituents: 35,
      },
    },
    {
      date: "2024-12-01",
      indexData: {
        ehiIndex: 1285,
        nifty50: 1298,
        niftyFinServices: 1298,
        constituents: 35,
      },
    },
  ];
  const constituentsData = [
    {
      date: "2017-06-30",
      constituentsValue: 9,
    },
    {
      date: "2018-01-01",
      constituentsValue: 15,
    },
    {
      date: "2019-01-01",
      constituentsValue: 15,
    },
    {
      date: "2020-01-01",
      constituentsValue: 19,
    },
    {
      date: "2021-01-01",
      constituentsValue: 22,
    },
    {
      date: "2022-01-01",
      constituentsValue: 25,
    },
    {
      date: "2023-01-01",
      constituentsValue: 32,
    },
    {
      date: "2024-01-01",
      constituentsValue: 38,
    },
  ];

  const myChart = new Chart(ctx, {
    type: "bar", // Base type is bar for mixed chart
    data: {
      datasets: [
        {
          type: "line", // Line Graph 1
          label: "EHI Index",
          data: chartData,
          parsing: {
            xAxisKey: "date",
            yAxisKey: "indexData.ehiIndex",
          },
          backgroundColor: "rgba(252, 249, 0, 1)",
          borderColor: "rgba(252, 249, 0, 1)",
          pointHoverBackgroundColor: "rgba(252, 249, 0, 1)", // Make the dots visible when hovered
          yAxisID: "y",
        },
        {
          type: "line", // Line Graph 2
          label: "NIFTY_50",
          data: chartData,
          parsing: {
            xAxisKey: "date",
            yAxisKey: "indexData.nifty50",
          },
          backgroundColor: "rgba(252, 0, 130, 1)",
          borderColor: "rgba(252,0,130,1)",
          pointHoverBackgroundColor: "rgba(252,0,130,1)", // Make the dots visible when hovered
          yAxisID: "y",
        },
        {
          type: "line", // Line Graph 2
          label: "NIFTY_FIN_SERVICE",
          data: chartData,
          parsing: {
            xAxisKey: "date",
            yAxisKey: "indexData.niftyFinServices",
          },
          backgroundColor: "rgba(58, 150, 255, 1)",
          borderColor: "rgba(58,150,255,1)",
          pointHoverBackgroundColor: "rgba(58, 150, 255, 1)", // Make the dots visible when hovered
          yAxisID: "y",
        },
        {
          type: "bar", // Bar Graph
          label: "Constituents",
          data: constituentsData,
          parsing: {
            xAxisKey: "date",
            yAxisKey: "constituentsValue",
          },

          backgroundColor: "rgba(49, 49, 49, 1)",
          borderColor: "rgba(49, 49, 49, 1)",
          borderRadius: 20, // Sets the border radius for the bars
          barThickness: 100,
          yAxisID: "constituents",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            title: function (tooltipItems) {
              const datasetIndex = tooltipItems[0].datasetIndex;
              const datasetLabel = tooltipItems[0].dataset.label;

              if (datasetLabel === "Constituents") {
                // If it's the bar dataset, return only the year
                const rawDate = tooltipItems[0].parsed.x;
                const date = new Date(rawDate);
                return date.getFullYear().toString(); // Only the year
              } else {
                // For other datasets, return the full date
                const rawDate = tooltipItems[0].parsed.x;
                const date = new Date(rawDate);
                return date.toLocaleDateString(); // Full date
              }
            },
          },
          enabled: true, // Enables tooltips for detected points
          mode: "nearest", // Shows the tooltip for the nearest point
          intersect: true, // Displays tooltip even if cursor is between points
        },
      },
      elements: {
        point: {
          hoverRadius: 5, // Increase point size when hovered
          radius: 5, // Default point size for better visibility
          hitRadius: 5, // Expands the clickable area around a point
        },
      },
      pointHoverRadius: 10,
      pointRadius: 1, // Keeps dots technically present but invisible
      pointHoverRadius: 10, // Keeps dots technically present but invisible
      pointBorderColor: "transparent", // Hides the dot borders
      borderWidth: 3,
      tension: 0.45,
      scales: {
        x: {
          min: "2017-01-01", // Minimum value for the x-axis
          max: "2024-06-01", // Maximum value for the x-axis
          type: "time",
          time: {
            unit: "year",
          },
          offset: false, // Disables padding at the start and end of the graph
          bounds: "data", // Aligns the ticks with the actual data points
          ticks: {
            autoSkip: true, // Ensures only relevant ticks are displayed
          },
        },
        y: {
          type: "linear",
          position: "left",
          grid: { drawOnChartArea: true, color: "rgba(217, 217, 217, 0.2)" },
          min: 800,
          max: 1500,
          title: {
            display: true, // Enable the title
            text: "Index", // Label for the y-axis
            position: "top", // Move the label to the top
          },
        },
        constituents: {
          type: "linear",
          position: "right",
          min: 10,
          max: 40,
          grid: { drawOnChartArea: false },
          title: {
            display: true, // Enable the title
            text: "Constituents", // Label for the constituents axis
            position: "top", // Move the label to the top
          },
        },
      },
    },
  });
});
