import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HoribarlibComponent } from './horibarlib.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { MatButtonModule } from '@angular/material/button';
import { CodedisplayComponent } from './codedisplay/codedisplay.component';


@NgModule({
  declarations: [HoribarlibComponent, CodedisplayComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    NgxChartsModule
  ],
  exports: [HoribarlibComponent]
})
export class HoribarlibModule { }
