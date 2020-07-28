import { Component, OnInit } from '@angular/core';
import {faCloud,faCloudSun,faCloudRain,faCloudMoonRain,faCloudSunRain,faMapMarker} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'lib-weatherlib',
  templateUrl: './weatherlib.component.html',
  styleUrls: ['./weatherlib.component.css'
  ]
})
export class WeatherlibComponent implements OnInit {

  constructor() { }
  sunrain=faCloudSunRain;
  map=faMapMarker;
  cloud=faCloud;
  sun=faCloudSun;
  rain=faCloudRain;
  moonrain=faCloudMoonRain;

 
  ngOnInit(): void {
  }

}
