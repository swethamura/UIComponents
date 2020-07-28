import { productheaders } from './../../../app/src/app/mockdata';
import { productstats } from './../../../app/src/app/table';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'lib-tablelib',
  templateUrl: './tablelib.component.html',
  styleUrls: ['./tablelib.component.css'
  ]
})
export class TablelibComponent implements OnInit {

  
  
  public fieldArray : Array<any> =[];
  public newValue :any ={};

  addValue(){
    this.fieldArray.push(this.newValue);
    this.newValue={};
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
