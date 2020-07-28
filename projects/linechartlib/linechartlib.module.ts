import { MatToolbarModule } from '@angular/material/toolbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LinechartlibComponent } from './linechartlib.component';
import { CodedisplayComponent } from './codedisplay/codedisplay.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [LinechartlibComponent, CodedisplayComponent],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [LinechartlibComponent]
})
export class LinechartlibModule { }
