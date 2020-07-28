import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-saleslib',
  templateUrl: './saleslib.component.html',
  styleUrls: ['./saleslib.component.css'
  ]
})
export class SaleslibComponent implements OnInit {

  constructor() { }
  sales="";
  revenue="";
  subscribers="";
  visitors="";

  ngOnInit(): void {
  }

}
