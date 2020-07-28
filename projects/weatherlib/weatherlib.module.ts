

import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherlibComponent } from './weatherlib.component';
import { MatButtonModule } from '@angular/material/button';
import { CodedisplayComponent } from './codedisplay/codedisplay.component';



@NgModule({
  declarations: [WeatherlibComponent, CodedisplayComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [WeatherlibComponent]
})
export class WeatherlibModule { }
