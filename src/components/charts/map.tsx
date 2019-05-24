import * as React from "react";
import { Bubble } from "react-chartjs-2";

const data = {
  datasets: [
    {
      backgroundColor: "RGBA(225,95,150, 1)",
      data: [
        { x: 50, y: 75 },
      ],
      label: "高校2生の時"
    },
    {
      backgroundColor: "RGBA(115,255,25, 1)",
      data: [
        { x: 62, y: 79 },
      ],
      label: "Good & Moreの時"
    },
    {
      backgroundColor: "RGBA(115,102,89, 1)",
      data: [
        { x: 24, y: 53 },
      ],
      label: "中学3年生の時"
    },
    {
      backgroundColor: "RGBA(100,128,248, 1)",
      data: [
        { x: 90, y: 56 },
      ],
      label: "新卒交流会"
    },
    {
      backgroundColor: "RGBA(180,199,58, 1)",
      data: [
        { x: 4, y: 48 },
      ],
      label: "習い事を始めさせてくれた時"
    },
    {
      backgroundColor: "RGBA(104,18,157, 1)",
      data: [
        { x: 43, y: 38 },
      ],
      label: "大学3年生"
    },
    {
      backgroundColor: "RGBA(104,18,157, 1)",
      data: [
        { x: 82, y: 24 },
      ],
      label: "彼女に振られた時"
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
