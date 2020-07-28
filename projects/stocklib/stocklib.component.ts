import { stockdetails } from './../../../app/src/app/stock';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'lib-stocklib',
  templateUrl: './stocklib.component.html',
  styleUrls: ['./stocklib.component.css'
  ]
})
export class StocklibComponent implements OnInit {

  constructor() { }

  revenue="";
  conservationRate="";
  transactions="";
  session="";
 
 ngOnInit(): void {
  }

}
