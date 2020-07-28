import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProgresslibComponent } from './progresslib.component';
//import {ProgressBarModule} from 'angular-progress-bar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CodedisplayComponent } from './codedisplay/codedisplay.component';

@NgModule({
  declarations: [ProgresslibComponent, CodedisplayComponent],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    NgbModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  //  ProgressBarModule
  //NgbProgressbarModule
  ],
  exports: [ProgresslibComponent],

})
export class ProgresslibModule { }
