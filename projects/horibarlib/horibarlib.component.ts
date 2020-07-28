import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-horibarlib',
  templateUrl: './horibarlib.component.html',
  styleUrls: ['./horibarlib.component.css'
  ]
})
export class HoribarlibComponent implements OnInit {

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
 
  multi: any[];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  legendPosition: string = 'below';
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Devices';
  showYAxisLabel: boolean = true;
  xAxisLabel = 'Population';

  colorScheme = {
    domain: ['orange', 'green', '#AAAAAA']
  };
  schemeType: string = 'ordinal';

 
  constructor() { 
    Object.assign(this, { multi });
  }

  ngOnInit(): void {
  }

}
