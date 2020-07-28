
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-codedisplay',
  templateUrl: './codedisplay.component.html',
  styleUrls: ['./codedisplay.component.css']
})
export class CodedisplayComponent implements OnInit {

  iscss=false;
  ishtml=true;
  ists=false;
  displayhtml(){
    this.iscss=false;
    this.ists=false;
    this.ishtml=true;
  }
  displaycss(){
    this.iscss=true;
    this.ishtml=false;
    this.ists=false;
  }
  displayts(){
    this.ishtml=false;
    this.iscss=false;
    this.ists=true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
