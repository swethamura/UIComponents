import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AreachartlibComponent } from './areachartlib.component';
import { AreaComponent } from './area/area.component';



@NgModule({
  declarations: [AreachartlibComponent, AreaComponent],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    MatButtonModule,MatToolbarModule
  ],
  exports: [AreachartlibComponent]
})
export class AreachartlibModule { }
