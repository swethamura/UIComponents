import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'lib-areachartlib',
  templateUrl: './areachartlib.component.html',
  styleUrls: ['./areachartlib.component.css'
  ]
})
export class AreachartlibComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "Views",
          data: [80,100,90,100,75,90,80,85,110,85,80,85]
        },
        {
          name:"Likes",
          data: [40,60,50,60,35,45,30,40,50,40,60,40]
        }
      ],
      chart: {
        height: 350,
        width: 600,
        type: "area",
        dropShadow: {
          enabled: false,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#95B9C7"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "View Chart",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 8
      },
      xaxis: {
        categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        title: {
          text: "Month"
        }
      },
      yaxis: {
        title: {
          text: "values"
        },
        min: 0,
        max: 120
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };

  }
  
  ngOnInit(): void {
  }

}
