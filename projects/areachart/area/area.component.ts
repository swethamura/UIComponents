import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  ishtml=true;
  iscss=false;
  ists=false;

  displayhtml(){
    this.iscss=true;
    this.ishtml=true;
    this.ists=false;
  }

 
  displayts(){
    this.ishtml=false;
    this.ists=true;
    this.iscss=false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
