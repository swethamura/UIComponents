import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-codedisplay',
  templateUrl: './codedisplay.component.html',
  styleUrls: ['./codedisplay.component.css']
})
export class CodedisplayComponent implements OnInit {

  ishtml=true;
  iscss=false;
  ists=false;

  displayhtml(){
    this.iscss=true;
    this.ishtml=true;
    this.ists=false;
  }

  displaycss(){
    this.ishtml=false;
    this.iscss=true;
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
