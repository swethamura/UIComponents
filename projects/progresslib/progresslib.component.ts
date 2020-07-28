import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
//import { ProgressBarMode } from '@angular/material/progress-bar';
//import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'lib-progresslib',
  templateUrl: './progresslib.component.html',
  styleUrls: ['./progresslib.component.css'
  ]
})
export class ProgresslibComponent implements OnInit,OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit(): void {
  }

}
