import * as React from "react";
import { Bubble } from "react-chartjs-2";

const data = {
  datasets: [
    {
      backgroundcolor: "rgba(225,95,150, 1)",
      data: [
        { x: 90, y: 82 },
        { x: 39, y: 45 },
        { x: 63, y: 65 },
        { x: 83, y: 75 },
        { x: 83, y: 95 }
      ],
      label: "高校生の時"
    },
    {
      backgroundcolor: "rgba(115,255,25, 1)",
      data: [
        { x: 97, y: 92 },
        { x: 63, y: 70 },
        { x: 48, y: 52 },
        { x: 83, y: 79 },
        { x: 66, y: 74 }
      ],
      label: "Good & Moreの時"
    }
  ]
};

const options = {
  scales: {
    xAxes: [
      {
        ticks: { max: 100, min: 0, stepSize: 10 }
      }
    ],
    yAxes: [
      {
        ticks: { max: 0, min: 100, stepSize: 10 }
      }
    ]
  },
  title: {
    display: true,
    text: "告白した"
  },
  tooltips: {
    callbacks: {
      // tslint:disable-next-line:only-arrow-functions object-literal-shorthand
      label: function(t: any, d: any) {
        return d.datasets[t.datasetIndex].label + "少し話してときめいた";
      }
    }
  }
};

const ChartMap = (props: any) => (
  <div>
    <Bubble data={data} options={options} />
  </div>
);

export default ChartMap;
