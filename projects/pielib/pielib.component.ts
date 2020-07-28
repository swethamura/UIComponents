import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'lib-pielib',
  templateUrl: './pielib.component.html',
  styleUrls: ['./pielib.component.css'
  ]
})
export class PielibComponent implements OnInit {
 
 

    title="Revenue by City";
    data=[["Reston",10],["Tysons",20],["Mountainview",30],["NewYork",40],["Sunnyvale",50],["others",70]];
    type='PieChart';
    width=550;
    height=400;
    options = {
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: false
   };
  constructor() { }

  ngOnInit(): void {
  }

}
