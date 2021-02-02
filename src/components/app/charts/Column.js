import React from "react";

//Vendor
import Chart from "react-apexcharts";

function Column({ height = 350, labels, values }) {
  console.log(labels, values);
  let params = {
    series: [{ data: values }],
    options: {
      chart: {
        height,
        toolbar: {
          show: false
        },
        type: "bar"
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true
      },
      xaxis: {
        categories: labels,
        labels: {
          style: {
            fontSize: "12px"
          }
        }
      }
    }
  };

  return (
    <Chart
      {...params}
      height={height * 1.1}
      type="bar"
      style={{ minWidth: height * 1.2 }}
    />
  );
}

export default Column;
