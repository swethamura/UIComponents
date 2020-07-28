import { MatToolbarModule } from '@angular/material/toolbar';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgModule } from '@angular/core';
import { PielibComponent } from './pielib.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { CodedisplayComponent } from './codedisplay/codedisplay.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PielibComponent, CodedisplayComponent],
  imports: [
    NgApexchartsModule,
    GoogleChartsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [PielibComponent]
})
export class PielibModule { }
