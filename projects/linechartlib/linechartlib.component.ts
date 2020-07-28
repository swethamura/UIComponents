
import { linedata } from './linechartdata';
import { Component, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

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
  selector: 'lib-linechartlib',
  templateUrl:'./linechartlib.component.html',
  styleUrls: ['./linechartlib.component.css'
  ]
})
export class LinechartlibComponent implements OnInit,OnChanges {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Sessions",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Sessions(previous 30 days)",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ],
      chart: {
        height: 350,
        width:600,
        type: "line",
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
        text: "Session Chart",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        },
        column:{
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 8
      },
      xaxis: {
        categories: ["Jun8","Jun13","Jun18","Jun23","Jun28","Jul3"],
        title: {
          text: "Month"
        }
      },
      yaxis: {
        title: {
          text: "sessions"
        },
        min: 5,
        max: 40
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
   ishtml=true;
   iscss=false;
   ists=false;
   displayhtml(){
     this.ishtml=true;
     this.iscss=false;
     this.ists=false;
   }
   displaycss(){
     this.iscss=true;
     this.ishtml=false;
     this.ists=false;
   }
   displayts(){
     this.ists=true;
     this.ishtml=false;
     this.iscss=false;
   }
  
  ngOnChanges(changes: SimpleChanges): void {
    
  }


  ngOnInit(): void {
  }

}
