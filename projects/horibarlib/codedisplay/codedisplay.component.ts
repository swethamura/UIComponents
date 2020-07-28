import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-codedisplay',
  templateUrl: './codedisplay.component.html',
  styleUrls: ['./codedisplay.component.css']
})
export class CodedisplayComponent implements OnInit {

  ishtml=true;
  ists=false;

  displayhtml(){
    this.ishtml=true;
    this.ists=false;
  }

  

  displayts(){
    this.ishtml=false;
    this.iscss=false;
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
