import { Component, OnInit } from '@angular/core';
import {faTable,faCalendar,faEnvelope,faHome,faAnchor,faImage,faMapMarker,faSearch,faUser,faChartBar,faAngleLeft,faThLarge} from '@fortawesome/free-solid-svg-icons';
import {MatBadgeModule } from '@angular/material/badge';
@Component({
  selector: 'lib-dashboardlib',
  templateUrl:'./dashboardlib.component.html',
  styleUrls: ['./dashboardlib.component.css'
  ]
})
export class DashboardlibComponent implements OnInit {

  constructor() { }
  mail=faEnvelope;
  home=faHome;
  map=faMapMarker;
  table=faTable;
  user=faUser;
  widget=faThLarge;
  calendar=faCalendar;
  anchor=faAnchor;
  chart=faChartBar;
  image=faImage;
  search=faSearch;
  left=faAngleLeft;

   
  ngOnInit(): void {
  }

}
