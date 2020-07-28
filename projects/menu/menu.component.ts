import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-menu',
  templateUrl:'./menu.component.html',
  styleUrls: ['./menu.component.css'
  ]
})
export class MenuComponent implements OnInit {

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
 
  constructor() { }

  ngOnInit(): void {
  }

}
