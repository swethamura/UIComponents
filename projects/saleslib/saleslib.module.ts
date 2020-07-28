import { MatToolbarModule } from '@angular/material/toolbar';
import { StocklibModule } from './../../../stocklib/src/lib/stocklib.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SaleslibComponent } from './saleslib.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import { SalesComponent } from './sales/sales.component';
import { CodedisplayComponent } from './codedisplay/codedisplay.component';

@NgModule({
  declarations: [SaleslibComponent, SalesComponent, CodedisplayComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    StocklibModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [SaleslibComponent]
})
export class SaleslibModule { }
